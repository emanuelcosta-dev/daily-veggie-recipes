import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ui/modetoggle";

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
              <ModeToggle></ModeToggle>
            </div>
            <div className="justify-self-start">
              <h1>Recipes</h1>
            </div>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
