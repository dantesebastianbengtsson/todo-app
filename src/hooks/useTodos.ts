"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo, FilterType, CategoryId } from "@/types/todo";
import { loadTodos, saveTodos } from "@/lib/storage";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setTodos(loadTodos());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveTodos(todos);
    }
  }, [todos, hydrated]);

  const addTodo = useCallback((text: string, category: CategoryId | null = null) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text: trimmed, completed: false, createdAt: Date.now(), category },
    ]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const editTodo = useCallback((id: string, text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
    );
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }, []);

  const filteredTodos = useMemo(() => {
    let result = todos;
    switch (filter) {
      case "active":
        result = result.filter((t) => !t.completed);
        break;
      case "completed":
        result = result.filter((t) => t.completed);
        break;
    }
    if (categoryFilter) {
      result = result.filter((t) => t.category === categoryFilter);
    }
    return result;
  }, [todos, filter, categoryFilter]);

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const t of todos) {
      if (t.category) {
        counts[t.category] = (counts[t.category] || 0) + 1;
      }
    }
    return counts;
  }, [todos]);

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    categoryFilter,
    setCategoryFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    remainingCount,
    categoryCounts,
    hydrated,
  };
}
