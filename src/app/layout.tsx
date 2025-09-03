import { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zach Harris",
  description: "Software Engineer based in St. Louis, Missouri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn(
        "dark min-h-screen selection:bg-neutral-700 selection:text-neutral-50",
        inter.className,
      )}
    >
      <body className="min-h-screen flex flex-col flex-1 p-2">
        <Header />

        <div className="w-full flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
