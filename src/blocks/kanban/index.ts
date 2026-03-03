/**
 * Kanban Board Components
 *
 * Comprehensive kanban board system with drag-and-drop support.
 *
 * @example
 * // Basic usage
 * <KanbanBoard
 *   columns={columns}
 *   renderCard={(card) => <KanbanCard card={card} />}
 *   onCardMove={handleCardMove}
 * />
 *
 * @example
 * // With drag-and-drop
 * <DraggableKanbanBoard
 *   columns={columns}
 *   onCardMove={handleCardMove}
 *   enableColumnDrag
 * />
 *
 * @example
 * // With provider
 * <KanbanBoardProvider columns={columns} onMoveCard={api.moveCard}>
 *   <DraggableKanbanBoard />
 * </KanbanBoardProvider>
 */

// Board & Column
export { KanbanBoard } from "./kanban-board";
export type { KanbanBoardProps } from "./kanban-board";

export { KanbanColumn } from "./kanban-column";
export type { KanbanColumnProps } from "./kanban-column";

// Draggable versions
export { DraggableKanbanBoard } from "./draggable-kanban-board";
export type { DraggableKanbanBoardProps } from "./draggable-kanban-board";

export { DraggableColumn } from "./draggable-column";
export type { DraggableColumnProps } from "./draggable-column";

export { DraggableCard } from "./draggable-card";
export type { DraggableCardProps } from "./draggable-card";

// Provider & State
export { KanbanBoardProvider, useKanbanBoard } from "./kanban-board-provider";

// Toolbar
export { BoardToolbar } from "./board-toolbar";
export type { BoardToolbarProps } from "./board-toolbar";

// Quick Add
export { QuickAddCard } from "./quick-add-card";
export type { QuickAddCardProps } from "./quick-add-card";

// Column Header
export { ColumnHeader } from "./column-header";
export type { ColumnHeaderProps } from "./column-header";

// Card components (re-export from card directory)
export * from "./card";

// Types
export * from "./types";
