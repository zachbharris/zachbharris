import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Zach Harris</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
