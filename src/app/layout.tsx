import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clarsoiloki.com"),
  title: {
    default: "Clarsi Trésor ILOKI | Ingénieur Big Data & IA",
    template: "%s | Clarsi Trésor ILOKI",
  },
  description:
    "Portfolio professionnel de Clarsi Trésor ILOKI, Ingénieur Big Data et IA basé à Casablanca, Maroc. Spécialisé en Machine Learning, Deep Learning et architectures Big Data.",
  keywords: [
    "Big Data",
    "IA",
    "Machine Learning",
    "Data Science",
    "Portfolio",
    "Ingénieur",
    "Casablanca",
    "Maroc",
  ],
  authors: [{ name: "Clarsi Trésor ILOKI" }],
  creator: "Clarsi Trésor ILOKI",
  publisher: "Clarsi Trésor ILOKI",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://clarsoiloki.com",
    title: "Clarsi Trésor ILOKI | Ingénieur Big Data & IA",
    description:
      "Portfolio professionnel de Clarsi Trésor ILOKI, Ingénieur Big Data et IA basé à Casablanca, Maroc.",
    siteName: "Clarsi ILOKI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarsi Trésor ILOKI | Ingénieur Big Data & IA",
    description:
      "Portfolio professionnel de Clarsi Trésor ILOKI, Ingénieur Big Data et IA basé à Casablanca, Maroc.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
