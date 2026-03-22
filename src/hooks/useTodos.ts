"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo, FilterType } from "@/types/todo";
import { loadTodos, saveTodos } from "@/lib/storage";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
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

  const addTodo = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text: trimmed, completed: false, createdAt: Date.now() },
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
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.completed);
      case "completed":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    remainingCount,
    hydrated,
  };
}
