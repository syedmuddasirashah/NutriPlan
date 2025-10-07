import { Link } from "wouter";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
