import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/Theme/theme-provider";
import { Toaster } from "@/components/ui/sonner"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


// Add a waving hand emoji image to the top left corner of the page
const handImageUrl = "https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png";




const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rocky PortFolio",
  description: "Rocky PortFolio",
  icons: {
    icon: [
      // { url: '/favicon.ico', sizes: 'any' },
      { url: handImageUrl, type: 'image/png', sizes: '2x2' },
    ],
    shortcut: [
      { url: handImageUrl, type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <main
           className="w-[100vw] overflow-hidden"
           >

        {children}
          </main>
           <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
