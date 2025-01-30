import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bianca Frade | Nutricionista",
  description: "Entenda sua situação e agende sua consulta.",
  keywords: [
    "nutricionista",
    "nutricionista em patos",
    "emagrecimento patos",
    "nutricionista patos",
    "bianca frade nutri",
    "nutri em patos",
    "nutri patos",
    "bianca frade nutricionista",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
