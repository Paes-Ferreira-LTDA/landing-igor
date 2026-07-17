import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Igor Ferreira — AI · Engineering · Strategy",
  description:
    "Technical founder and AI systems builder. Available for Head of AI and Founding AI Engineer roles. Built Bishop, Walter, MUTHUR and production AI agents on GCP.",
  openGraph: {
    title: "Igor Ferreira — AI · Engineering · Strategy",
    description:
      "Technical founder who ships AI to production. LangGraph, Claude, Vertex AI, Kubernetes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Ferreira — AI · Engineering · Strategy",
    description: "Technical founder who ships AI to production.",
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
