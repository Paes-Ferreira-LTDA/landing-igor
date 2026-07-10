-- Tabela de leads capturados pela landing page.
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  message     text,
  source      text default 'landing-igor',
  created_at  timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Habilita Row Level Security. Sem policies de leitura/escrita públicas,
-- ninguém acessa a tabela com a anon key.
alter table public.leads enable row level security;

-- Nenhuma policy é criada de propósito: a inserção de leads acontece
-- exclusivamente na API route do servidor usando a service_role key,
-- que ignora RLS. Isso evita que a tabela seja lida/escrita pelo browser.
