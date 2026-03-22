"use client";

import { FilterType } from "@/types/todo";

interface FilterBarProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { type: FilterType; label: string; icon: string }[] = [
  { type: "all", label: "All", icon: "list" },
  { type: "active", label: "Active", icon: "radio_button_unchecked" },
  { type: "completed", label: "Completed", icon: "check_circle" },
];

export default function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 glass-strong rounded-2xl glow">
      {filters.map(({ type, label, icon }) => (
        <button
          key={type}
          onClick={() => onFilterChange(type)}
          className={`flex items-center gap-2 rounded-xl px-5 py-2.5 transition-all duration-300 font-bold text-sm ${
            filter === type
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
              : "text-on-surface-variant hover:text-on-surface hover:bg-white/20 dark:hover:bg-white/5"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
          <span className="font-manrope text-xs uppercase tracking-wider font-bold">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
