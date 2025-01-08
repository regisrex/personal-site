import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const font = Instrument_Sans({
  weight: '400',
  subsets: ['latin'],

})

export const metadata: Metadata = {
  title: "Regis N's website",
  description: "Hey, I'm Regis N. I'm a software engineer, a UX Designer, a mentor, and tech-blogger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
