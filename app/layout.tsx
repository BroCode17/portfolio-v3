import type { Metadata } from "next";
import {Roboto_Mono, Poppins} from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const robotoMono = Roboto_Mono({
  variable: '--roboto-mono',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
const poppins = Poppins({
  variable: '--poppins',
  weight: ['100','400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Ebenezer Frimpong",
  description: "Ebenezer Frimpong portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${robotoMono.variable} bg-customer-bg`}
      >
        {children}
 
      </body>
    </html>
  );
}
