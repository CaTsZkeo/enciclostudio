-- Enciclostudio — Paso 7.4
-- Modelo remoto básico de artículos de usuario. No contiene cuerpo editorial obligatorio
-- ni sustituye el editor, la biblioteca ni los artículos estáticos.

create table public.articles (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references public.profiles (user_id) on delete cascade,
    title text not null,
    subject text not null,
    level text not null,
    summary text not null,
    content text,
    resource text,
    status text not null default 'draft',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    published_at timestamptz,
    content_type text not null default 'article',
    constraint articles_status_check check (status in ('local', 'draft', 'published', 'archived')),
    constraint articles_content_type_check check (content_type = 'article'),
    constraint articles_published_at_check check (
        (status = 'published' and published_at is not null)
        or (status <> 'published' and published_at is null)
    )
);

alter table public.articles enable row level security;

revoke all on table public.articles from anon;
grant select, delete on table public.articles to authenticated;
grant insert (owner_id, title, subject, level, summary, content, resource) on table public.articles to authenticated;
grant update (title, subject, level, summary, content, resource) on table public.articles to authenticated;

create policy "articles_select_own"
on public.articles
for select
to authenticated
using ((select auth.uid()) = owner_id);

create policy "articles_insert_own_draft"
on public.articles
for insert
to authenticated
with check (
    (select auth.uid()) = owner_id
    and status = 'draft'
    and published_at is null
    and content_type = 'article'
);

create policy "articles_update_own_draft"
on public.articles
for update
to authenticated
using (
    (select auth.uid()) = owner_id
    and status = 'draft'
)
with check (
    (select auth.uid()) = owner_id
    and status = 'draft'
    and published_at is null
    and content_type = 'article'
);

create policy "articles_delete_own"
on public.articles
for delete
to authenticated
using ((select auth.uid()) = owner_id);

create or replace function public.set_articles_timestamps()
returns trigger
language plpgsql
set search_path = public
as $$
begin
    if tg_op = 'INSERT' then
        new.created_at := now();
        new.updated_at := new.created_at;
    else
        new.created_at := old.created_at;
        new.updated_at := now();
    end if;
    return new;
end;
$$;

revoke all on function public.set_articles_timestamps() from public;

create trigger articles_set_timestamps
before insert or update on public.articles
for each row
execute function public.set_articles_timestamps();
