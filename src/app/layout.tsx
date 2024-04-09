
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import AppProvider from "@/app/AppProvider";
import { cookies } from "next/headers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Môi giới phòng trọ",
  description: "NEXT APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider initAccessToken={accessToken?.value || ''}>
          {children}
        </AppProvider>
        <Toaster />
      </body>
    </html>
  );
}
