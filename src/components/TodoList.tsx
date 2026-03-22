"use client";

import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 mb-6 animate-pulse-glow">
          <span className="material-symbols-outlined text-5xl gradient-text">task_alt</span>
        </div>
        <p className="text-xl font-bold text-on-surface-variant/50">No tasks here</p>
        <p className="text-sm text-on-surface-variant/30 mt-1">Add one above to get started</p>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      {todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          index={i}
        />
      ))}
    </section>
  );
}
