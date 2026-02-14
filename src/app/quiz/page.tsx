"use client";

import { useState, useCallback } from "react";
import { words, type OldManWord } from "@/data/words";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestion(correctWord: OldManWord, allWords: OldManWord[]) {
  const others = allWords.filter((w) => w.word !== correctWord.word);
  const wrongAnswers = shuffle(others).slice(0, 3);
  const options = shuffle([correctWord, ...wrongAnswers]);
  return { correctWord, options };
}

function getQuizQuestions(count: number) {
  const selected = shuffle(words).slice(0, count);
  return selected.map((w) => generateQuestion(w, words));
}

const TOTAL_QUESTIONS = 10;

const gradeMessages: Record<string, string> = {
  perfect:
    "You ARE the old man. You probably yell at clouds and call the remote a 'clicker'.",
  great:
    "Honorary grandpa status achieved. You know your way around a rocking chair.",
  good: "Not bad, whippersnapper! You've been paying attention at family dinners.",
  okay: "You've got some learning to do. Spend more time with your elders!",
  poor: "Bless your heart. You wouldn't last a day in 1952.",
};

function getGrade(score: number, total: number) {
  const pct = score / total;
  if (pct === 1) return gradeMessages.perfect;
  if (pct >= 0.8) return gradeMessages.great;
  if (pct >= 0.6) return gradeMessages.good;
  if (pct >= 0.4) return gradeMessages.okay;
  return gradeMessages.poor;
}

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<
    ReturnType<typeof getQuizQuestions>
  >([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const startQuiz = useCallback(() => {
    setQuestions(getQuizQuestions(TOTAL_QUESTIONS));
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
    setStarted(true);
  }, []);

  const handleAnswer = (word: string) => {
    if (selected) return;
    setSelected(word);
    const isCorrect = word === questions[current].correctWord.word;
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setFinished(true);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 1500);
  };

  if (!started) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-accent">
          The Old Man Words Quiz
        </h1>
        <p className="mt-4 text-lg text-foreground/60">
          Think you know your old-timey vocabulary? We&apos;ll give you a word
          and you pick the right meaning. {TOTAL_QUESTIONS} questions to prove
          you&apos;re not just another whippersnapper.
        </p>
        <div className="mt-8 rounded-xl border-2 border-accent-light bg-card-bg p-8">
          <p className="text-6xl">👴</p>
          <p className="mt-4 font-medium text-foreground/60">
            &ldquo;Back in my day, we didn&apos;t need quizzes. We just{" "}
            <em>knew</em> things.&rdquo;
          </p>
          <button
            onClick={startQuiz}
            className="mt-6 rounded-lg bg-accent px-8 py-3 text-lg font-medium text-white transition hover:bg-accent/80"
          >
            Start the Quiz
          </button>
        </div>
      </main>
    );
  }

  if (finished) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-accent">Quiz Complete!</h1>
        <div className="mt-8 rounded-xl border-2 border-accent bg-card-bg p-8">
          <p className="text-6xl">
            {score >= TOTAL_QUESTIONS * 0.8
              ? "🎉"
              : score >= TOTAL_QUESTIONS * 0.5
                ? "😊"
                : "😬"}
          </p>
          <p className="mt-4 text-5xl font-bold text-accent">
            {score}/{TOTAL_QUESTIONS}
          </p>
          <p className="mt-4 text-lg text-foreground/70">
            {getGrade(score, TOTAL_QUESTIONS)}
          </p>
          <button
            onClick={startQuiz}
            className="mt-6 rounded-lg bg-accent px-8 py-3 font-medium text-white transition hover:bg-accent/80"
          >
            Try Again, Sonny
          </button>
          <a
            href="/dictionary"
            className="mt-3 block text-sm text-accent/60 underline transition hover:text-accent"
          >
            Study up in the Dictionary
          </a>
        </div>
      </main>
    );
  }

  const q = questions[current];

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-foreground/50">
          <span>
            Question {current + 1} of {TOTAL_QUESTIONS}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-accent-light/30">
          <div
            className="h-2 rounded-full bg-accent transition-all"
            style={{
              width: `${((current + 1) / TOTAL_QUESTIONS) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="rounded-xl border-2 border-accent-light bg-card-bg p-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-accent/50">
          What does this mean?
        </p>
        <h2 className="mt-2 text-4xl font-bold text-accent">
          {q.correctWord.word}
        </h2>
      </div>

      {/* Options */}
      <div className="mt-6 grid gap-3">
        {q.options.map((opt) => {
          const isCorrect = opt.word === q.correctWord.word;
          const isSelected = selected === opt.word;

          let style =
            "border-2 border-accent-light/50 bg-card-bg text-foreground hover:border-accent-light";
          if (selected) {
            if (isCorrect) {
              style = "border-2 border-green-500 bg-green-50 text-green-800";
            } else if (isSelected) {
              style = "border-2 border-red-400 bg-red-50 text-red-800";
            } else {
              style =
                "border-2 border-accent-light/20 bg-card-bg text-foreground/30";
            }
          }

          return (
            <button
              key={opt.word}
              onClick={() => handleAnswer(opt.word)}
              disabled={!!selected}
              className={`rounded-xl p-4 text-left transition ${style} ${
                !selected ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <p className="font-medium">{opt.meaning}</p>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-4 rounded-lg bg-accent/5 p-4 text-center">
          <p className="text-sm italic text-foreground/50">
            &ldquo;{q.correctWord.example}&rdquo;
          </p>
        </div>
      )}
    </main>
  );
}
