import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/client/NavBar/NavBar";
import Search from "./Search/Search";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menzenic Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {children}
        {/* <Footer /> */}

      </body>
    </html>
  );
}
