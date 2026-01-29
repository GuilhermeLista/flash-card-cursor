export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] px-6 py-24 sm:py-32 lg:px-8">
      <main className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Welcome to Next.js
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Get started by editing{" "}
          <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm dark:bg-gray-800">
            src/app/page.tsx
          </code>
        </p>
      </main>
    </div>
  );
}
