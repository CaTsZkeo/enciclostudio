-- Enciclostudio — Paso 7.4
-- Restricción explícita de privilegios del cliente para impedir cambios sobre
-- owner_id, status, content_type, published_at e timestamps.

revoke all privileges on table public.articles from anon, authenticated;
grant select, delete on table public.articles to authenticated;
grant insert (owner_id, title, subject, level, summary, content, resource) on table public.articles to authenticated;
grant update (title, subject, level, summary, content, resource) on table public.articles to authenticated;
