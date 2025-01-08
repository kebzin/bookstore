import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexProvider";
import Navbar from "@/components/ui/Navbar";
// import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <AppProvider>
          <div className="fixed left-0 right-0">
            <Navbar />
          </div>

          {children}

          <footer className="bg-gray-800 text-gray-300 py-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h2 className="text-white text-2xl font-bold mb-4">
                  GCTU Bookstore
                </h2>
                <p>
                  An Online Bookshop designed by Allies Group through System
                  Analysis and Design.
                </p>
              </div>
              <nav>
                <h3 className="text-white font-semibold mb-4">Help</h3>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h3 className="text-white font-semibold mb-4">Policies</h3>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Shipping & Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Return & Refund
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Accra, Tesano
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      +233 536 96 8552
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      allies@gctu.edu.gh
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      bookstore.gctu.edu.gh
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center mt-8">
              <p>© 2024, Allies Group SAAD. All rights reserved.</p>
            </div>
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
