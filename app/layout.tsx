import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZTS Telecom — Premium Mobile Phone Trading | UAE & Pakistan",
  description:
    "ZTS Telecom FZ-LLC is a UAE government-licensed mobile phone trading company offering brand new and used smartphones from Apple, Samsung, Google, OnePlus, Xiaomi and more. Operating across UAE and Pakistan.",
  openGraph: {
    title: "ZTS Telecom — Premium Mobile Phone Trading",
    description:
      "UAE government-licensed mobile phone dealer. Brand new & used iPhones, Samsung, Google Pixel and more. Serving UAE & Pakistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
