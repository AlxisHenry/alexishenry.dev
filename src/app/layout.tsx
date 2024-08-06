import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { DataProvider, LocaleProvider, ThemeProvider } from "../contexts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexis HENRY - Portfolio",
  description: "Alexis HENRY - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <DataProvider>
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
        </DataProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}
