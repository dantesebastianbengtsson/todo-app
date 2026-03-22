"use client";

import { CATEGORIES, CategoryId } from "@/types/todo";

interface CategoryFilterProps {
  selected: CategoryId | null;
  onSelect: (category: CategoryId | null) => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({ selected, onSelect, counts }: CategoryFilterProps) {
  const activeCategories = CATEGORIES.filter((c) => (counts[c.id] || 0) > 0);

  if (activeCategories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
      {selected && (
        <button
          onClick={() => onSelect(null)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider glass text-on-surface-variant hover:text-on-surface transition-all duration-300"
        >
          <span className="material-symbols-outlined text-[14px]">close</span>
          Clear
        </button>
      )}
      {activeCategories.map((cat) => {
        const isActive = selected === cat.id;
        const count = counts[cat.id] || 0;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(isActive ? null : cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              isActive
                ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg shadow-${cat.id === 'work' ? 'blue' : cat.id === 'health' ? 'emerald' : cat.id === 'shopping' ? 'amber' : cat.id === 'personal' ? 'purple' : 'rose'}-500/30 scale-105`
                : `${cat.bg} ${cat.text} border ${cat.border} hover:scale-105`
            }`}
          >
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {cat.icon}
            </span>
            {cat.label}
            <span className={`ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] ${
              isActive ? "bg-white/25" : "bg-black/5 dark:bg-white/10"
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
