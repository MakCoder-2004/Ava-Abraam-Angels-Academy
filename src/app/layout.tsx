"use client";

import Navbar from "@/components/Navbar";
import "../Css/globals.css";
import Footer from "@/components/Footer";
import { LoadingProvider, useLoading } from "@/contexts/LoadingContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <>
      <Navbar />
      {children}
      {!isLoading && <Footer />}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-orange-100/50">
        <LoadingProvider>
          <LayoutContent>{children}</LayoutContent>
        </LoadingProvider>
      </body>
    </html>
  );
}
