"use client";

import { PaperclipIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import type { KanbanCardAttachmentsProps } from "../types";

/**
 * KanbanCardAttachments - Attachment count indicator for kanban cards
 *
 * Shows paperclip icon with count
 *
 * @example
 * <KanbanCard.Attachments count={3} />
 *
 * @example
 * <KanbanCard.Footer>
 *   <KanbanCard.Attachments count={5} />
 * </KanbanCard.Footer>
 */
export const KanbanCardAttachments = React.forwardRef<HTMLDivElement, KanbanCardAttachmentsProps>(
  ({ count, className, ...props }, ref) => {
    if (count === 0) return null;

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1.5 text-xs text-muted-foreground", className)}
        {...props}
        title={`${count} attachment${count !== 1 ? "s" : ""}`}
      >
        <PaperclipIcon className="h-3.5 w-3.5 shrink-0" />
        <span className="font-medium">{count}</span>
      </div>
    );
  }
);

KanbanCardAttachments.displayName = "KanbanCardAttachments";

export { KanbanCardAttachments as Attachments };
