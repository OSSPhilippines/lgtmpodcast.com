import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LGTM Podcast - Tech Talks by OSSPH",
  description: "LGTM Podcast is a tech podcast by Open Source Software Philippines (OSSPH) featuring discussions about software development, open source, and technology in the Philippines.",
  keywords: ["LGTM", "Podcast", "OSSPH", "Open Source", "Tech", "Software Development", "Philippines", "Technology"],
  authors: [{ name: "OSSPH" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "LGTM Podcast - Tech Talks by OSSPH",
    description: "LGTM Podcast is a tech podcast by Open Source Software Philippines (OSSPH) featuring discussions about software development, open source, and technology in the Philippines.",
    type: "website",
    locale: "en_US",
    siteName: "LGTM Podcast",
  },
  twitter: {
    card: "summary_large_image",
    title: "LGTM Podcast - Tech Talks by OSSPH",
    description: "LGTM Podcast is a tech podcast by Open Source Software Philippines (OSSPH) featuring discussions about software development, open source, and technology in the Philippines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black">
        {children}
      </body>
    </html>
  );
}
