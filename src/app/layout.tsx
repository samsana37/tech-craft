import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Student Management System",
  description: "A prototype for college student management",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col justify-between bg-[#1e1b18]">
          <header className="border-b border-border">
            <div className="container mx-auto py-4">
              <h1 className="text-2xl font-bold">TechCraft</h1>
            </div>
          </header>
          <main className="flex-1 grid">{children}</main>
          <footer className="border-t border-border py-4">
            <div className="container mx-auto text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} TechCraft Student Management System
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
