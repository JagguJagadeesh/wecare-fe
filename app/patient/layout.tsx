import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from 'react'
import Loading from "./loading";
export const metadata: Metadata = {
  title: "Patient",
  description: "Remote Patient Monitoring System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body className="">
          <main className="flex h-screen overflow-hidden w-full">
            <Sidebar userType='patient' />
            <div className="flex flex-col h-screen w-full">
              <Navbar />
              <ScrollArea className="pt-3">
                <Suspense fallback={<Loading/>}>
                  {children}
                </Suspense>
              </ScrollArea>
            </div>
          </main>
        </body>
      </TooltipProvider>
    </html>
  );
}
