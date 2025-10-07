import { Link } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ToolsNav } from "@/components/ToolsNav";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      {/* ✅ Fixed Header */}
      <header className="border-b bg-card sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/">
            <h1
              className="text-xl md:text-2xl font-bold cursor-pointer px-2 py-1 rounded-md transition-transform duration-200 hover:scale-105"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span style={{ color: "#27AE60" }}>Life</span>
              <span style={{ color: "#333" }}>Planner.fit</span>
            </h1>
          </Link>
          <div className="flex items-center gap-2 flex-shrink-0">
            <ToolsNav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ✅ Page Content */}
      <main className="flex-1 w-full">{children}</main>

      {/* ✅ Footer */}
      <footer className="bg-card border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex gap-4 text-2xl mt-2 md:mt-0">
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
          <div className="mt-2 md:mt-0 text-sm text-muted-foreground text-center md:text-left">
            © 2025 LifePlanner.fit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
