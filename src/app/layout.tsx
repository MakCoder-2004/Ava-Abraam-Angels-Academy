import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className="bg-orange-100/50">{children}</body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
