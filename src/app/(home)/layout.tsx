import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Nav from "@/components/ui/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Môi giới phòng trọ",
  description: "NEXT APP",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}