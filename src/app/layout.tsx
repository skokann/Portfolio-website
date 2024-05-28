import { Fira_Code } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import TitleRotator from "./TitleRotator"; // Import the client component

const fira_Code = Fira_Code({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/path/to/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="Jiří Zubryckyj - Web Developer & Designer" />
        <meta property="og:description" content="Profesionální web developer a designer specializující se na tvorbu moderních a funkčních webových stránek, grafický design a digitální marketing." />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="shortcut icon" href="/icon.ico" />
      </head>
      <body className={`${fira_Code.className} bg-[#0A0E1B] text-slate-100 mx-auto p-2`}>
        <TitleRotator /> {/* Add the client component for title rotation */}
        {children}
      </body>
    </html>
  );
}
