export const CATEGORIES = [
  { id: "shopping", label: "Shopping", icon: "shopping_cart", gradient: "from-amber-400 to-orange-500", bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30" },
  { id: "health", label: "Health", icon: "favorite", gradient: "from-emerald-400 to-teal-500", bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/30" },
  { id: "work", label: "Work", icon: "work", gradient: "from-blue-400 to-indigo-500", bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30" },
  { id: "personal", label: "Personal", icon: "person", gradient: "from-purple-400 to-fuchsia-500", bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30" },
  { id: "ideas", label: "Ideas", icon: "lightbulb", gradient: "from-rose-400 to-pink-500", bg: "bg-rose-500/10", text: "text-rose-600 dark:text-rose-400", border: "border-rose-500/30" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  category: CategoryId | null;
}

export type FilterType = "all" | "active" | "completed";

export function getCategoryById(id: CategoryId | null) {
  if (!id) return null;
  return CATEGORIES.find((c) => c.id === id) ?? null;
}
