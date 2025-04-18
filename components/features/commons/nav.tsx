"use client";

import Shortcuts from "@/components/features/commons/shortcuts";
import { ThemeSwitcher } from "@/components/features/commons/theme-switcher";
import { useKeyboardShortcut } from "@/hooks/keyboard-shortcuts";
import { Keyboard } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
      <meta
        name="terminal-description"
        content="Use W/T/G/S keyboard shortcuts to navigate"
      />
      <nav className="w-full sticky top-0 z-50 mb-10 backdrop-blur-sm">
        <div className="px-4 max-w-4xl mx-auto">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="p-2 sm:h-auto h-12 rounded-lg border border-gray-200 hover:border-gray-300 inline-flex items-center"
              >
                <div className="text-mono font-semibold">a0</div>
              </Link>
              <Link
                href="/blog"
                className="md:flex p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600   inline-flex items-center sm:text-xs text-sm sm:h-auto h-12"
              >
                [b] blog
              </Link>
              <a
                href="https://discord.gg/yourserverlinkhere"
                className="hover:underline flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-block"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeSwitcher />
              <button
                onClick={() => setShowShortcuts(true)}
                className="hidden md:flex rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 py-2 px-4  "
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

      {minimizedShortcuts && (
        <div className="fixed bottom-4 right-4 flex gap-2 z-50">
          {minimizedShortcuts && showShortcuts && (
            <div
              className="cursor-pointer"
              onClick={() => setMinimizedShortcuts(false)}
            >
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 py-2 px-4  ">
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
