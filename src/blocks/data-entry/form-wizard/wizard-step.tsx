"use client";

import type * as React from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { FormBody } from "@/blocks/data-entry/form-builder/form-body";
import type { FieldConfig, FormSectionConfig } from "@/blocks/data-entry/form-builder/types";

/**
 * WizardStep - Renders a single step's form sections
 *
 * This component wraps FormBody to render all sections and fields
 * for a specific step in the wizard.
 */
export interface WizardStepProps<T extends FieldValues = FieldValues> {
  /** Step sections configuration */
  sections: FormSectionConfig<T>[];
  /** React Hook Form instance */
  form: UseFormReturn<T>;
  /** Custom field renderer (optional) */
  renderField?: (config: FieldConfig<T>, form: UseFormReturn<T>) => React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * WizardStep Component
 */
export function WizardStep<T extends FieldValues>({
  sections,
  form,
  renderField,
  className,
}: WizardStepProps<T>) {
  return (
    <FormBody form={form} sections={sections} renderField={renderField} className={className} />
  );
}

export default WizardStep;
