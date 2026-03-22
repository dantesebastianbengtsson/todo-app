"use client";

import { useTodos } from "@/hooks/useTodos";
import ThemeToggle from "@/components/ThemeToggle";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import FilterBar from "@/components/FilterBar";

export default function Home() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    remainingCount,
    hydrated,
  } = useTodos();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-surface fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-on-surface font-manrope tracking-tight">
            Todo App
          </h1>
          <ThemeToggle />
        </div>
        <div className="bg-surface-container-high h-[1px] w-full" />
      </header>

      {/* Main */}
      <main className="flex-grow pt-24 pb-32 px-6 max-w-3xl mx-auto w-full">
        <section className="mt-16 mb-10">
          <h2 className="text-[3.5rem] font-extrabold leading-none tracking-tighter text-on-surface mb-2 font-manrope">
            Today
          </h2>
          <p className="text-on-surface-variant font-medium">
            Capture your intentions for the day.
          </p>
        </section>

        <AddTodo onAdd={addTodo} />

        {hydrated && (
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        )}

        {hydrated && (
          <section className="mt-12 flex items-center justify-between text-on-surface-variant border-t border-surface-container-high pt-6 pb-20">
            <span className="text-sm font-semibold tracking-wide uppercase font-manrope">
              {remainingCount} {remainingCount === 1 ? "item" : "items"} left
            </span>
            <button
              onClick={clearCompleted}
              className="text-sm font-semibold tracking-wide uppercase font-manrope hover:text-primary transition-colors"
            >
              Clear Completed
            </button>
          </section>
        )}
      </main>

      {/* Filter Bar */}
      <FilterBar filter={filter} onFilterChange={setFilter} />
    </div>
  );
}
