export type BlockType = "block" | "smart";

export type BlockCategory = "layout" | "data-display" | "data-entry" | "feedback" | "navigation";

export interface BlockManifest {
  name: string;
  description: string;
  type: BlockType;
  category: BlockCategory;
  files: string[];
  primitives: string[];
  dependencies: string[];
}

export interface CategoryManifest {
  path: string;
  components: BlockManifest[];
}

export interface Registry {
  version: string;
  primitives: {
    path: string;
    components: string[];
  };
  blocks: Record<BlockCategory, CategoryManifest>;
}
