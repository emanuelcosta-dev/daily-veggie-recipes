import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Button from "@/components/toggle-button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Veggie Recipes",
  description: "Veggie recipes for all your vegetarian needs!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="{inter.className} ml-4 mr-4">
        <ThemeProvider attribute="class" defaultTheme="system">
          <nav className="grid justify-items-stretch ...">
            <div className="justify-self-end">
              <Button></Button>
            </div>
            <div className="justify-self-start">
              <Link href={"/"}>
                <h1>Recipes</h1>
              </Link>
            </div>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
