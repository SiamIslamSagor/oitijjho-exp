import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartContext";
import HoverCard from "@/components/HoverCard";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
        style={{
          backgroundImage:
            "linear-gradient(0deg, hsl(197deg 61% 55%) 0%, hsl(198deg 59% 60%) 10%, hsl(199deg 59% 65%) 20%, hsl(200deg 58% 69%) 29%, hsl(200deg 58% 72%) 38%, hsl(201deg 57% 76%) 46%, hsl(201deg 57% 80%) 54%, hsl(201deg 57% 83%) 61%, hsl(201deg 57% 86%) 69%, hsl(202deg 56% 90%) 77%, hsl(202deg 56% 93%) 84%, hsl(202deg 56% 97%) 92%, hsl(0deg 0% 100%) 100%)",
        }}
      >
        <CartProvider>
          <Navbar />
          <div className="pt-24 relative">
            <div className="fixed top-1/2 -translate-y-1/2 left-0">
              <HoverCard />
            </div>
            {children}
            <div className="fixed top-1/2 -translate-y-1/2 right-0">
              <HoverCard />
            </div>
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
