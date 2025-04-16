"use client";

import Navigation from "@/components/features/commons/nav";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono">
      <Navigation />
      <main className="px-4 max-w-4xl mx-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
