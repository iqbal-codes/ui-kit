import * as React from "react";
import { AlertTriangleIcon, InfoIcon, HelpCircleIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/primitives/alert-dialog";
import { Button } from "@/primitives/button";

export type ConfirmationVariant = "danger" | "warning" | "info" | "question";

export interface ConfirmationDialogProps {
  /** Whether the dialog is open */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Dialog title */
  title: string;
  /** Dialog description */
  description?: string;
  /** Variant determines icon and button colors */
  variant?: ConfirmationVariant;
  /** Confirm button text */
  confirmText?: string;
  /** Cancel button text */
  cancelText?: string;
  /** Confirm button variant */
  confirmVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  /** Handler when confirmed */
  onConfirm?: () => void;
  /** Handler when cancelled */
  onCancel?: () => void;
  /** Disable the confirm button */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

const variantConfig = {
  danger: {
    icon: AlertTriangleIcon,
    confirmVariant: "destructive" as const,
  },
  warning: {
    icon: AlertTriangleIcon,
    confirmVariant: "default" as const,
  },
  info: {
    icon: InfoIcon,
    confirmVariant: "default" as const,
  },
  question: {
    icon: HelpCircleIcon,
    confirmVariant: "default" as const,
  },
};

export function ConfirmationDialog({
  open,
  onOpenChange,
  title,
  description,
  variant = "question",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant,
  onConfirm,
  onCancel,
  disabled,
  loading,
}: ConfirmationDialogProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  const handleConfirm = () => {
    onConfirm?.();
    onOpenChange?.(false);
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                variant === "danger" && "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                variant === "warning" && "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
                variant === "info" && "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                variant === "question" && "bg-muted text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </div>
          {description && (
            <AlertDialogDescription className="ml-13">
              {description}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel onClick={handleCancel} disabled={loading}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={disabled || loading}
            className={cn(loading && "opacity-50")}
          >
            {loading ? "Loading..." : confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default ConfirmationDialog;
