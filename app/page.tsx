import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">UI Kit</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A comprehensive design system with blocks and primitives
      </p>
      <Link
        href="/docs"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
      >
        View Documentation
      </Link>
    </main>
  );
}
