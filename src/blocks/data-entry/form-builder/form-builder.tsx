"use client";

import * as React from "react";
import { type FieldValues, FormProvider, useForm } from "react-hook-form";
import { StickyActions } from "@/blocks/data-entry/sticky-actions";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Spinner } from "@/primitives/spinner";
import { FormBody } from "./form-body";
import type { FormBuilderProps } from "./types";

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
  stickyFooter = false,
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
  const { isDirty, isValid } = formState;

  // Auto-save functionality
  React.useEffect(() => {
    if (!onAutoSave || !isDirty) return;

    const timer = setTimeout(() => {
      const values = watch();
      onAutoSave(values);
    }, autoSaveDelay);

    return () => clearTimeout(timer);
  }, [onAutoSave, autoSaveDelay, isDirty, watch]);

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

        {/* Form Body - renders sections and fields */}
        <FormBody form={form} sections={sections} renderField={renderField} />

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
