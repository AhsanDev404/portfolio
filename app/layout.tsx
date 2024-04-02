import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AhsanDev404",
  description: "Develope by AhsanDev404",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
