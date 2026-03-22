"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
    } else {
      setEditText(todo.text);
    }
    setEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditText(todo.text);
      setEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl group transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center cursor-pointer transition-colors ${
            todo.completed
              ? "bg-primary-container"
              : "border-2 border-outline-variant hover:border-primary"
          }`}
        >
          {todo.completed && (
            <span
              className="material-symbols-outlined text-[16px] text-on-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check
            </span>
          )}
        </button>

        {/* Text / Edit */}
        {editing ? (
          <input
            ref={inputRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-b-2 border-primary outline-none text-lg font-medium text-on-surface py-0"
          />
        ) : (
          <span
            className={`text-lg font-medium truncate ${
              todo.completed
                ? "text-on-surface-variant line-through opacity-60"
                : "text-on-surface"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Action buttons */}
      {!editing && (
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
          <button
            onClick={() => setEditing(true)}
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-on-surface-variant hover:text-error transition-colors"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      )}
    </div>
  );
}
