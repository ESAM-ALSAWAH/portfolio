import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";

const robotoSans = Roboto({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Portfolio | Esam Alsawah",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${robotoSans.variable} font-roboto dark`}
      >
        <div className="max-w-6xl px-4 pb-20 sm:pb-10 mx-auto">
          <Navbar />
          <main className="mt-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
