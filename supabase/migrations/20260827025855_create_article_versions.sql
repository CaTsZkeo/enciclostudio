-- Enciclostudio — Paso 7.5.2
-- Modelo independiente de instantáneas históricas de artículos remotos.
-- No sustituye public.articles, no crea versiones automáticamente y no implementa restauración.

create table public.article_versions (
    id uuid primary key default gen_random_uuid(),
    article_id uuid not null
        references public.articles (id) on delete cascade,
    version_number integer not null
        constraint article_versions_version_number_check check (version_number > 0),
    title text not null,
    subject text not null,
    level text not null,
    summary text not null,
    content text,
    resource text,
    created_at timestamptz not null default now(),
    constraint article_versions_article_version_unique
        unique (article_id, version_number)
);

create index article_versions_article_id_idx
    on public.article_versions (article_id);

alter table public.article_versions enable row level security;

revoke all privileges on table public.article_versions from anon, authenticated;
grant select on table public.article_versions to authenticated;

create policy "article_versions_select_own"
on public.article_versions
for select
to authenticated
using (
    exists (
        select 1
        from public.articles as article
        where article.id = article_versions.article_id
          and article.owner_id = (select auth.uid())
    )
);
