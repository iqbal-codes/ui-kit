import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/primitives/badge";

export interface FilterChipProps {
  /** Chip label */
  label: string;
  /** Whether chip is selected */
  selected?: boolean;
  /** Selection handler */
  onToggle?: () => void;
  /** Remove handler */
  onRemove?: () => void;
  /** Number indicator */
  count?: number;
  className?: string;
}

export function FilterChip({
  label,
  selected = false,
  onToggle,
  onRemove,
  count,
  className,
}: FilterChipProps) {
  return (
    <Badge
      variant={selected ? "default" : "outline"}
      className={cn(
        "cursor-pointer transition-all hover:opacity-80",
        onToggle && "pr-1",
        className
      )}
      onClick={onToggle}
    >
      {label}
      {count !== undefined && <span className="ml-1 text-xs opacity-70">({count})</span>}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 hover:bg-background/20 rounded p-0.5"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </Badge>
  );
}

export default FilterChip;
