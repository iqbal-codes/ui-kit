import { cn } from "@/lib/utils";
import { Toaster } from "@/primitives/sonner";

export interface ToastManagerProps {
  /** Position of the toaster */
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  /** Theme */
  theme?: "light" | "dark" | "system";
  /** Additional CSS classes */
  className?: string;
}

/**
 * ToastManager - Container for displaying toast notifications
 *
 * Use with sonner's toast() function:
 * import { toast } from 'sonner'
 * toast.success('Saved!')
 * toast.error('Failed')
 */
export function ToastManager({
  position = "bottom-right",
  theme = "system",
  className,
}: ToastManagerProps) {
  return <Toaster position={position} theme={theme} className={cn(className)} />;
}

export default ToastManager;
