**AI-Native UI Kit Technical Specification**
_Declarative Architecture for Shadcn-Based Component Ecosystem_

---

## 1. Executive Summary

This specification defines the architecture for a comprehensive UI kit designed for AI-assisted development workflows. The system establishes a strict two-layer hierarchy—**Primitives** (pure shadcn/ui components) and **Blocks** (compositional business components)—delivered through a single-repository registry pattern with integrated Fumadocs documentation.

**Core Objective**: Enable AI agents to generate manufacturing and business applications with zero ambiguity about component availability, composition patterns, and architectural boundaries.

---

## 2. Architectural Philosophy

### 2.1 The Lego Principle

The kit operates on a strict manufacturing metaphor: **Primitives are standardized Lego bricks; Blocks are the buildings constructed from them.** No block may function as a primitive, and no primitive may contain business logic.

### 2.2 AI-First Design

All architectural decisions prioritize machine readability over human convenience:

- Flat prop structures prevent AI hallucination of nested configurations
- Explicit import paths eliminate module resolution ambiguity
- Registry manifests provide machine-discoverable APIs
- Self-documenting components carry usage context in structured metadata

### 2.3 Copy-Paste Distribution

Components distribute via source code replication rather than NPM packaging. This ensures AI agents can read, modify, and extend components without navigating minified dependencies or complex node_modules hierarchies.

---

## 3. Repository Architecture

### 3.1 Single Repository Structure

A unified codebase containing source components, registry manifests, documentation site, and installation tooling. No workspace monorepo partitioning—flat directory structure optimized for AI file system traversal.

**Primary Directories**:

- **Source**: Component implementations segregated by architectural layer
- **Registry**: Machine-readable component manifests and dependency graphs
- **Site**: Fumadocs-based documentation and component showcase
- **Scripts**: CLI tooling for component installation and synchronization

### 3.2 Distribution Strategy

Git-based registry with semantic versioning via commit tags. Components install via CLI command that resolves dependencies, installs external libraries, and replicates source files into consuming projects.

---

## 4. Component Taxonomy

### 4.1 Primitives Layer

Pure UI elements vendored directly from shadcn/ui. These represent the atomic visual elements of the system.

**Characteristics**:

- Zero external business dependencies
- No manufacturing or domain-specific terminology
- Visual-only modifications allowed (touch targets, safety color variants)
- Importable only by Blocks, never by application code directly

**Categories**: Actions (buttons, toggles), Inputs (text fields, selectors), Display (badges, cards), Overlays (dialogs, sheets), and Data (tables, lists).

### 4.2 Blocks Layer

Composite components constructed from Primitives. Organized into three sub-categories based on abstraction level and dependency requirements.

#### Layout Blocks

Structural templates providing page-level composition frameworks. These accept content via slot-based props (header, content, sidebar, footer, modal portals) and establish consistent spatial relationships.

**Purpose**: Eliminate repetitive layout boilerplate in AI-generated code. Provide manufacturing-specific structural patterns (dashboard shells, split-pane workflows, mobile-responsive resource layouts).

#### Domain Blocks

Business-specific UI components containing manufacturing terminology and logic. These represent reusable business objects (work order cards, production timelines, status indicators, operator assignments).

**Purpose**: Encapsulate domain knowledge so AI agents use correct terminology and patterns without hallucinating business logic.

#### Smart Blocks

Comprehensive feature solutions integrating external state management libraries. These provide declarative interfaces to complex functionality (list pages with URL-persisted filters, auto-saving forms, real-time dashboards).

**Purpose**: Enable single-component solutions for common manufacturing workflows. AI agents configure via props rather than wiring disparate libraries.

### 4.3 Dependency Hierarchy

Strict dependency flow preventing circular references:

- Primitives depend on utility libraries only
- Domain Blocks depend on Primitives
- Layout Blocks depend on Primitives and Domain Blocks
- Smart Blocks depend on all lower layers plus external state libraries (nuqs, react-hook-form, tanstack-query)

---

## 5. Registry & Metadata System

### 5.1 Component Manifests

Each component carries a machine-readable manifest specifying:

- Architectural classification (primitive vs block subtype)
- File system location and entry points
- NPM dependencies with version constraints
- Registry dependencies (other components required for functionality)
- Installation strategy (copy-to-project vs reference)
- AI usage hints and common composition patterns

### 5.2 Global Registry

Centralized registry.json serving as the single source of truth for component discovery. Enables AI agents to query available components, understand their relationships, and generate accurate installation commands.

### 5.3 API Exposure

Documentation site exposes REST endpoints providing:

- Full component library with source code
- Props interfaces and TypeScript definitions
- Dependency resolution graphs
- Search functionality optimized for AI consumption

---

