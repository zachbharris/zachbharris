import Footer from "@/components/footer";
import "../styles/globals.css";

export const metadata = {
  title: "Zach Harris",
  description:
    "Software Engineer by day, keyboard builder by night, and coffee\
 connoisseur all the time. Proud dad to a dog and cat who don't\
 care about my React skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="min-h-screen">
      <body className="bg-zinc-900 text-zinc-50 p-4 min-h-screen flex flex-col selection:bg-zinc-600/25">
        {children}

        <Footer />
      </body>
    </html>
  );
}
