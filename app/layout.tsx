import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { PageContextProvider } from "@@/context/FilterProvider";
import { LoaderWrapper } from "./LoaderWrapper";

export const metadata: Metadata = {
  title: "f-bit software",
  description: "Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert.",
  keywords: "freelancer, entwickler, software, freiberufler",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "f-bit software",
    description: "Erfahrener Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert.",
    images: ["/img/f-bit_logo.png"],
  },
  twitter: {
    card: "summary",
    title: "f-bit software | Frédéric Bolvin IT-Softwareentwicklung",
    description: "Erfahrener Softwareentwickler im Bereich der modernen Webentwicklung. Ihr zuverlässiger Ansprechpartner für webbasierte Unternehmenslösungen mit Mehrwert.",
    images: ["/img/f-bit_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      {process.env.NODE_ENV !== "development" && (
        <Script
          defer
          src="https://analytics.f-bit.software/script.js"
          data-website-id="96f16fb3-b7e4-46ab-a677-0e13a5e7fdd5"
        />
      )}
      <body>
        <PageContextProvider>
          <LoaderWrapper />
          {children}
        </PageContextProvider>
      </body>
    </html>
  );
}