## 6. Documentation Architecture (Fumadocs)

### 6.1 Auto-Generated Component Pages

Documentation pages generate at build time from registry manifests and source code analysis. Each component receives:

- Interactive visual preview
- Props documentation extracted from TypeScript definitions
- Installation command specific to component type
- Source code viewing with syntax highlighting
- AI-specific usage guidance

### 6.2 Hierarchical Navigation

Documentation organized by architectural layer:

- Primitives Gallery (visual, property-focused)
- Layout Patterns (structural composition examples)
- Domain Components (business context descriptions)
- Smart Solutions (configuration-driven documentation)
- AI Playbook (system prompts and composition guides)

### 6.3 Machine-Readable Formats

Documentation site serves JSON endpoints for AI agent consumption, enabling programmatic discovery of component APIs without HTML parsing.

---

## 7. Installation & Distribution Protocol

### 7.1 CLI Installation Flow

Component installation occurs via single command resolving three phases:

1. Dependency Resolution: Identify and install required NPM packages (state libraries, utilities)
2. Primitive Resolution: Install required shadcn/ui primitives via standard CLI
3. Source Replication: Copy block source code into consuming project with path mapping updates

### 7.2 Version Pinning

Components install with explicit version tags. Projects may pin to specific registry commits, enabling stability while allowing selective updates.

### 7.3 Update Strategy

Block updates propagate manually (intentionally non-automatic). Developers review changes before accepting updates to business logic components. Primitive updates may propagate automatically for security patches.

---

## 8. AI Integration Strategy

### 8.1 Component Discovery

AI agents discover components via registry API rather than file system globbing. Registry provides semantic descriptions enabling AI to select appropriate components based on user intent (e.g., mapping "list with filters" to ManufacturingListPage).

### 8.2 Composition Guardrails

Architecture enforces composition patterns through:

- Import path constraints (Blocks cannot import sibling Blocks arbitrarily)
- Props interface design (flat structures, discriminated unions, branded types)
- Slot-based patterns for Layout Blocks
- Controller pattern separation in Smart Blocks

### 8.3 Context Preservation

AI context files distributed with the kit provide:

- System prompts optimized for the component hierarchy
- Composition rules (when to use Smart vs Layout vs Domain)
- Anti-patterns to avoid (nesting Smart Blocks, importing Primitives directly in apps)

---

## 9. Dependency Management

### 9.1 External Library Governance

Smart Blocks declare dependencies on external state management libraries (nuqs for URL state, react-hook-form for forms, tanstack-query for server state). Registry maintains global version lock file ensuring compatibility across all blocks in the kit.

### 9.2 Peer vs Direct Dependencies

Framework dependencies (React, Next.js, Tailwind) remain peer dependencies managed by consuming projects. Functional dependencies (nuqs, zod) install directly via CLI during block installation.

### 9.3 Conflict Resolution

Registry-level dependency constraints prevent version conflicts. All Smart Blocks utilizing nuqs use identical version ranges specified in global lock file.

---

## 10. Maintenance & Governance

### 10.1 Synchronization Workflow

Documentation site regenerates automatically from source code changes. Component manifests validate against schema at commit time. Source code changes trigger documentation updates without manual intervention.

### 10.2 Contribution Standards

New components require:

- Registry manifest with complete metadata
- JSDoc annotations for AI context
- Props interface following flat structure conventions
- Categorization into appropriate architectural layer
- Documentation page generation compatibility

### 10.3 Quality Assurance

Success measured by:

- AI ability to install and compose components without human correction
- TypeScript strict mode compliance across all components
- Zero runtime errors when components receive partial or incorrect props
- Documentation accuracy (preview matches installed behavior)

---

## 11. Success Criteria

**Hierarchy Integrity**: AI agents correctly distinguish between Primitives (visual only), Domain Blocks (business UI), Layout Blocks (structural), and Smart Blocks (comprehensive solutions) without architectural confusion.

**Installation Reliability**: Single command installation succeeds for all component types, automatically resolving and installing nested dependencies (both NPM packages and registry dependencies).

**Composition Clarity**: AI generates valid component trees following import rules (Smart Blocks compose Layout Blocks; Layout Blocks accept Domain Blocks in slots; no circular dependencies).

**Documentation Utility**: Human developers and AI agents can discover component capabilities, view source code, and understand composition patterns without leaving the documentation site.

**Maintenance Sustainability**: Solo developer can add new components, update existing blocks, and regenerate documentation without complex CI/CD pipelines or multi-repository synchronization.

---

This specification establishes a robust, AI-optimized component ecosystem that bridges the gap between shadcn/ui primitives and comprehensive manufacturing application development, enabling rapid AI-assisted development while maintaining architectural integrity and type safety.
