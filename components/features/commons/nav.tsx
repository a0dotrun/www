"use client";

import { useState } from "react";
import { ColorSwitcher } from "../../color-switcher";
import { ThemeSwitcher } from "../../theme-switcher";
import { Keyboard } from "lucide-react";
import { useKeyboardShortcut } from "@/hooks/keyboard-shortcuts";
import Shortcuts from "../../shortcuts";
import Link from "next/link";

export default function Navigation() {
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [minimizedShortcuts, setMinimizedShortcuts] = useState(false);

  useKeyboardShortcut({
    handlers: [
      {
        key: "b",
        handler: () => (window.location.href = "/blog"),
        description: "Go to blog",
      },
      {
        key: "j",
        handler: () =>
          !showShortcuts && window.scrollBy({ top: 100, behavior: "smooth" }),
        description: "Scroll down",
      },
      {
        key: "k",
        handler: () =>
          !showShortcuts && window.scrollBy({ top: -100, behavior: "smooth" }),
        description: "Scroll up",
      },
      {
        key: "x",
        handler: () => setShowShortcuts(true),
        description: "Show keyboard shortcuts",
      },
    ],
  });

  return (
    <>
      <meta name="terminal-description" content="Use W/T/G/S keyboard shortcuts to navigate" />
      <nav className="w-full sticky top-0 z-50 mb-10">
        <div className="px-4 max-w-4xl mx-auto">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <div className="flex items-center">
              <a
                href={process.env.NEXT_PUBLIC_URL}
                className="p-2 sm:h-auto h-12 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 [background-color:var(--color-primary)] inline-flex items-center"
              >
                <div className="text-mono text-white font-semibold">a0</div>
              </a>
              <div className="flex items-center space-x-2 ml-2">
                <Link
                  href="/blog"
                  className="hidden md:flex p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 [background-color:var(--color-background-light)] dark:[background-color:var(--color-background-dark)] inline-flex items-center sm:text-xs text-sm sm:h-auto h-12"
                >
                  [b] blog
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ColorSwitcher />
              <ThemeSwitcher />
              <button
                onClick={() => setShowShortcuts(true)}
                className="hidden md:flex rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 py-2 px-4 [background-color:var(--color-background-light)] dark:[background-color:var(--color-background-dark)]"
              >
                <Keyboard className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showShortcuts && (
        <Shortcuts
          onClose={() => setShowShortcuts(false)}
          isMinimized={minimizedShortcuts}
          onMinimize={setMinimizedShortcuts}
        />
      )}

      {(minimizedShortcuts) && (
        <div className="fixed bottom-4 right-4 flex gap-2 z-50">
          {minimizedShortcuts && showShortcuts && (
            <div className="cursor-pointer" onClick={() => setMinimizedShortcuts(false)}>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 py-2 px-4 [background-color:var(--color-background-light)] dark:[background-color:var(--color-background-dark)]">
                <Keyboard className="w-4 h-4 text-gray-500" />
                <span className="font-mono text-sm">keyboard shortcuts</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
