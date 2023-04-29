import Navigation from "@/components/Navigation";
import "../styles/globals.css";

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
    <html>
      <body className="bg-slate-50 text-black dark:bg-slate-950 dark:text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
