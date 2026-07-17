import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://paesferreira.com.br");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Igor Ferreira — AI · Engineering · Strategy",
  description:
    "Technical founder and AI systems builder. Available for Head of AI and Founding AI Engineer roles. Built Bishop, Walter, MUTHUR and production AI agents on GCP.",
  openGraph: {
    title: "Igor Ferreira — AI · Engineering · Strategy",
    description:
      "Technical founder who ships AI to production. LangGraph, Claude, Vertex AI, Kubernetes.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Igor Paes Ferreira — Head of AI · Founding AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Ferreira — AI · Engineering · Strategy",
    description: "Technical founder who ships AI to production.",
    images: ["/og.png"],
  },
  keywords: [
    "Head of AI",
    "AI Engineer",
    "Founding AI Engineer",
    "LangGraph",
    "Claude",
    "Vertex AI",
    "Kubernetes",
    "GCP",
    "Igor Paes Ferreira",
    "Paes Ferreira",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
