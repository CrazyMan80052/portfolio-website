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
    title: "Sahas Uppalapati | Software Engineer",
    description:
        "Software engineer graduating in December 2026 with experience building data, ML infrastructure, distributed systems, and backend services at Amazon and Nokia.",
    openGraph: {
        title: "Sahas Uppalapati | Software Engineer",
        description:
            "Software engineer graduating in December 2026 with experience building data, ML infrastructure, distributed systems, and backend services at Amazon and Nokia.",
        url: "https://sahas-portfolio-website.vercel.app/",
        siteName: "Sahas Uppalapati",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Sahas Uppalapati | Software Engineer",
        description:
            "Software engineer graduating in December 2026 with experience building data, ML infrastructure, distributed systems, and backend services at Amazon and Nokia.",
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
