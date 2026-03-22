"use client";

import { useTodos } from "@/hooks/useTodos";
import ThemeToggle from "@/components/ThemeToggle";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import FilterBar from "@/components/FilterBar";
import CategoryFilter from "@/components/CategoryFilter";

export default function Home() {
  const {
    todos,
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
  } = useTodos();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-strong">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25 animate-pulse-glow">
              <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
            </div>
            <h1 className="text-2xl font-extrabold font-manrope tracking-tight gradient-text">
              Todo App
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow pt-28 pb-36 px-6 max-w-3xl mx-auto w-full">
        <section className="mt-12 mb-10 animate-fade-in">
          <h2 className="text-[4rem] font-extrabold leading-none tracking-tighter mb-3 font-manrope gradient-text">
            Today
          </h2>
          <p className="text-on-surface-variant font-medium text-lg">
            Capture your intentions for the day.
          </p>
        </section>

        <AddTodo onAdd={addTodo} />

        {hydrated && (
          <CategoryFilter
            selected={categoryFilter}
            onSelect={setCategoryFilter}
            counts={categoryCounts}
          />
        )}

        {hydrated && (
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        )}

        {hydrated && (
          <section className="mt-12 flex items-center justify-between text-on-surface-variant pt-6 pb-20">
            <span className="text-sm font-bold tracking-wide uppercase font-manrope px-4 py-2 rounded-full glass">
              {remainingCount} {remainingCount === 1 ? "item" : "items"} left
            </span>
            <button
              onClick={clearCompleted}
              className="text-sm font-bold tracking-wide uppercase font-manrope px-4 py-2 rounded-full glass hover:glow-intense transition-all duration-300 hover:text-purple-500 dark:hover:text-purple-400"
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
