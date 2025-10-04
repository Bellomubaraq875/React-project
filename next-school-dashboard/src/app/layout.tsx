import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// ✅ Import and configure Jost font
const jost = Jost({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  display: "swap", // improves performance and prevents flash of unstyled text
});

export const metadata: Metadata = {
  title: "The Learning Hub",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
      </body>
    </html>
  );
}
