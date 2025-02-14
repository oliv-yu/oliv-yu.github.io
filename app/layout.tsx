import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-900 text-stone-400 antialiased selection:bg-slate-300 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
