"use client";

import { useState, KeyboardEvent } from "react";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") setText("");
  };

  return (
    <section className="mb-8">
      <div className="bg-surface-container-low rounded-xl p-4 flex items-center gap-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
          className="bg-transparent border-none focus:ring-0 focus:outline-none w-full text-on-surface placeholder:text-outline/50 font-medium text-lg"
        />
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform whitespace-nowrap"
        >
          Add
        </button>
      </div>
    </section>
  );
}
