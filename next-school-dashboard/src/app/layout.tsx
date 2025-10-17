import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// ✅ Import and configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // prevents layout shift / improves performance
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
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
