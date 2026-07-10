# landing-igor

Página profissional. Stack: **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Supabase**, pronta para deploy na **Vercel**.

## Estrutura

```
landing-igor/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # layout raiz + metadata/SEO
│   │   ├── page.tsx             # composição da landing
│   │   ├── globals.css          # Tailwind v4 + tema
│   │   └── api/lead/route.ts    # API que grava leads no Supabase
│   ├── components/              # Hero, Features, ContactForm, Footer
│   └── lib/supabase/            # clients server (service_role) e browser (anon)
├── supabase/migrations/         # SQL da tabela `leads`
├── .env.example                 # variáveis necessárias
└── vercel.json                  # config de deploy (região gru1)
```

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha com os valores do seu projeto Supabase
npm run dev                  # http://localhost:3000
```

## Configurar o Supabase

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Em **Project Settings → API**, copie:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` → `SUPABASE_SERVICE_ROLE_KEY` (secreta)
3. Rode a migration da tabela `leads`. Opções:
   - **SQL Editor** do dashboard: cole o conteúdo de `supabase/migrations/0001_leads.sql` e execute; ou
   - **Supabase CLI**: `supabase link` e `supabase db push`.

> A tabela tem RLS habilitado sem policies públicas. A inserção de leads só
> acontece no servidor, via `service_role` key na API route `/api/lead`.

## Deploy na Vercel

1. Importe o repositório em [vercel.com/new](https://vercel.com/new). O framework Next.js é detectado automaticamente.
2. Em **Settings → Environment Variables**, adicione as 3 variáveis do `.env.example`
   (marque `SUPABASE_SERVICE_ROLE_KEY` para os ambientes desejados; ela é secreta).
3. Deploy. A cada push na branch principal a Vercel publica automaticamente.

## Consultar os leads

No dashboard do Supabase: **Table Editor → leads**, ou via SQL:

```sql
select name, email, message, created_at
from public.leads
order by created_at desc;
```
