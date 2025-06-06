import type { Metadata } from "next";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import SmoothScroll from "@/src/components/smoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PalaWonder - Explore Palawan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <SmoothScroll/>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
