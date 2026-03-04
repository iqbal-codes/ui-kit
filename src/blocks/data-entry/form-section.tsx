import { AlertCircleIcon, CheckCircleIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export type ValidationStatus = "valid" | "invalid" | "pending" | "none";

export interface FormSectionProps {
  /** Section title */
  title: string;
  /** Optional description */
  description?: string;
  /** Validation status */
  validationStatus?: ValidationStatus;
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
  children,
  actions,
  error,
  className,
}: FormSectionProps) {
  const _status = statusConfig[validationStatus];

  return (
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
        <div className="flex items-center gap-2">{actions}</div>
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
}

export default FormSection;
