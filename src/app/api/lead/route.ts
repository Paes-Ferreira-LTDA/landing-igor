import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Nome inválido." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }
  if (message !== undefined && typeof message !== "string") {
    return NextResponse.json({ error: "Mensagem inválida." }, { status: 400 });
  }

  try {
    const supabase = createServiceClient();
    const { error } = await supabase.from("leads").insert({
      name: name.trim().slice(0, 200),
      email: email.trim().toLowerCase().slice(0, 320),
      message: typeof message === "string" ? message.trim().slice(0, 5000) : null,
    });

    if (error) {
      console.error("Erro ao inserir lead:", error);
      return NextResponse.json(
        { error: "Não foi possível registrar. Tente novamente." },
        { status: 500 },
      );
    }
  } catch (err) {
    console.error("Falha na API de lead:", err);
    return NextResponse.json(
      { error: "Serviço indisponível no momento." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
