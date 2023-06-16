import { Nunito } from "next/font/google";

import Navbar from "@/app/components/Navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal/>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// Last try
