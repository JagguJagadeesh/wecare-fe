import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
import Loading from "./loading";
// import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "WeCare",
  description: "Remote Patient Monitoring System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
      <Toaster/>
      <Suspense fallback={<Loading/>} >
       <div>
        {children}
       </div>
      </Suspense>
      </body>
    </html>
  );
}
