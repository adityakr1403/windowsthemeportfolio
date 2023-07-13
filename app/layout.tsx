import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Taskbar from "@/components/taskbar";
import favicon from "./favicon.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Kumar",
  description: "Aditya Kumar's portfolio website",
  icons:"./favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        {children}

        <Taskbar />
      </body>
    </html>
  );
}
