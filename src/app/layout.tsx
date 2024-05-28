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
          <link rel="icon" href="/path/to/favicon.ico" type="image/x-icon"/>
          <meta property="og:title" content="JIRI DEV" />
          <meta property="og:description" content="JIRI DEV" />
          <meta property="og:image" />
          <meta property="og:url"/>
          <link rel="shortcut icon" href="/icon.ico" />
      <body className={`${fira_Code.className} bg-[#0A0E1B] text-slate-100 mx-auto p-2 `}>{children}</body>
    </html>
  );
}
