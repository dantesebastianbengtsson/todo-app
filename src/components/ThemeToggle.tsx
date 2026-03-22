"use client";

import { useEffect, useState } from "react";
import { loadTheme, saveTheme } from "@/lib/storage";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = loadTheme();
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    saveTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-outline"
    >
      <span className="material-symbols-outlined">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}
