import { createClient } from "@supabase/supabase-js";

/**
 * Cliente Supabase para uso EXCLUSIVO no servidor (API routes, server actions).
 * Usa a service_role key, que ignora RLS — nunca importe isto em código client.
 */
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Variáveis de ambiente do Supabase ausentes: NEXT_PUBLIC_SUPABASE_URL e/ou SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
