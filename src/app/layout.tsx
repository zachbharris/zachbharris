import '../styles/globals.css'

import Header from '../components/Header';

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
