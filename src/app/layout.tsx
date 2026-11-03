import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Warkop Indonesia | Ruang Santai & Cita Rasa Otentik Makassar",
  description:
    "Nikmati aneka kopi susu khas, non-coffee segar, indomie lezat, dan aneka snack di Warkop Indonesia. Buka setiap hari 08.00 - 24.00 di Paropo, Panakkukang, Makassar.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} font-sans antialiased min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C241F]`}>
        {children}
      </body>
    </html>
  );
}
