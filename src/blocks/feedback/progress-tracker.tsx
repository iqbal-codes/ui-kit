import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressStep {
  /** Unique identifier */
  id: string;
  /** Step title */
  title: string;
  /** Optional description */
  description?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export interface ProgressTrackerProps {
  /** Array of steps */
  steps: ProgressStep[];
  /** Current active step index (0-based) */
  currentStep: number;
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Show descriptions */
  showDescriptions?: boolean;
  /** Clickable steps */
  clickable?: boolean;
  className?: string;
}

export function ProgressTracker({
  steps,
  currentStep,
  orientation = "horizontal",
  showDescriptions = true,
  clickable = false,
  className,
}: ProgressTrackerProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div className={cn("flex", isHorizontal ? "flex-row items-center" : "flex-col", className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isClickable = clickable && step.onClick;

        return (
          <React.Fragment key={step.id}>
            {/* Step connector */}
            {index > 0 && (
              <div
                className={cn(
                  "flex-1",
                  isHorizontal ? "h-0.5 mx-2 bg-muted" : "w-0.5 my-2 ml-[11px] bg-muted"
                )}
              >
                <div
                  className={cn(
                    "h-full bg-primary transition-all",
                    isCompleted && "bg-primary",
                    !isCompleted && "bg-transparent"
                  )}
                />
              </div>
            )}

            {/* Step content */}
            <div className={cn("flex items-center gap-3", !isHorizontal && "min-h-[60px]")}>
              {/* Step indicator */}
              <div
                {...(isClickable
                  ? {
                      role: "button",
                      onClick: step.onClick,
                      onKeyDown: (e: React.KeyboardEvent) => e.key === "Enter" && step.onClick?.(),
                      tabIndex: 0,
                    }
                  : {})}
                className={cn(
                  "relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-medium transition-colors",
                  isCompleted && "border-primary bg-primary text-primary-foreground",
                  isCurrent && "border-primary text-primary",
                  !isCompleted && !isCurrent && "border-muted-foreground text-muted-foreground",
                  isClickable && "cursor-pointer hover:border-primary"
                )}
              >
                {isCompleted ? (
                  <CheckIcon className="h-3 w-3" />
                ) : isCurrent ? (
                  <ChevronRightIcon className="h-3 w-3" />
                ) : (
                  <CircleIcon className="h-2 w-2" />
                )}
              </div>

              {/* Step text */}
              {(showDescriptions || isCurrent) && (
                <div className={cn("flex flex-col", isHorizontal && "min-w-0")}>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isCurrent && "text-foreground",
                      !isCurrent && "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </span>
                  {showDescriptions && step.description && (
                    <span className="text-xs text-muted-foreground">{step.description}</span>
                  )}
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ProgressTracker;
