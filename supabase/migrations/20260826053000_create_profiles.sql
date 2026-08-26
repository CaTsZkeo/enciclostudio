-- Enciclostudio — Paso 7.3
-- Perfil público/editable separado de las credenciales gestionadas por Supabase Auth.

create table public.profiles (
    user_id uuid primary key references auth.users (id) on delete cascade,
    display_name text,
    avatar text,
    bio text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

revoke all on table public.profiles from anon;
grant select, insert, update on table public.profiles to authenticated;

create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "profiles_insert_own"
on public.profiles
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create or replace function public.set_profiles_timestamps()
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

revoke all on function public.set_profiles_timestamps() from public;

create trigger profiles_set_timestamps
before insert or update on public.profiles
for each row
execute function public.set_profiles_timestamps();
