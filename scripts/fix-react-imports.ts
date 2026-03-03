#!/usr/bin/env bun
/**
 * Script to add React imports to all block components that need them
 */

import { glob } from "bun";
import { readFileSync, writeFileSync } from "fs";

const files = Array.from(glob("src/blocks/**/*.tsx").scanSync({ cwd: process.cwd() }));

let fixedCount = 0;

for (const file of files) {
  const fullPath = `src/blocks/${file}`;
  let content = readFileSync(fullPath, "utf-8");
  
  // Check if file uses React APIs but doesn't import React
  const usesReact = /React\.(forwardRef|useMemo|useCallback|useState|useEffect|useContext|useRef|useReducer|createElement|Fragment|ReactNode|ComponentType)/.test(content);
  const hasReactImport = /import\s+.*React/.test(content);
  
  if (usesReact && !hasReactImport) {
    console.log(`Fixing: ${fullPath}`);
    
    // Add React import after "use client" directive
    if (content.startsWith('"use client";')) {
      content = content.replace(
        '"use client";',
        '"use client";\n\nimport * as React from "react";'
      );
    } else if (content.startsWith("'use client';")) {
      content = content.replace(
        "'use client';",
        "'use client';\n\nimport * as React from 'react';"
      );
    } else {
      // Add at the beginning
      content = 'import * as React from "react";\n\n' + content;
    }
    
    writeFileSync(fullPath, content);
    fixedCount++;
  }
}

console.log(`\n✅ Fixed ${fixedCount} files`);
