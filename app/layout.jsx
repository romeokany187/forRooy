import { Gantari } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
const gantari = Gantari({ subsets: ["latin-ext"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gantari.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
