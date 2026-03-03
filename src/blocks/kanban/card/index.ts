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

export { Card, KanbanCard } from "./kanban-card";
export { Attachments, KanbanCardAttachments } from "./kanban-card-attachments";
export { Avatar, KanbanCardAvatar } from "./kanban-card-avatar";
export { Badge, KanbanCardBadge } from "./kanban-card-badge";
export { Content, KanbanCardContent } from "./kanban-card-content";

export { Description, KanbanCardDescription } from "./kanban-card-description";
export { DueDate, KanbanCardDueDate } from "./kanban-card-due-date";
export { Footer, KanbanCardFooter } from "./kanban-card-footer";
export { Header, KanbanCardHeader } from "./kanban-card-header";
export { KanbanCardLabel, Label } from "./kanban-card-label";
export { KanbanCardLabels, Labels } from "./kanban-card-labels";

export { KanbanCardSubtasks, Subtasks } from "./kanban-card-subtasks";
export { KanbanCardTitle, Title } from "./kanban-card-title";
