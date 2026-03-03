/**
 * Kanban Board Usage Examples
 * 
 * Complete examples for using the Kanban Board components
 */

import type { KanbanBoard, KanbanCard, BoardToolbar } from "./index";

// ============================================================================
// Example 1: Basic Kanban Board
// ============================================================================

/**
 * Simple kanban board with default card rendering
 */
function BasicKanbanExample() {
  const columns = [
    {
      id: "todo",
      title: "To Do",
      cards: [
        {
          id: "1",
          title: "Fix login bug",
          description: "Users can't login with special characters",
          priority: "high",
          assignee: { id: "u1", name: "John Doe" },
          dueDate: "2024-03-15",
          tags: [{ id: "t1", label: "Bug", color: "red" }],
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      cards: [],
    },
    {
      id: "done",
      title: "Done",
      cards: [],
    },
  ];

  return (
    <div className="h-screen">
      <KanbanBoard columns={columns} />
    </div>
  );
}

// ============================================================================
// Example 2: Board with Toolbar
// ============================================================================

function BoardWithToolbarExample() {
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({ assignee: [], priority: [] });

  return (
    <div className="h-screen flex flex-col">
      <BoardToolbar
        searchQuery={search}
        onSearchChange={setSearch}
        filtersCount={filters.assignee.length + filters.priority.length}
        onFiltersClick={handleFilters}
        sortDirection="asc"
        onSortToggle={handleSort}
      />
      <KanbanBoard columns={columns} />
    </div>
  );
}

// ============================================================================
// Example 3: Custom Card Rendering
// ============================================================================

function CustomCardExample() {
  return (
    <KanbanBoard
      columns={columns}
      renderCard={(card) => (
        <KanbanCard>
          <KanbanCard.Header>
            <KanbanCard.Title>{card.title}</KanbanCard.Title>
            {card.priority && (
              <KanbanCard.Badge priority={card.priority}>
                {card.priority}
              </KanbanCard.Badge>
            )}
          </KanbanCard.Header>
          
          <KanbanCard.Content>
            {card.description && (
              <KanbanCard.Description>{card.description}</KanbanCard.Description>
            )}
            {card.tags && (
              <KanbanCard.Labels>
                {card.tags.map((tag) => (
                  <KanbanCard.Label key={tag.id} color={tag.color}>
                    {tag.label}
                  </KanbanCard.Label>
                ))}
              </KanbanCard.Labels>
            )}
          </KanbanCard.Content>
          
          <KanbanCard.Footer>
            {card.assignee && (
              <KanbanCard.Avatar
                name={card.assignee.name}
                avatarUrl={card.assignee.avatarUrl}
              />
            )}
            {card.dueDate && <KanbanCard.DueDate date={card.dueDate} />}
            {card.subtasks && (
              <KanbanCard.Subtasks
                completed={card.subtasks.filter((s) => s.completed).length}
                total={card.subtasks.length}
              />
            )}
          </KanbanCard.Footer>
        </KanbanCard>
      )}
    />
  );
}

// ============================================================================
// Example 4: With Card Click Handler
// ============================================================================

function InteractiveBoardExample() {
  const handleCardClick = (card) => {
    // Open card detail modal
    console.log("Clicked card:", card);
    navigateTo(`/cards/${card.id}`);
  };

  return (
    <KanbanBoard
      columns={columns}
      onCardClick={handleCardClick}
      features={{
        cardCreation: true,
        cardEditing: true,
        columnCollapse: true,
      }}
    />
  );
}

// ============================================================================
// Example 5: With Drag and Drop (using dnd-kit)
// ============================================================================

function DragAndDropBoardExample() {
  const handleCardMove = async (cardId, fromColumnId, toColumnId, newIndex) => {
    // Optimistic update
    updateCardLocation(cardId, toColumnId, newIndex);
    
    // API call
    await api.moveCard(cardId, toColumnId, newIndex);
  };

  return (
    <KanbanBoard
      columns={columns}
      features={{ dragDrop: true }}
      onCardMove={handleCardMove}
    />
  );
}

// ============================================================================
// Example 6: Sales Pipeline
// ============================================================================

interface Deal {
  id: string;
  company: string;
  value: number;
  probability: number;
  closeDate: string;
  assignee: { name: string; avatarUrl?: string };
}

function SalesPipelineExample() {
  const dealColumns: KanbanColumn<Deal>[] = [
    {
      id: "leads",
      title: "Leads",
      cards: [
        {
          id: "d1",
          company: "Acme Corp",
          value: 50000,
          probability: 20,
          closeDate: "2024-04-01",
          assignee: { name: "Sales Rep 1" },
        },
      ],
      color: "gray",
    },
    {
      id: "contacted",
      title: "Contacted",
      cards: [],
      color: "blue",
    },
    {
      id: "proposal",
      title: "Proposal",
      cards: [],
      color: "yellow",
    },
    {
      id: "negotiation",
      title: "Negotiation",
      cards: [],
      color: "orange",
    },
    {
      id: "closed",
      title: "Closed Won",
      cards: [],
      color: "green",
    },
  ];

  return (
    <KanbanBoard<Deal>
      columns={dealColumns}
      renderCard={(deal) => (
        <KanbanCard>
          <KanbanCard.Header>
            <KanbanCard.Title>{deal.company}</KanbanCard.Title>
            <KanbanCard.Badge priority="medium">
              ${deal.value.toLocaleString()}
            </KanbanCard.Badge>
          </KanbanCard.Header>
          
          <KanbanCard.Content>
            <div className="text-sm text-muted-foreground">
              Probability: {deal.probability}%
            </div>
          </KanbanCard.Content>
          
          <KanbanCard.Footer>
            <KanbanCard.Avatar name={deal.assignee.name} />
            <KanbanCard.DueDate date={deal.closeDate} />
          </KanbanCard.Footer>
        </KanbanCard>
      )}
    />
  );
}

// ============================================================================
// Example 7: Content Calendar
// ============================================================================

interface ContentPiece {
  id: string;
  topic: string;
  author: string;
  publishDate: string;
  channel: "blog" | "social" | "video";
}

function ContentCalendarExample() {
  const contentColumns: KanbanColumn<ContentPiece>[] = [
    {
      id: "ideas",
      title: "Ideas",
      cards: [],
    },
    {
      id: "writing",
      title: "Writing",
      cards: [],
    },
    {
      id: "review",
      title: "Review",
      cards: [],
    },
    {
      id: "scheduled",
      title: "Scheduled",
      cards: [],
    },
    {
      id: "published",
      title: "Published",
      cards: [],
    },
  ];

  return (
    <KanbanBoard<ContentPiece>
      columns={contentColumns}
      renderCard={(content) => (
        <KanbanCard>
          <KanbanCard.Header>
            <KanbanCard.Title>{content.topic}</KanbanCard.Title>
            <KanbanCard.Label
              color={
                content.channel === "blog"
                  ? "blue"
                  : content.channel === "social"
                    ? "purple"
                    : "red"
              }
            >
              {content.channel}
            </KanbanCard.Label>
          </KanbanCard.Header>
          
          <KanbanCard.Footer>
            <KanbanCard.Avatar name={content.author} />
            <KanbanCard.DueDate date={content.publishDate} />
          </KanbanCard.Footer>
        </KanbanCard>
      )}
    />
  );
}

// ============================================================================
// Example 8: Manufacturing Work Orders
// ============================================================================

interface WorkOrder {
  id: string;
  machineId: string;
  issueType: "repair" | "maintenance" | "inspection";
  priority: "critical" | "high" | "normal";
  estimatedHours: number;
}

function WorkOrderBoardExample() {
  const woColumns: KanbanColumn<WorkOrder>[] = [
    {
      id: "pending",
      title: "Pending",
      cards: [],
      color: "gray",
      cardLimit: 10,
    },
    {
      id: "in-progress",
      title: "In Progress",
      cards: [],
      color: "blue",
      cardLimit: 5,
    },
    {
      id: "quality-check",
      title: "Quality Check",
      cards: [],
      color: "yellow",
    },
    {
      id: "completed",
      title: "Completed",
      cards: [],
      color: "green",
    },
  ];

  return (
    <KanbanBoard<WorkOrder>
      columns={woColumns}
      renderCard={(wo) => (
        <KanbanCard>
          <KanbanCard.Header>
            <KanbanCard.Title>WO: {wo.machineId}</KanbanCard.Title>
            <KanbanCard.Badge
              priority={
                wo.priority === "critical"
                  ? "urgent"
                  : wo.priority === "high"
                    ? "high"
                    : "medium"
              }
            >
              {wo.priority}
            </KanbanCard.Badge>
          </KanbanCard.Header>
          
          <KanbanCard.Content>
            <KanbanCard.Label
              color={
                wo.issueType === "repair"
                  ? "red"
                  : wo.issueType === "maintenance"
                    ? "orange"
                    : "blue"
              }
            >
              {wo.issueType}
            </KanbanCard.Label>
            <div className="text-xs text-muted-foreground mt-2">
              Est: {wo.estimatedHours}h
            </div>
          </KanbanCard.Content>
        </KanbanCard>
      )}
    />
  );
}
