import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileTabs from "./components/MobileTabs/MobileTabs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ledger App",
  description: "ledger app",
};

export default function DashboardRootLayout({ children }) {
  return (
    <>
      {children}
      <MobileTabs />
    </>
  );
}
