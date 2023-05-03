import Navigation from "@/components/Navigation";
import "../styles/globals.css";
import { Providers } from "./providers";

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
    <html suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-black  dark:text-white mt-16">
        <Providers>
          <Navigation />

          <div className="px-4">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
