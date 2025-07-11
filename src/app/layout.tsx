import "../styles/globals.css";

export const metadata = {
  title: "Zach Harris",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="min-h-screen">
      <body className="relative bg-zinc-900 text-zinc-50 p-4 min-h-screen flex flex-col selection:bg-zinc-600/25">
        {children}
      </body>
    </html>
  );
}
