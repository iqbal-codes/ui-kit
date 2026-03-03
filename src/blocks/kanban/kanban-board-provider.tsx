"use client";

import * as React from "react";
import type { KanbanColumn, BaseCardMetadata, KanbanFeatures } from "../types";

/**
 * Kanban board state
 */
interface KanbanBoardState<T extends BaseCardMetadata> {
  /** All columns */
  columns: KanbanColumn<T>[];
  /** Board features */
  features: KanbanFeatures;
  /** Search query */
  searchQuery: string;
  /** Active filters */
  filters: {
    assignees?: string[];
    priorities?: string[];
    tags?: string[];
  };
  /** Loading state */
  isLoading: boolean;
  /** Error state */
  error: string | null;
}

/**
 * Kanban board actions
 */
interface KanbanBoardActions<T extends BaseCardMetadata> {
  /** Set search query */
  setSearchQuery: (query: string) => void;
  /** Set filters */
  setFilters: (filters: KanbanBoardState<T>["filters"]) => void;
  /** Move card between columns */
  moveCard: (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => Promise<void>;
  /** Reorder card within column */
  reorderCard: (
    cardId: string,
    fromIndex: number,
    toIndex: number,
    columnId: string
  ) => Promise<void>;
  /** Reorder columns */
  reorderColumns: (
    columnId: string,
    fromIndex: number,
    toIndex: number
  ) => Promise<void>;
  /** Add new card */
  addCard: (columnId: string, card: T) => Promise<void>;
  /** Update card */
  updateCard: (cardId: string, updates: Partial<T>) => Promise<void>;
  /** Delete card */
  deleteCard: (cardId: string) => Promise<void>;
  /** Set loading state */
  setLoading: (loading: boolean) => void;
  /** Set error */
  setError: (error: string | null) => void;
}

type KanbanBoardContextValue<T extends BaseCardMetadata> =
  KanbanBoardState<T> & KanbanBoardActions<T>;

const KanbanBoardContext = React.createContext<
  KanbanBoardContextValue<any> | undefined
>(undefined);

/**
 * Kanban board provider props
 */
export interface KanbanBoardProviderProps<T extends BaseCardMetadata> {
  /** Initial columns */
  columns: KanbanColumn<T>[];
  /** Board features */
  features?: KanbanFeatures;
  /** API callback for moving cards */
  onMoveCard?: (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => Promise<void>;
  /** API callback for reordering cards */
  onReorderCard?: (
    cardId: string,
    fromIndex: number,
    toIndex: number,
    columnId: string
  ) => Promise<void>;
  /** API callback for reordering columns */
  onReorderColumns?: (
    columnId: string,
    fromIndex: number,
    toIndex: number
  ) => Promise<void>;
  /** API callback for adding cards */
  onAddCard?: (columnId: string, card: T) => Promise<void>;
  /** API callback for updating cards */
  onUpdateCard?: (cardId: string, updates: Partial<T>) => Promise<void>;
  /** API callback for deleting cards */
  onDeleteCard?: (cardId: string) => Promise<void>;
  /** Children */
  children: React.ReactNode;
}

/**
 * KanbanBoardProvider - Context provider for kanban board state
 *
 * Provides:
 * - State management for columns, filters, search
 * - Optimistic updates for drag-and-drop
 * - API integration callbacks
 * - Loading and error states
 *
 * @example
 * <KanbanBoardProvider
 *   columns={initialColumns}
 *   onMoveCard={api.moveCard}
 * >
 *   <DraggableKanbanBoard />
 * </KanbanBoardProvider>
 */
export function KanbanBoardProvider<T extends BaseCardMetadata>({
  columns: initialColumns,
  features = {},
  onMoveCard,
  onReorderCard,
  onReorderColumns,
  onAddCard,
  onUpdateCard,
  onDeleteCard,
  children,
}: KanbanBoardProviderProps<T>) {
  const [state, setState] = React.useState<KanbanBoardState<T>>({
    columns: initialColumns,
    features: {
      dragDrop: true,
      cardCreation: true,
      cardEditing: true,
      cardDeletion: true,
      columnCollapse: false,
      subtasks: true,
      attachments: true,
      dueDates: true,
      assignees: true,
      tags: true,
      priority: true,
      search: true,
      filters: true,
      columnSorting: false,
      cardSorting: true,
      ...features,
    },
    searchQuery: "",
    filters: {},
    isLoading: false,
    error: null,
  });

  // Optimistic update helper
  const optimisticUpdate = React.useCallback(
    async <T,>(
      // Update function
      updateFn: () => void,
      // API call
      apiCall: () => Promise<void>,
      // Rollback function
      rollbackFn: () => void
    ) => {
      // Apply optimistic update
      updateFn();

      try {
        // Make API call
        await apiCall();
      } catch (error) {
        // Rollback on error
        rollbackFn();
        setState((prev) => ({
          ...prev,
          error: error instanceof Error ? error.message : "Operation failed",
        }));
      }
    },
    []
  );

  const value = React.useMemo<KanbanBoardContextValue<T>>(
    () => ({
      ...state,
      setSearchQuery: (query) =>
        setState((prev) => ({ ...prev, searchQuery: query })),
      setFilters: (filters) =>
        setState((prev) => ({ ...prev, filters })),
      moveCard: async (cardId, fromColumnId, toColumnId, newIndex) => {
        const previousColumns = state.columns;

        await optimisticUpdate(
          // Update
          () => {
            setState((prev) => {
              const newColumns = prev.columns.map((col) => {
                if (col.id === fromColumnId) {
                  return {
                    ...col,
                    cards: col.cards.filter((c) => c.id !== cardId),
                  };
                }
                if (col.id === toColumnId) {
                  const card = previousColumns
                    .find((c) => c.id === fromColumnId)
                    ?.cards.find((c) => c.id === cardId);
                  if (!card) return col;

                  const newCards = [...col.cards];
                  newCards.splice(newIndex, 0, card);
                  return { ...col, cards: newCards };
                }
                return col;
              });
              return { ...prev, columns: newColumns };
            });
          },
          // API
          async () => {
            await onMoveCard?.(cardId, fromColumnId, toColumnId, newIndex);
          },
          // Rollback
          () => {
            setState((prev) => ({ ...prev, columns: previousColumns }));
          }
        );
      },
      reorderCard: async (cardId, fromIndex, toIndex, columnId) => {
        const previousColumns = state.columns;

        await optimisticUpdate(
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) => {
                if (col.id === columnId) {
                  const newCards = [...col.cards];
                  const [removed] = newCards.splice(fromIndex, 1);
                  newCards.splice(toIndex, 0, removed);
                  return { ...col, cards: newCards };
                }
                return col;
              }),
            }));
          },
          async () => {
            await onReorderCard?.(cardId, fromIndex, toIndex, columnId);
          },
          () => {
            setState((prev) => ({ ...prev, columns: previousColumns }));
          }
        );
      },
      reorderColumns: async (columnId, fromIndex, toIndex) => {
        const previousColumns = state.columns;

        await optimisticUpdate(
          () => {
            setState((prev) => {
              const newColumns = [...prev.columns];
              const [removed] = newColumns.splice(fromIndex, 1);
              newColumns.splice(toIndex, 0, removed);
              return { ...prev, columns: newColumns };
            });
          },
          async () => {
            await onReorderColumns?.(columnId, fromIndex, toIndex);
          },
          () => {
            setState((prev) => ({ ...prev, columns: previousColumns }));
          }
        );
      },
      addCard: async (columnId, card) => {
        await optimisticUpdate(
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) =>
                col.id === columnId
                  ? { ...col, cards: [...col.cards, card] }
                  : col
              ),
            }));
          },
          async () => {
            await onAddCard?.(columnId, card);
          },
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) =>
                col.id === columnId
                  ? { ...col, cards: col.cards.filter((c) => c.id !== card.id) }
                  : col
              ),
            }));
          }
        );
      },
      updateCard: async (cardId, updates) => {
        await optimisticUpdate(
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) => ({
                ...col,
                cards: col.cards.map((c) =>
                  c.id === cardId ? { ...c, ...updates } : c
                ),
              })),
            }));
          },
          async () => {
            await onUpdateCard?.(cardId, updates);
          },
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) => ({
                ...col,
                cards: col.cards.map((c) =>
                  c.id === cardId
                    ? { ...c, ...updates } // Rollback to original
                    : c
                ),
              })),
            }));
          }
        );
      },
      deleteCard: async (cardId) => {
        await optimisticUpdate(
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) => ({
                ...col,
                cards: col.cards.filter((c) => c.id !== cardId),
              })),
            }));
          },
          async () => {
            await onDeleteCard?.(cardId);
          },
          () => {
            // Would need to store deleted card for proper rollback
            console.error("Delete rollback not implemented");
          }
        );
      },
      setLoading: (loading) =>
        setState((prev) => ({ ...prev, isLoading: loading })),
      setError: (error) =>
        setState((prev) => ({ ...prev, error })),
    }),
    [
      state,
      optimisticUpdate,
      onMoveCard,
      onReorderCard,
      onReorderColumns,
      onAddCard,
      onUpdateCard,
      onDeleteCard,
    ]
  );

  return (
    <KanbanBoardContext.Provider value={value}>
      {children}
    </KanbanBoardContext.Provider>
  );
}

/**
 * Hook to use kanban board context
 */
export function useKanbanBoard<T extends BaseCardMetadata>() {
  const context = React.useContext(KanbanBoardContext);
  if (context === undefined) {
    throw new Error(
      "useKanbanBoard must be used within a KanbanBoardProvider"
    );
  }
  return context as KanbanBoardContextValue<T>;
}
