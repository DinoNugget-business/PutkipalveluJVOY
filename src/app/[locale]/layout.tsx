import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Rajdhani } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: "LVI-urakointi ja energiaremontit Uudellamaalla | Putkipalvelu J&V Oy",
    template: "%s | Putkipalvelu J&V Oy",
  },
  description:
    "Maalämpöasennukset, kaukolämpöpaketit, linjasaneeraukset ja LVI-huolto Uudellamaalla. Omistajavetoisesti, ilman välikäsiä. Soita Jannelle — 045 359 9813.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: "Putkipalvelu J&V Oy",
    title: "LVI-urakointi ja energiaremontit Uudellamaalla | Putkipalvelu J&V Oy",
    description:
      "Maalämpöasennukset, kaukolämpöpaketit, linjasaneeraukset ja LVI-huolto Uudellamaalla. Soita Jannelle — 045 359 9813.",
  },
  twitter: {
    card: "summary",
    title: "LVI-urakointi ja energiaremontit | Putkipalvelu J&V Oy",
    description:
      "Maalämpöasennukset, kaukolämpöpaketit, linjasaneeraukset ja LVI-huolto Uudellamaalla.",
  },
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${rajdhani.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Putkipalvelu J&V Oy",
              description:
                "LVI-urakointi ja energiaremontit Uudellamaalla. Maalämpöasennukset, kaukolämpöpaketit, linjasaneeraukset.",
              url: "https://putkipalvelujv.com",
              telephone: "+358453599813",
              email: "Janne.kurki@gmail.com",
              areaServed: "Uusimaa",
              founder: {
                "@type": "Person",
                name: "Janne Kurki",
              },
              foundingDate: "2022",
              memberOf: {
                "@type": "Organization",
                name: "Rakennusvoima ry",
              },
            }),
          }}
        />
      </head>
      <body className="bg-white font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
