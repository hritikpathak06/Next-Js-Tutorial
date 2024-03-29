import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App 111",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     <link rel="stylesheet" href="./styles.css"/>
     <script src="./common.js"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
