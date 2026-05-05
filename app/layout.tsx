import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qorua — The Registry for MCP Servers",
  description:
    "Find, trust, and pay for MCP servers. Register your server in 2 minutes. Get discovered by every AI agent looking for what you do.",
  openGraph: {
    title: "Qorua — The Registry for MCP Servers",
    description:
      "Find, trust, and pay for MCP servers. Register your server in 2 minutes.",
    url: "https://qorua.com",
    siteName: "Qorua",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
