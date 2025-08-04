import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartContext";
import { AuthProvider } from "../components/AuthContext";
import { ModalProvider } from "../components/ModalProvider";
import HoverCard from "@/components/HoverCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oitijjho Express",
  description: "An elegant platform for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-white text-gray-800 bg-gradient-custom`}
      >
        <AuthProvider>
          <ModalProvider>
            <CartProvider>
              <Navbar />
              <div className="pt-24 relative">
                <div className="fixed z-[90] top-1/2 sm:max-xl:top-[60%] -translate-y-1/2 left-0">
                  <HoverCard />
                </div>
                {children}
                <div className="fixed z-[90] top-1/2 sm:max-xl:top-[60%] -translate-y-1/2 right-0">
                  <HoverCard />
                </div>
              </div>
              <Footer />
            </CartProvider>
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
