import { AlertCircleIcon, CheckCircleIcon, ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/primitives/collapsible";

export type ValidationStatus = "valid" | "invalid" | "pending" | "none";

export interface FormSectionProps {
  /** Section title */
  title: string;
  /** Optional description */
  description?: string;
  /** Validation status */
  validationStatus?: ValidationStatus;
  /** Whether section is collapsible */
  collapsible?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Currently open state (controlled) */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Section content */
  children: React.ReactNode;
  /** Optional actions (buttons, etc.) */
  actions?: React.ReactNode;
  /** Error message to display */
  error?: string;
  className?: string;
}

const statusConfig = {
  valid: {
    icon: CheckCircleIcon,
    color: "text-emerald-500",
    label: "Complete",
  },
  invalid: {
    icon: AlertCircleIcon,
    color: "text-red-500",
    label: "Incomplete",
  },
  pending: {
    icon: AlertCircleIcon,
    color: "text-amber-500",
    label: "Pending",
  },
  none: null,
};

export function FormSection({
  title,
  description,
  validationStatus = "none",
  collapsible = false,
  defaultOpen = true,
  open,
  onOpenChange,
  children,
  actions,
  error,
  className,
}: FormSectionProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const _status = statusConfig[validationStatus];

  const sectionContent = (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold">{title}</h3>
          {validationStatus === "valid" && (
            <div className={cn("flex items-center gap-1 text-xs", statusConfig.valid.color)}>
              <CheckCircleIcon className="h-3.5 w-3.5" />
              <span>{statusConfig.valid.label}</span>
            </div>
          )}
          {validationStatus === "invalid" && (
            <div className={cn("flex items-center gap-1 text-xs", statusConfig.invalid.color)}>
              <AlertCircleIcon className="h-3.5 w-3.5" />
              <span>{statusConfig.invalid.label}</span>
            </div>
          )}
          {validationStatus === "pending" && (
            <div className={cn("flex items-center gap-1 text-xs", statusConfig.pending.color)}>
              <AlertCircleIcon className="h-3.5 w-3.5" />
              <span>{statusConfig.pending.label}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {actions}
          {collapsible && (
            <CollapsibleTrigger asChild>
              <button type="button" className="p-1 hover:bg-muted rounded">
                <ChevronDownIcon
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform",
                    !isOpen && "-rotate-90"
                  )}
                />
              </button>
            </CollapsibleTrigger>
          )}
        </div>
      </div>

      {/* Description */}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}

      {/* Error message */}
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircleIcon className="h-4 w-4" />
          {error}
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );

  if (!collapsible) {
    return sectionContent;
  }

  return (
    <Collapsible open={isOpen} onOpenChange={handleOpenChange}>
      {sectionContent}
      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-up data-[state=open]:slide-down">
        <div className="pt-2">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default FormSection;
