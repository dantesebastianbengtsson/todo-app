import { Todo } from "@/types/todo";

const STORAGE_KEY = "todo-app-todos";
const THEME_KEY = "todo-app-theme";

export function loadTodos(): Todo[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveTodos(todos: Todo[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function loadTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return (localStorage.getItem(THEME_KEY) as "light" | "dark") || "light";
}

export function saveTheme(theme: "light" | "dark"): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_KEY, theme);
}
