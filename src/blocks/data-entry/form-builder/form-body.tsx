"use client";

import React from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { FormSection, type ValidationStatus } from "@/blocks/data-entry/form-section";
import { cn } from "@/lib/utils";
import { FieldRenderer } from "./form-field-renderer";
import type { FieldConfig, FormBuilderProps, FormSectionConfig } from "./types";

/**
 * FormBody - Rendering component for form sections and fields
 *
 * This component handles all the rendering logic (filtering, validation status, etc.)
 * without creating its own form state. Use this when you need to render form fields
 * with an existing form instance (e.g., in FormWizard).
 *
 * For standalone forms with their own form state, use FormBuilder instead.
 */
export interface FormBodyProps<T extends FieldValues = FieldValues> {
  /** React Hook Form instance */
  form: UseFormReturn<T>;
  /** Form sections configuration */
  sections: FormSectionConfig<T>[];
  /** Custom field renderer (optional) */
  renderField?: (config: FieldConfig<T>, form: UseFormReturn<T>) => React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function FormBody<T extends FieldValues>({
  form,
  sections,
  renderField,
  className,
}: FormBodyProps<T>) {
  const { watch, formState } = form;
  const { errors, dirtyFields } = formState;

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

  return (
    <div className={cn("space-y-6", className)}>
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
  );
}

export default FormBody;
