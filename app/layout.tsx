"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/src/components/Navbar";
import TeacherSidebar from "@/src/components/aside";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const hideLayout = pathname === "/login";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col">

        {!hideLayout && <Navbar />}

        {hideLayout ? (
          // Login page → full screen without navbar/sidebar
          <main className="flex-1">
            {children}
          </main>
        ) : (
          // Normal pages → separate scrolling preserved
          <div className="flex flex-1 min-h-0">

            {/* Sidebar scroll */}
            <aside className="overflow-y-auto">
              <TeacherSidebar />
            </aside>

            {/* Content scroll */}
            <main className="flex-1 overflow-y-auto bg-gray-50">
              {children}
            </main>

          </div>
        )}

      </body>
    </html>
  );
}