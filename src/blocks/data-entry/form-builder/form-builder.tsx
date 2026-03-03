"use client";

import * as React from "react";
import { type FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormSection, type ValidationStatus } from "@/blocks/data-entry/form-section";
import { StickyActions } from "@/blocks/data-entry/sticky-actions";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Spinner } from "@/primitives/spinner";
import { FieldRenderer } from "./form-field-renderer";
import type { FormBuilderProps, FormSectionConfig } from "./types";

export function FormBuilder<T extends FieldValues>({
  id,
  sections,
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
  stickyFooter = true,
  submitButton,
  header,
  footer,
  error,
  successMessage,
  renderField,
  className,
}: FormBuilderProps<T>) {
  const form = useForm<T>({
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { handleSubmit, watch, formState, reset } = form;
  const { isDirty, isValid, errors, dirtyFields } = formState;

  // Auto-save functionality
  React.useEffect(() => {
    if (!onAutoSave || !isDirty) return;

    const timer = setTimeout(() => {
      const values = watch();
      onAutoSave(values);
    }, autoSaveDelay);

    return () => clearTimeout(timer);
  }, [onAutoSave, autoSaveDelay, isDirty, watch]);

  // Track open sections
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({});

  const handleSectionOpenChange = (sectionId: string, open: boolean) => {
    setOpenSections((prev) => ({ ...prev, [sectionId]: open }));
  };

  // Filter sections by conditional rendering
  const visibleSections = sections.filter((section) => {
    if (!section.when) return true;
    const values = watch();
    return section.when(values);
  });

  // Calculate validation status per section
  const getSectionValidationStatus = (section: FormSectionConfig<T>): ValidationStatus => {
    const sectionFields = section.fields.map((f) => f.name);
    const sectionErrors = sectionFields.filter((field) => errors[field as string]);

    if (sectionErrors.length > 0) return "invalid";
    if (sectionFields.every((field) => dirtyFields[field as keyof typeof dirtyFields]))
      return "valid";
    return section.validationStatus || "none";
  };

  const actionsContent = (
    <div className="flex items-center gap-2">
      {showCancel && (
        <Button
          type="button"
          variant="outline"
          onClick={onCancel || (() => reset(defaultValues))}
          disabled={isLoading}
        >
          {cancelLabel}
        </Button>
      )}
      {submitButton || (
        <Button type="submit" disabled={isLoading || !isValid}>
          {isLoading && <Spinner className="mr-2 h-4 w-4" />}
          {submitLabel}
        </Button>
      )}
    </div>
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full space-y-6", className)} id={id}>
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

        {/* Sections */}
        <div className="space-y-6">
          {visibleSections.map((section) => {
            // Filter fields by conditional rendering
            const visibleFields = section.fields.filter((field) => {
              if (!field.when) return true;
              const values = watch();
              return field.when(values);
            });

            if (visibleFields.length === 0) return null;

            const sectionError = section.fields
              .map((f) => errors[f.name as string]?.message as string)
              .filter(Boolean)[0];

            return (
              <FormSection
                key={section.id}
                title={section.title}
                description={section.description}
                validationStatus={getSectionValidationStatus(section)}
                collapsible={section.collapsible}
                defaultOpen={section.defaultOpen}
                open={openSections[section.id]}
                onOpenChange={(open) => handleSectionOpenChange(section.id, open)}
                actions={section.actions}
                error={sectionError}
              >
                <div className="space-y-4">
                  {visibleFields.map((fieldConfig) => (
                    <div key={fieldConfig.name}>
                      {renderField ? (
                        renderField(fieldConfig, form)
                      ) : (
                        <FieldRenderer
                          {...fieldConfig}
                          render={
                            fieldConfig.render ? () => fieldConfig.render?.(form, form) : undefined
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              </FormSection>
            );
          })}
        </div>

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
          <div className="flex justify-end gap-2 pt-4 border-t">{actionsContent}</div>
        )}
      </form>
    </FormProvider>
  );
}

export default FormBuilder;
