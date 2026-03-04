"use client";

import * as React from "react";
import { type FieldValues, FormProvider, useForm } from "react-hook-form";
import { StickyActions } from "@/blocks/data-entry/sticky-actions";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Spinner } from "@/primitives/spinner";
import type { FormWizardProps, WizardNavigationState } from "./types";
import { WizardStep } from "./wizard-step";
import { WizardStepper } from "./wizard-stepper";

/**
 * FormWizard - Multi-step form wizard component
 *
 * Provides a guided form experience with:
 * - Step-by-step navigation with validation
 * - Progress stepper (horizontal)
 * - Free or sequential navigation modes
 * - Auto-save support
 * - Single submit at the end
 *
 * @example
 * <FormWizard
 *   steps={wizardSteps}
 *   defaultValues={{ firstName: "", lastName: "" }}
 *   onSubmit={(data) => handleSubmit(data)}
 *   stepperOrientation="horizontal"
 *   navigationMode="free"
 * />
 */
export function FormWizard<T extends FieldValues>({
  id,
  steps,
  defaultValues,
  onSubmit,
  onAutoSave,
  autoSaveDelay = 1000,
  isLoading = false,
  submitLabel = "Submit",
  cancelLabel = "Cancel",
  showCancel = false,
  onCancel,
  showDirtyWarning = false,
  stickyFooter = false,
  submitButton,
  header,
  footer,
  error,
  successMessage,
  renderField,
  stepperOrientation = "horizontal",
  navigationMode = "free",
  showStepDescriptions = false,
  showStepIcons = true,
  onStepChange,
  className,
}: FormWizardProps<T>) {
  const form = useForm<T>({
    defaultValues: defaultValues as any,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { handleSubmit, watch, formState, reset, trigger } = form;
  const { isDirty, isValid } = formState;

  // Current step state
  const [currentStep, setCurrentStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  // Filter visible steps by conditional rendering
  const visibleSteps = React.useMemo(() => {
    return steps.filter((step) => {
      if (!step.when) return true;
      const values = watch();
      return step.when(values);
    });
  }, [steps, watch]);

  // Auto-save functionality
  React.useEffect(() => {
    if (!onAutoSave || !isDirty) return;

    const timer = setTimeout(() => {
      const values = watch();
      onAutoSave(values);
    }, autoSaveDelay);

    return () => clearTimeout(timer);
  }, [onAutoSave, autoSaveDelay, isDirty, watch]);

  // Notify on step change
  React.useEffect(() => {
    if (onStepChange) {
      const step = visibleSteps[currentStep];
      if (step) {
        onStepChange(currentStep, step.id);
      }
    }
  }, [currentStep, visibleSteps, onStepChange]);

  // Calculate navigation state
  const navigationState: WizardNavigationState = React.useMemo(() => {
    const totalSteps = visibleSteps.length;
    const isFirst = currentStep === 0;
    const isLast = currentStep === totalSteps - 1;

    return {
      currentStep,
      totalSteps,
      isFirst,
      isLast,
      canGoBack: !isFirst,
      canGoNext: !isLast,
      completedSteps: [...completedSteps],
    };
  }, [currentStep, visibleSteps.length, completedSteps]);

  // Validate current step
  const validateCurrentStep = async (): Promise<boolean> => {
    const currentStepConfig = visibleSteps[currentStep];
    if (!currentStepConfig?.enableValidation) return true;
    if (!currentStepConfig.sections) return true;

    // Collect all field names from current step's sections
    const fieldNames = currentStepConfig.sections.flatMap((section) =>
      section.fields.map((field) => field.name)
    );

    // Trigger validation for all fields in current step
    const isValid = await trigger(fieldNames as any);
    return isValid;
  };

  // Go to next step
  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return;

    if (currentStep < visibleSteps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      // Mark current step as completed if not already
      setCompletedSteps((prev) => (prev.includes(currentStep) ? prev : [...prev, currentStep]));
    }
  };

  // Go to previous step
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Jump to specific step (for free navigation mode)
  const handleStepClick = async (stepIndex: number) => {
    if (navigationMode === "sequential") return;

    // Allow navigation to current or completed steps
    if (stepIndex === currentStep || completedSteps.includes(stepIndex)) {
      setCurrentStep(stepIndex);
    }
  };

  // Handle final submit
  const handleFinalSubmit = async (data: T) => {
    // Validate all steps before final submit
    const allFieldNames = visibleSteps.flatMap((step) =>
      (step.sections || []).flatMap((section) => section.fields.map((field) => field.name))
    );

    const allValid = await trigger(allFieldNames as any);
    if (!allValid) return;

    await onSubmit(data);
  };

  // Reset form
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      reset(defaultValues as any);
      setCurrentStep(0);
      setCompletedSteps([]);
    }
  };

  // Render current step content
  const currentStepConfig = visibleSteps[currentStep];

  const actionsContent = (
    <div className="flex items-center gap-2">
      {showCancel && (
        <Button type="button" variant="outline" onClick={handleCancel} disabled={isLoading}>
          {cancelLabel}
        </Button>
      )}

      {!navigationState.isLast && (
        <Button type="button" onClick={handleNext} disabled={isLoading} className="min-w-[100px]">
          Next
        </Button>
      )}

      {navigationState.isLast &&
        (submitButton || (
          <Button type="submit" disabled={isLoading || !isValid}>
            {isLoading && <Spinner className="mr-2 h-4 w-4" />}
            {submitLabel}
          </Button>
        ))}

      {!navigationState.isFirst && !navigationState.isLast && (
        <Button type="button" variant="outline" onClick={handleBack} disabled={isLoading}>
          Back
        </Button>
      )}
    </div>
  );

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit((data) => handleFinalSubmit(data))}
        className={cn("w-2xl space-y-6", className)}
        id={id}
      >
        {/* Header */}
        {header}

        {/* Success/Error Messages */}
        {successMessage && (
          <div className="rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Stepper */}
        <WizardStepper
          steps={visibleSteps}
          currentStep={currentStep}
          completedSteps={completedSteps}
          orientation={stepperOrientation}
          showDescriptions={showStepDescriptions}
          showIcons={showStepIcons}
          allowNavigation={navigationMode === "free"}
          onStepClick={handleStepClick}
        />

        {/* Current Step Content */}
        {currentStepConfig &&
          (currentStepConfig.render ? (
            <div className="space-y-6">
              {currentStepConfig.render({
                form,
                values: watch() as T,
                navigation: navigationState,
              })}
            </div>
          ) : (
            <WizardStep
              sections={currentStepConfig.sections || []}
              form={form}
              renderField={renderField}
            />
          ))}

        {/* Footer */}
        {footer}

        {/* Sticky Actions */}
        {stickyFooter && (
          <StickyActions showDirtyWarning={showDirtyWarning} isDirty={isDirty}>
            {actionsContent}
          </StickyActions>
        )}

        {/* Non-sticky actions alternative */}
        {!stickyFooter && (
          <div className="flex justify-between gap-2 border-t pt-4">
            <div>{/* Spacer for alignment */}</div>
            {actionsContent}
          </div>
        )}
      </form>
    </FormProvider>
  );
}

export default FormWizard;
