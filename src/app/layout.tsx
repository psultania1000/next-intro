// app/layout.tsx
"use client"; // Required because we use usePathname()

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
// import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {/* Header directly in layout */}
        <header className="p-4 border-b">
          <nav className="flex gap-4">
            <Link
              href="/"
              className={clsx("text-sm", {
                "font-bold text-blue-600": pathname === "/",
                "text-gray-600": pathname !== "/",
              })}>
              Home
            </Link>
            <Link
              href="/about"
              className={clsx("text-sm", {
                "font-bold text-blue-600": pathname === "/about",
                "text-gray-600": pathname !== "/about",
              })}>
              About
            </Link>
          </nav>
        </header>

        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="p-4 border-t text-center text-sm text-gray-500">
          © 2025 YourSite
        </footer>
      </body>
    </html>
  );
}
