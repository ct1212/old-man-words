import { words, categories, getWordsByCategory } from "@/data/words";

function WordCard({
  word,
  meaning,
  example,
  era,
}: {
  word: string;
  meaning: string;
  example: string;
  era?: string;
}) {
  return (
    <div className="rounded-xl border-2 border-accent-light/50 bg-card-bg p-5 shadow-sm transition hover:shadow-md hover:border-accent-light">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-bold text-accent">{word}</h3>
        {era && (
          <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
            {era}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-foreground/80">{meaning}</p>
      <p className="mt-3 rounded-lg bg-accent/5 px-3 py-2 text-sm italic text-foreground/60">
        &ldquo;{example}&rdquo;
      </p>
    </div>
  );
}

export default function Home() {
  const featured = words.slice(0, 3);
  const wordOfTheDay = words[new Date().getDate() % words.length];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-accent md:text-6xl">
          Stuff Drew and Ed Would Say
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
          A lovingly curated dictionary of phrases, words, and expressions that
          only your grandpa still uses. Back in my day, we had{" "}
          <em>real</em> vocabulary.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/dictionary"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent/80"
          >
            Browse the Dictionary
          </a>
          <a
            href="/quiz"
            className="rounded-lg border-2 border-accent px-6 py-3 font-medium text-accent transition hover:bg-accent/10"
          >
            Take the Quiz
          </a>
        </div>
      </section>

      {/* Featured Old Man Wisdom */}
      <section className="mb-16 rounded-2xl border-2 border-accent bg-card-bg p-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-accent">
          Featured Old Man Wisdom
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <blockquote className="rounded-lg bg-accent/10 p-5 italic text-foreground/70 border-l-4 border-accent">
            &ldquo;Oatbran and wheat germ was incredible.&rdquo;
            <footer className="mt-2 text-sm text-accent not-italic font-medium">— Drew</footer>
          </blockquote>
          <blockquote className="rounded-lg bg-accent/10 p-5 italic text-foreground/70 border-l-4 border-accent">
            &ldquo;We drank prune juice out the ass.&rdquo;
            <footer className="mt-2 text-sm text-accent not-italic font-medium">— Drew</footer>
          </blockquote>
          <blockquote className="rounded-lg bg-accent/10 p-5 italic text-foreground/70 border-l-4 border-accent md:col-span-2">
            &ldquo;Which way you headed baseball boobs?&rdquo;
            <footer className="mt-2 text-sm text-accent not-italic font-medium">— Drew</footer>
          </blockquote>
        </div>
      </section>

      {/* Word of the Day */}
      <section className="mb-16">
        <div className="rounded-2xl border-2 border-accent bg-card-bg p-8 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-accent/60">
            Word of the Day
          </span>
          <h2 className="mt-2 text-4xl font-bold text-accent">
            {wordOfTheDay.word}
          </h2>
          <p className="mt-3 text-foreground/70">{wordOfTheDay.meaning}</p>
          <p className="mx-auto mt-4 max-w-md rounded-lg bg-accent/5 px-4 py-3 italic text-foreground/60">
            &ldquo;{wordOfTheDay.example}&rdquo;
          </p>
          {wordOfTheDay.era && (
            <p className="mt-3 text-xs text-accent/50">
              First used around the {wordOfTheDay.era}
            </p>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-accent-light/50 bg-card-bg p-5 text-center">
          <p className="text-3xl font-bold text-accent">{words.length}</p>
          <p className="text-sm text-foreground/50">Words & Phrases</p>
        </div>
        <div className="rounded-xl border border-accent-light/50 bg-card-bg p-5 text-center">
          <p className="text-3xl font-bold text-accent">{categories.length}</p>
          <p className="text-sm text-foreground/50">Categories</p>
        </div>
        <div className="rounded-xl border border-accent-light/50 bg-card-bg p-5 text-center">
          <p className="text-3xl font-bold text-accent">300+</p>
          <p className="text-sm text-foreground/50">Years of History</p>
        </div>
        <div className="rounded-xl border border-accent-light/50 bg-card-bg p-5 text-center">
          <p className="text-3xl font-bold text-accent">100%</p>
          <p className="text-sm text-foreground/50">Grandpa Approved</p>
        </div>
      </section>

      {/* Featured Words */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-accent">
          Featured Words
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((w) => (
            <WordCard key={w.word} {...w} />
          ))}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-accent">
          Browse by Category
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const count = getWordsByCategory(cat).length;
            return (
              <a
                key={cat}
                href={`/dictionary?category=${encodeURIComponent(cat)}`}
                className="rounded-xl border-2 border-accent-light/30 bg-card-bg p-5 text-center transition hover:border-accent-light hover:shadow-md"
              >
                <p className="font-bold text-accent">{cat}</p>
                <p className="mt-1 text-sm text-foreground/50">
                  {count} {count === 1 ? "word" : "words"}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* More Old Man Wisdom */}
      <section className="mt-8 rounded-2xl border-2 border-accent-light bg-card-bg p-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-accent">
          More Old Man Wisdom
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <blockquote className="rounded-lg bg-accent/5 p-4 italic text-foreground/60">
            &ldquo;A penny saved is a penny earned, and back in my day that
            penny could buy you a whole candy bar.&rdquo;
          </blockquote>
          <blockquote className="rounded-lg bg-accent/5 p-4 italic text-foreground/60">
            &ldquo;If you don&apos;t have anything nice to say, sit next to me
            — I&apos;ll say it for you.&rdquo;
          </blockquote>
          <blockquote className="rounded-lg bg-accent/5 p-4 italic text-foreground/60">
            &ldquo;I walked 15 miles to school uphill both ways in 3 feet of
            snow. You kids don&apos;t know how good you have it.&rdquo;
          </blockquote>
          <blockquote className="rounded-lg bg-accent/5 p-4 italic text-foreground/60">
            &ldquo;They don&apos;t make &apos;em like they used to — and that
            goes for people, cars, AND television.&rdquo;
          </blockquote>
        </div>
      </section>
    </main>
  );
}
