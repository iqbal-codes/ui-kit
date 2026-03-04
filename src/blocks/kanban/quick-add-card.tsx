"use client";

import { PlusIcon, XIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Textarea } from "@/primitives/textarea";

/**
 * Quick add card props
 */
export interface QuickAddCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Whether form is open */
  isOpen?: boolean;
  /** Current card title value */
  value?: string;
  /** Called when value changes */
  onChange?: (value: string) => void;
  /** Called when add is clicked */
  onAdd?: (title: string) => void;
  /** Called when cancel is clicked */
  onCancel?: () => void;
  /** Whether form is submitting */
  isSubmitting?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Add button text */
  addButtonText?: string;
  /** Cancel button text */
  cancelButtonText?: string;
}

/**
 * QuickAddCard - Inline card creation form
 *
 * @example
 * <QuickAddCard
 *   isOpen={isAdding}
 *   value={title}
 *   onChange={setTitle}
 *   onAdd={(title) => handleAdd(title)}
 *   onCancel={() => setIsAdding(false)}
 * />
 */
export const QuickAddCard = React.forwardRef<HTMLDivElement, QuickAddCardProps>(
  function QuickAddCardBase(
    {
      isOpen = false,
      value = "",
      onChange,
      onAdd,
      onCancel,
      isSubmitting = false,
      placeholder = "Enter card title...",
      addButtonText = "Add card",
      cancelButtonText = "Cancel",
      className,
      ...props
    },
    ref
  ) {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim()) {
        onAdd?.(value.trim());
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancel?.();
      }
    };

    if (!isOpen) return null;

    return (
      <div ref={ref} className={cn("p-2", className)} {...props}>
        <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
          <div className="space-y-2">
            <Textarea
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              placeholder={placeholder}
              className="min-h-[80px] resize-none"
              autoFocus
            />

            <div className="flex items-center gap-2">
              <Button
                type="submit"
                size="sm"
                disabled={!value.trim() || isSubmitting}
                className="gap-1"
              >
                <PlusIcon className="h-4 w-4" />
                {addButtonText}
              </Button>

              <Button type="button" variant="ghost" size="sm" onClick={onCancel} className="gap-1">
                <XIcon className="h-4 w-4" />
                {cancelButtonText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
);
