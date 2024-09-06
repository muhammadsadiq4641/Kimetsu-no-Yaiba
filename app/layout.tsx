import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Web3ModalProvider from "@components/modals/connect-wallet/connect-wallet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kimetsu No Yaiba",
  description: "Kimetsu No Yaiba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
