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
      <body className="bg-white dark:bg-slate-900">
        <Header />
        
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
