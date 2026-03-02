import type { Metadata } from 'next';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  // Simple static rendering - no MDX processing
  return (
    <div className="prose p-8">
      <h1>Documentation Page</h1>
      <p>Slug: {params.slug?.join('/') || 'index'}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['blocks', 'layout', 'page-header'] },
    { slug: ['blocks', 'data-display', 'stat-card'] },
    { slug: ['blocks', 'feedback', 'empty-state'] },
    { slug: ['primitives'] },
  ];
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  return {
    title: params.slug?.join(' - ') || 'Documentation',
  } as Metadata;
}
