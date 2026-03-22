"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Todo } from "@/types/todo";
import CategoryBadge from "./CategoryBadge";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  index: number;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit, index }: TodoItemProps) {
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
    <div
      className="flex items-center justify-between p-5 glass rounded-2xl group transition-all duration-300 hover:glow-intense gradient-border animate-slide-up"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "backwards" }}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 ${
            todo.completed
              ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 scale-110"
              : "border-2 border-on-surface-variant/30 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
          }`}
        >
          {todo.completed && (
            <span
              className="material-symbols-outlined text-[16px] text-white"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check
            </span>
          )}
        </button>

        {/* Text / Edit */}
        <div className="flex-1 min-w-0">
          {editing ? (
            <input
              ref={inputRef}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent border-b-2 border-purple-500 outline-none text-lg font-semibold text-on-surface py-0"
            />
          ) : (
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={`text-lg font-semibold truncate transition-all duration-300 ${
                  todo.completed
                    ? "text-on-surface-variant line-through opacity-40"
                    : "text-on-surface"
                }`}
              >
                {todo.text}
              </span>
              <CategoryBadge categoryId={todo.category} compact />
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      {!editing && (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 ml-2">
          <button
            onClick={() => setEditing(true)}
            className="p-2 rounded-xl text-on-surface-variant hover:text-indigo-500 hover:bg-indigo-500/10 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[20px]">edit</span>
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 rounded-xl text-on-surface-variant hover:text-rose-500 hover:bg-rose-500/10 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[20px]">delete</span>
          </button>
        </div>
      )}
    </div>
  );
}
