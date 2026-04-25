import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { business } from "@/data/site";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: {
    default: business.legalName,
    template: `%s | ${business.legalName}`
  },
  description: business.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <div className="mx-auto min-h-screen">
          <div className="page-shell">
            <Navbar />
            <div className="overflow-hidden lg:rounded-b-[36px]">
              {children}
              <SiteFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
