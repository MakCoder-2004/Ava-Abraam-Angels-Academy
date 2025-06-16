import Navbar from "@/components/Navbar";
import "./globals.css"; // Your global CSS import
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      <header>
        <Navbar />
      </header>
      <body>{children}</body>
      <footer></footer>
    </html>
  );
}
