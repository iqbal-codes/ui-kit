// Type declarations for fumadocs source modules
declare module '.source' {
  import type { Page, Meta } from 'fumadocs-core/source';

  export const docs: Page[];
  export const meta: Meta[];
}
