"use client";

import { CATEGORIES, CategoryId } from "@/types/todo";

interface CategoryPickerProps {
  selected: CategoryId | null;
  onSelect: (category: CategoryId | null) => void;
}

export default function CategoryPicker({ selected, onSelect }: CategoryPickerProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {CATEGORIES.map((cat) => {
        const isActive = selected === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(isActive ? null : cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              isActive
                ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg scale-105`
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
          </button>
        );
      })}
    </div>
  );
}
