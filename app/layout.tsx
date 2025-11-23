import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "800"]
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600"] 
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500"]
});

export const metadata: Metadata = {
  title: "Lumière Exclusive Invitation",
  description: "A premium, animation-rich digital invitation experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${cinzel.variable} ${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}