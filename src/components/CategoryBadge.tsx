"use client";

import { getCategoryById, CategoryId } from "@/types/todo";

interface CategoryBadgeProps {
  categoryId: CategoryId | null;
  compact?: boolean;
}

export default function CategoryBadge({ categoryId, compact = false }: CategoryBadgeProps) {
  const cat = getCategoryById(categoryId);
  if (!cat) return null;

  if (compact) {
    return (
      <span
        className={`inline-flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br ${cat.gradient}`}
      >
        <span
          className="material-symbols-outlined text-[12px] text-white"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {cat.icon}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${cat.bg} ${cat.text} border ${cat.border}`}
    >
      <span
        className="material-symbols-outlined text-[12px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {cat.icon}
      </span>
      {cat.label}
    </span>
  );
}
