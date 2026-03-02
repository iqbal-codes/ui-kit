import type { Metadata } from 'next';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="prose p-8">
      <h1>UI Kit Documentation</h1>
      <p>Welcome to the UI Kit documentation.</p>
      <Link href="/docs/blocks/layout/page-header">PageHeader</Link>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'UI Kit Documentation',
};
