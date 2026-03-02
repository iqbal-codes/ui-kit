#!/usr/bin/env python3
"""
Component Generator for AI UI Kit

Generates new Block components following the AI-optimized architecture.
Creates component implementation, Storybook story, and updates index files.

Usage:
    python scripts/generate-component.py <component-name> --category <category> --type <block-type>

Example:
    python scripts/generate-component.py work-order-card --category data-display --type domain
"""

import argparse
import os
from pathlib import Path
from datetime import datetime

# Component categories
CATEGORIES = {
    "data-display": "Data Display",
    "data-entry": "Data Entry",
    "layout": "Layout",
    "navigation": "Navigation",
    "feedback": "Feedback",
    "smart": "Smart Blocks",
}

# Block types with their typical dependencies
BLOCK_TYPES = {
    "domain": {
        "layer": "Domain Block",
        "dependencies": ["@/primitives/card", "@/primitives/badge"],
        "description": "Business-specific UI component",
    },
    "layout": {
        "layer": "Layout Block",
        "dependencies": ["@/primitives/card"],
        "description": "Structural template for page composition",
    },
    "smart": {
        "layer": "Smart Block",
        "dependencies": ["nuqs", "@tanstack/react-query"],
        "description": "Comprehensive feature with state management",
    },
}


def generate_component_code(name: str, category: str, block_type: str) -> str:
    """Generate the main component TypeScript code."""
    
    pascal_name = "".join(part.capitalize() for part in name.split("-"))
    props_name = f"{pascal_name}Props"
    
    deps = BLOCK_TYPES.get(block_type, BLOCK_TYPES["domain"])
    
    return f'''import * as React from "react";
import {{ cn }} from "@/lib/utils";

// TODO: Import required primitives
// import {{ Card, CardContent }} from "@/primitives/card";

export interface {props_name} {{
  /** TODO: Add required props */
  className?: string;
}}

/**
 * {pascal_name}
 * 
 * {deps['description']}
 * 
 * @example
 * <{pascal_name} />
 */
export function {pascal_name}({{
  className,
  ...props
}}: {props_name}) {{
  return (
    <div className={{cn("{name}", className)}} {{...props}}>
      {/* TODO: Implement component */}
    </div>
  );
}}

export default {pascal_name};
'''


def generate_story_code(name: str, category: str, block_type: str) -> str:
    """Generate the Storybook story file."""
    
    pascal_name = "".join(part.capitalize() for part in name.split("-"))
    story_name = pascal_name + "Story"
    
    return f'''import type {{ Meta, StoryObj }} from "@storybook/react";
import {{ {pascal_name} }} from "./{name}";

const meta = {{
  title: "Blocks/{category}/{pascal_name}",
  component: {pascal_name},
  parameters: {{
    layout: "centered",
  }},
  tags: ["autodocs"],
  argTypes: {{
    // TODO: Add argType controls
  }},
}} satisfies Meta<typeof {pascal_name}>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default variant
 */
export const Default: Story = {{
  args: {{
    // TODO: Add default props
  }},
}};

/**
 * TODO: Add more story variants
 */
'''


def update_index_file(category_path: Path, component_name: str):
    """Update the category index.ts file to export the new component."""
    
    index_file = category_path / "index.ts"
    pascal_name = "".join(part.capitalize() for part in component_name.split("-"))
    
    if index_file.exists():
        with open(index_file, "r") as f:
            content = f.read()
        
        # Check if already exported
        if f"export * from \"./{component_name}\"" in content:
            return
        
        # Add export
        content = content.rstrip() + f"\nexport * from \"./{component_name}\";\n"
        
        with open(index_file, "w") as f:
            f.write(content)
    else:
        # Create new index file
        with open(index_file, "w") as f:
            f.write(f"export * from \"./{component_name}\";\n")


def main():
    parser = argparse.ArgumentParser(description="Generate AI-optimized UI components")
    parser.add_argument("name", help="Component name (kebab-case)")
    parser.add_argument(
        "--category",
        choices=list(CATEGORIES.keys()),
        default="data-display",
        help="Component category",
    )
    parser.add_argument(
        "--type",
        choices=list(BLOCK_TYPES.keys()),
        default="domain",
        help="Block type",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be generated without writing files",
    )
    
    args = parser.parse_args()
    
    # Paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    blocks_dir = project_root / "src" / "blocks" / args.category
    
    component_file = blocks_dir / f"{args.name}.tsx"
    story_file = blocks_dir / f"{args.name}.stories.tsx"
    
    print(f"🔧 Generating component: {args.name}")
    print(f"   Category: {args.category}")
    print(f"   Type: {BLOCK_TYPES[args.type]['layer']}")
    print()
    
    if args.dry_run:
        print("📄 Would create:")
        print(f"   - {component_file}")
        print(f"   - {story_file}")
        print(f"   - Update {blocks_dir}/index.ts")
        return
    
    # Create directory if needed
    blocks_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate component file
    component_code = generate_component_code(args.name, args.category, args.type)
    with open(component_file, "w") as f:
        f.write(component_code)
    print(f"✅ Created: {component_file}")
    
    # Generate story file
    story_code = generate_story_code(args.name, args.category, args.type)
    with open(story_file, "w") as f:
        f.write(story_code)
    print(f"✅ Created: {story_file}")
    
    # Update index
    update_index_file(blocks_dir, args.name)
    print(f"✅ Updated: {blocks_dir}/index.ts")
    
    print()
    print("📝 Next steps:")
    print(f"   1. Edit {component_file} to implement the component")
    print(f"   2. Edit {story_file} to add Storybook variants")
    print(f"   3. Run: bun run storybook to preview")


if __name__ == "__main__":
    main()
