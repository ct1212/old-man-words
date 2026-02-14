import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stuff Drew and Ed Would Say",
  description:
    "A collection of old-timey phrases, sayings, and words that Drew and Ed actually use. Back in my day, we had real vocabulary.",
  openGraph: {
    title: "Stuff Drew and Ed Would Say",
    description: "Old-timey words and phrases, Drew and Ed approved.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="border-b-2 border-accent-light bg-card-bg px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <a href="/" className="text-2xl font-bold text-accent">
              👴 Stuff Drew and Ed Would Say
            </a>
            <div className="flex gap-6 text-sm font-medium">
              <a
                href="/"
                className="text-foreground/70 transition hover:text-accent"
              >
                Home
              </a>
              <a
                href="/dictionary"
                className="text-foreground/70 transition hover:text-accent"
              >
                Dictionary
              </a>
              <a
                href="/quiz"
                className="text-foreground/70 transition hover:text-accent"
              >
                Quiz
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t-2 border-accent-light bg-card-bg px-6 py-8 text-center text-sm text-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} Stuff Drew and Ed Would Say &mdash; Made with
            love and a rocking chair.
          </p>
          <p className="mt-1">
            &ldquo;Back in my day, we didn&apos;t need websites for
            this.&rdquo;
          </p>
        </footer>
      </body>
    </html>
  );
}
