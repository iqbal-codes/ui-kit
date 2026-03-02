import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { source } from '@/app/source';

export default function Page() {
  const page = source.getPage([]);
  if (!page) return null;

  const MDX = page.data.exports.default;

  return (
    <DocsPage toc={page.data.exports.toc}>
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export const metadata: Metadata = {
  title: 'UI Kit Documentation',
};
