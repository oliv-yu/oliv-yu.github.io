import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <title>Olivia Yu Wong</title>
      <body>{children}</body>
    </html>
  );
}
