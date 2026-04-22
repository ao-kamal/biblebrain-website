import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.biblebrain.ng"),
  title: {
    template: "%s | Bible Brain®",
    default: "Bible Brain® — Raising a Generation Through Scripture",
  },
  description:
    "Bible Brain® is a structured Bible engagement and youth development platform using competition, media, and disciplined learning to build values-driven leaders.",
  keywords: [
    "Bible Brain",
    "youth platform",
    "Nigeria",
    "Scripture",
    "teenagers",
    "faith",
    "Christian youth",
    "Bible competition",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.biblebrain.ng",
    siteName: "Bible Brain®",
    title: "Bible Brain® — Raising a Generation Through Scripture",
    description:
      "A structured Bible engagement and youth development platform building values-driven leaders through competition, media, and disciplined learning.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bible Brain® — A Global Youth Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Brain® — Raising a Generation Through Scripture",
    description:
      "A structured Bible engagement platform building values-driven leaders.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/gallery/FB_IMG_1775728564798.jpg" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
