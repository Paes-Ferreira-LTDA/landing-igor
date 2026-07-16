import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resend = new Resend(process.env.RESEND_API_KEY);

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

  const cleanName    = name.trim().slice(0, 200);
  const cleanEmail   = email.trim().toLowerCase().slice(0, 320);
  const cleanMessage = typeof message === "string" ? message.trim().slice(0, 5000) : null;

  // 1. Salvar no Supabase
  try {
    const supabase = createServiceClient();
    const { error } = await supabase.from("leads").insert({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
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

  // 2. Notificação por e-mail
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "igor.ferreira@fohat.com.br",
      subject: `Novo contato: ${cleanName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#3B82F6;margin:0 0 16px">Novo contato via paesferreira.com</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#6B7280;width:80px">Nome</td>
              <td style="padding:8px 0;font-weight:600">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6B7280">E-mail</td>
              <td style="padding:8px 0">
                <a href="mailto:${cleanEmail}" style="color:#3B82F6">${cleanEmail}</a>
              </td>
            </tr>
            ${cleanMessage ? `
            <tr>
              <td style="padding:8px 0;color:#6B7280;vertical-align:top">Mensagem</td>
              <td style="padding:8px 0;white-space:pre-wrap">${cleanMessage}</td>
            </tr>` : ""}
          </table>
          <hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0"/>
          <p style="color:#9CA3AF;font-size:12px;margin:0">
            Enviado via paesferreira.com.br · Salvo no Supabase
          </p>
        </div>
      `,
    });
  } catch (err) {
    // Não falha o fluxo se o email não sair — lead já está salvo
    console.error("Falha ao enviar email Resend:", err);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
