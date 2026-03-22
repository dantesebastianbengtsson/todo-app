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
      <div className="text-center py-16 text-on-surface-variant opacity-60">
        <span className="material-symbols-outlined text-5xl mb-4 block">task_alt</span>
        <p className="text-lg font-medium">No tasks here</p>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}
