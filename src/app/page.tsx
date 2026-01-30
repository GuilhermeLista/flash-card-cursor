export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] px-6 py-24 sm:py-32 lg:px-8">
      <main className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Welcome to Next.js
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Get started by editing{" "}
          <code className="rounded bg-muted px-2 py-1 font-mono text-sm text-foreground">
            src/app/page.tsx
          </code>
        </p>
      </main>
    </div>
  );
}
