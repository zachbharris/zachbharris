import Navigation from "@/components/Navigation";
import "../styles/globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zach Harris",
  description: "Full Stack Software Engineer based in St. Louis, MO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-white dark:bg-zinc-950 text-black  dark:text-white min-h-screen flex flex-col">
        <Providers>
          <Navigation />

          <div className="px-4 mb-8 mt-16">{children}</div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
