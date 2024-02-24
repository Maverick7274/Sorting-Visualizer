import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { SortingAlgorithmProvider } from "@/Context/Visualizer";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SortingAlgorithmProvider>
          <Navbar />
            {children}
          </SortingAlgorithmProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
