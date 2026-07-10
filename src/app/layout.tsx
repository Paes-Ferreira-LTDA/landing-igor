import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igor — Página profissional",
  description: "Landing page profissional de Igor.",
  openGraph: {
    title: "Igor — Página profissional",
    description: "Landing page profissional de Igor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
