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
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-surface-container-high shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
      {filters.map(({ type, label, icon }) => (
        <button
          key={type}
          onClick={() => onFilterChange(type)}
          className={`flex flex-col items-center justify-center rounded-xl px-6 py-2 transition-all ${
            filter === type
              ? "bg-primary/10 text-primary"
              : "text-outline hover:text-on-surface"
          }`}
        >
          <span className="material-symbols-outlined mb-1">{icon}</span>
          <span className="font-manrope text-[10px] uppercase tracking-wider font-bold">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
