import type { Metadata } from "next";

import { Mulish } from "next/font/google";

import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Finance IA - Simplifique sua vida financeira",
  description: "Acompanhe suas finanças de forma simples e prática",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} dark antialiased`}>
        <ClerkProvider appearance={{ baseTheme: dark }}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
