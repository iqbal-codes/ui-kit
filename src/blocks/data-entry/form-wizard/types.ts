import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { FieldConfig, FormSectionConfig } from "@/blocks/data-entry/form-builder/types";

/**
 * Wizard step configuration
 */
export interface WizardStepConfig<T extends FieldValues = FieldValues> {
  /** Unique step identifier */
  id: string;
  /** Step title displayed in stepper */
  title: string;
  /** Step description (optional, shown in stepper tooltip or subtitle) */
  description?: string;
  /** Icon for the step (optional) */
  icon?: React.ReactNode;
  /** Form sections for this step */
  sections: FormSectionConfig<T>[];
  /** Enable validation before proceeding to next step */
  enableValidation?: boolean;
  /** Conditional rendering - hide step based on form values */
  when?: (values: Partial<T>) => boolean;
}

/**
 * Stepper orientation (horizontal only)
 */
export type StepperOrientation = "horizontal";

/**
 * Step status in the wizard
 */
export type StepStatus = "pending" | "current" | "completed";

/**
 * Navigation mode for the wizard
 */
export type NavigationMode = "sequential" | "free";

/**
 * FormWizard props
 */
export interface FormWizardProps<T extends FieldValues = FieldValues> {
  /** Wizard identifier */
  id?: string;
  /** Wizard steps configuration */
  steps: WizardStepConfig<T>[];
  /** Initial form values */
  defaultValues?: Partial<T>;
  /** Submit handler (called only on final step) */
  onSubmit: (data: T) => void | Promise<void>;
  /** Auto-save handler (optional) */
  onAutoSave?: (data: Partial<T>) => void | Promise<void>;
  /** Auto-save delay in ms */
  autoSaveDelay?: number;
  /** Loading state */
  isLoading?: boolean;
  /** Submit button text */
  submitLabel?: string;
  /** Cancel button text */
  cancelLabel?: string;
  /** Show cancel button */
  showCancel?: boolean;
  /** Cancel handler */
  onCancel?: () => void;
  /** Show unsaved changes warning */
  showDirtyWarning?: boolean;
  /** Sticky footer with actions */
  stickyFooter?: boolean;
  /** Custom submit button */
  submitButton?: React.ReactNode;
  /** Custom header content */
  header?: React.ReactNode;
  /** Custom footer content (before actions) */
  footer?: React.ReactNode;
  /** Form-level error */
  error?: string;
  /** Success message */
  successMessage?: string;
  /** Custom field renderer override */
  renderField?: (config: FieldConfig<T>, form: UseFormReturn<T>) => React.ReactNode;
  /** Stepper orientation (horizontal only) */
  stepperOrientation?: StepperOrientation;
  /** Navigation mode - sequential or free (jump to completed steps) */
  navigationMode?: NavigationMode;
  /** Show step descriptions in stepper */
  showStepDescriptions?: boolean;
  /** Show step icons in stepper */
  showStepIcons?: boolean;
  /** Callback when step changes */
  onStepChange?: (stepIndex: number, stepId: string) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Wizard navigation state
 */
export interface WizardNavigationState {
  /** Current step index */
  currentStep: number;
  /** Total number of steps */
  totalSteps: number;
  /** Is first step */
  isFirst: boolean;
  /** Is last step */
  isLast: boolean;
  /** Can go to previous step */
  canGoBack: boolean;
  /** Can proceed to next step */
  canGoNext: boolean;
  /** Completed step indices */
  completedSteps: number[];
}
