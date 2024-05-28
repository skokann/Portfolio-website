import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira_Code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JIRI DEV",
  description: "Portfolio of a software engineer",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_Code.className} bg-[#0A0E1B] text-slate-100 mx-auto p-2 `}>{children}</body>
    </html>
  );
}
