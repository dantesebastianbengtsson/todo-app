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
      className="relative p-2.5 rounded-xl glass hover:glow transition-all duration-300 group"
    >
      <span className="material-symbols-outlined transition-transform duration-500 group-hover:rotate-[30deg]">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}
