"use client";

import { useState, KeyboardEvent } from "react";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);

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
    <section className="mb-10 animate-slide-up">
      <div
        className={`glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-500 gradient-border ${
          focused ? "glow-intense" : "glow"
        }`}
      >
        <span className="material-symbols-outlined text-on-surface-variant">
          add_circle
        </span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="What needs to be done?"
          className="bg-transparent border-none focus:ring-0 focus:outline-none w-full text-on-surface placeholder:text-on-surface-variant/40 font-semibold text-lg"
        />
        <button
          onClick={handleSubmit}
          className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-7 py-2.5 rounded-full font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap shimmer-btn bg-[length:200%_100%]"
        >
          Add
        </button>
      </div>
    </section>
  );
}
