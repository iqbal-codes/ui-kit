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

export type { BoardToolbarProps } from "./board-toolbar";
// Toolbar
export { BoardToolbar } from "./board-toolbar";
// Card components (re-export from card directory)
export * from "./card";
export type { ColumnHeaderProps } from "./column-header";
// Column Header
export { ColumnHeader } from "./column-header";
export type { DraggableCardProps } from "./draggable-card";
export { DraggableCard } from "./draggable-card";
export type { DraggableColumnProps } from "./draggable-column";
export { DraggableColumn } from "./draggable-column";
export type { DraggableKanbanBoardProps } from "./draggable-kanban-board";
// Draggable versions
export { DraggableKanbanBoard } from "./draggable-kanban-board";
// Board & Column (props are exported from types)
export { KanbanBoard } from "./kanban-board";
// Provider & State
export { KanbanBoardProvider, useKanbanBoard } from "./kanban-board-provider";
// Column (props are exported from types)
export { KanbanColumn } from "./kanban-column";
export type { QuickAddCardProps } from "./quick-add-card";
// Quick Add
export { QuickAddCard } from "./quick-add-card";

// Types
export * from "./types";
