import { createBrowserClient } from "@supabase/ssr";

/**
 * Cliente Supabase para uso no browser. Usa a anon key (pública).
 * Útil se a landing evoluir para features autenticadas / realtime.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
