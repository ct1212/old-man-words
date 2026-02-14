"use client";

import { useState } from "react";
import { words, categories, type OldManWord } from "@/data/words";

function WordCard({ word: w }: { word: OldManWord }) {
  return (
    <div className="rounded-xl border-2 border-accent-light/50 bg-card-bg p-5 shadow-sm transition hover:shadow-md hover:border-accent-light">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-bold text-accent">{w.word}</h3>
        <div className="flex shrink-0 gap-2">
          {w.era && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
              {w.era}
            </span>
          )}
          <span className="rounded-full bg-accent-light/20 px-2 py-0.5 text-xs font-medium text-foreground/50">
            {w.category}
          </span>
        </div>
      </div>
      <p className="mt-2 text-foreground/80">{w.meaning}</p>
      <p className="mt-3 rounded-lg bg-accent/5 px-3 py-2 text-sm italic text-foreground/60">
        &ldquo;{w.example}&rdquo;
      </p>
    </div>
  );
}

export default function Dictionary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = words.filter((w) => {
    const matchesSearch =
      search === "" ||
      w.word.toLowerCase().includes(search.toLowerCase()) ||
      w.meaning.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || w.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold text-accent">The Dictionary</h1>
      <p className="mt-2 text-foreground/60">
        Every old-timey word and phrase, all in one place. Your grandpa would be
        proud.
      </p>

      {/* Search & Filter */}
      <div className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Search words, meanings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border-2 border-accent-light/50 bg-card-bg px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`rounded-full px-3 py-1 text-sm font-medium transition ${
              activeCategory === "All"
                ? "bg-accent text-white"
                : "bg-accent/10 text-accent hover:bg-accent/20"
            }`}
          >
            All ({words.length})
          </button>
          {categories.map((cat) => {
            const count = words.filter((w) => w.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-accent/10 text-accent hover:bg-accent/20"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="mt-8">
        <p className="mb-4 text-sm text-foreground/50">
          Showing {filtered.length} {filtered.length === 1 ? "word" : "words"}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((w) => (
            <WordCard key={w.word} word={w} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="rounded-xl border-2 border-accent-light/30 bg-card-bg p-12 text-center">
            <p className="text-2xl">🤷‍♂️</p>
            <p className="mt-2 font-medium text-foreground/50">
              No words found. Even grandpa doesn&apos;t know that one.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
