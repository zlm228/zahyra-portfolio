import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const socialImage = `${protocol}://${host}/og.png`;
  const title = "Zahyra Otero — Data, Product & Thoughtful Technology";
  const description = "The portfolio of Zahyra Otero, an NYU data science student building thoughtful, useful technology.";

  return {
    title,
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: { title, description, type: "website", images: [{ url: socialImage, width: 1712, height: 910, alt: "Zahyra Otero portfolio" }] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}><body>{children}</body></html>;
}
