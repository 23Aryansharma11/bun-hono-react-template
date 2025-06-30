import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white flex flex-col items-center justify-center px-6">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Your Fullstack Stack
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Powered by <strong>Bun</strong>, <strong>Hono</strong>,{" "}
          <strong>React</strong>, <strong>TanStack</strong>,{" "}
          <strong>Tailwind</strong>,<strong>Zod</strong>, and{" "}
          <strong>Drizzle ORM</strong>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            "Bun",
            "Hono",
            "React",
            "TanStack Router",
            "TanStack Query",
            "Zod",
            "Drizzle",
            "Tailwind",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 dark:bg-neutral-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/docs"
            className="inline-block rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
