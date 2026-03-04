/**
 * Kanban Card Components
 *
 * Compound component pattern for customizable kanban cards.
 *
 * @example
 * // Default usage
 * <KanbanCard card={cardData} />
 *
 * @example
 * // Compound components
 * <KanbanCard>
 *   <KanbanCard.Header>
 *     <KanbanCard.Title>Title</KanbanCard.Title>
 *     <KanbanCard.Badge priority="high">High</KanbanCard.Badge>
 *   </KanbanCard.Header>
 *   <KanbanCard.Content>
 *     <KanbanCard.Description>Description</KanbanCard.Description>
 *     <KanbanCard.Labels>
 *       <KanbanCard.Label color="blue">Bug</KanbanCard.Label>
 *     </KanbanCard.Labels>
 *   </KanbanCard.Content>
 *   <KanbanCard.Footer>
 *     <KanbanCard.Avatar name="John Doe" />
 *     <KanbanCard.DueDate date="2024-03-15" />
 *     <KanbanCard.Subtasks completed={3} total={5} />
 *   </KanbanCard.Footer>
 * </KanbanCard>
 */

// Note: Card is an alias for KanbanCard, exported from kanban-card.tsx directly
export { Card, KanbanCard } from "./kanban-card";
// Compound component exports (with aliases for convenience, except Footer which conflicts with layout)
export { KanbanCardAvatar as Avatar } from "./kanban-card-avatar";
export { KanbanCardBadge as Badge } from "./kanban-card-badge";
export { KanbanCardContent as Content } from "./kanban-card-content";
export { KanbanCardDescription as Description } from "./kanban-card-description";
export { KanbanCardDueDate as DueDate } from "./kanban-card-due-date";
// Note: Footer alias removed - use KanbanCardFooter to avoid conflict with layout/Footer
export { KanbanCardFooter } from "./kanban-card-footer";
export { KanbanCardHeader as Header } from "./kanban-card-header";
export { KanbanCardLabel as Label } from "./kanban-card-label";
export { KanbanCardLabels as Labels } from "./kanban-card-labels";
export { KanbanCardSubtasks as Subtasks } from "./kanban-card-subtasks";
export { KanbanCardTitle as Title } from "./kanban-card-title";
