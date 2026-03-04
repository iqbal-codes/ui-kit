"use client";

import { CheckIcon } from "lucide-react";
import React from "react";
import type { FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button, Progress } from "@/primitives";
import type { StepStatus, WizardStepConfig } from "./types";

/**
 * WizardStepper - Progress indicator for multi-step forms
 *
 * Displays step status (pending, current, completed) and allows navigation
 * when free navigation mode is enabled.
 */
export interface WizardStepperProps<T extends FieldValues = FieldValues> {
  /** Steps configuration */
  steps: WizardStepConfig<T>[];
  /** Current active step index */
  currentStep: number;
  /** Completed step indices */
  completedSteps: number[];
  /** Stepper orientation */
  orientation?: "horizontal";
  /** Show step descriptions */
  showDescriptions?: boolean;
  /** Show step icons */
  showIcons?: boolean;
  /** Navigation mode - allows clicking completed steps */
  allowNavigation?: boolean;
  /** Callback when step is clicked */
  onStepClick?: (stepIndex: number) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Get step status based on current and completed steps
 */
function getStepStatus(index: number, currentStep: number, completedSteps: number[]): StepStatus {
  if (index === currentStep) return "current";
  if (completedSteps.includes(index)) return "completed";
  return "pending";
}

/**
 * Individual step indicator component
 */
interface StepIndicatorProps {
  step: WizardStepConfig<any>;
  index: number;
  status: StepStatus;
  showIcon: boolean;
  isClickable: boolean;
  onClick: () => void;
}

function StepIndicator({
  step,
  index,
  status,
  showIcon,
  isClickable,
  onClick,
}: StepIndicatorProps) {
  return (
    <Button
      type="button"
      className={cn(
        "relative flex items-center rounded-full opacity-100!",
        isClickable && "cursor-pointer",
        !isClickable && "cursor-default"
      )}
      variant={status === "pending" ? "outline" : "default"}
      size="icon-lg"
      onClick={isClickable ? onClick : undefined}
      disabled={!isClickable}
      tabIndex={isClickable ? 0 : -1}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      aria-current={status === "current" ? "step" : undefined}
      aria-disabled={!isClickable}
    >
      {status === "completed" ? (
        <CheckIcon className="h-5 w-5" />
      ) : showIcon && step.icon ? (
        step.icon
      ) : (
        <span>{index + 1}</span>
      )}
    </Button>
  );
}

/**
 * WizardStepper Component
 */
export function WizardStepper<T extends FieldValues = FieldValues>({
  steps,
  currentStep,
  completedSteps,
  showIcons = true,
  allowNavigation = false,
  onStepClick,
  className,
}: WizardStepperProps<T>) {
  return (
    <nav
      aria-label="Progress"
      className={cn("relative w-full flex justify-between items-center", className)}
    >
      <Progress
        className="absolute w-full h-0.5"
        value={(currentStep / (steps.length - 1)) * 100}
      />

      {steps.map((step, index) => {
        const status = getStepStatus(index, currentStep, completedSteps);
        const isClickable = allowNavigation && (status === "completed" || status === "current");

        return (
          <StepIndicator
            key={step.id}
            step={step}
            index={index}
            status={status}
            showIcon={showIcons}
            isClickable={isClickable}
            onClick={() => onStepClick?.(index)}
          />
        );
      })}
    </nav>
  );
}

export default WizardStepper;
