import React from "react";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { Ubuntu } from "next/font/google";

const myPopins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-pops",
});
const myUbuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-ubuntu",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${myPopins.variable} ${myUbuntu.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
