"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/primitives/checkbox";
import { FormDescription, FormItem, FormMessage } from "@/primitives/form";
import { Label } from "@/primitives/label";

export interface CheckboxFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  // Controlled props
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function CheckboxField<T extends FieldValues>({
  name,
  label,
  description,
  disabled = false,
  required = false,
  className,
  checked,
  onCheckedChange,
}: CheckboxFieldProps<T>) {
  const { control } = useFormContext<T>();
  const isControlled = checked !== undefined && onCheckedChange !== undefined;

  if (isControlled) {
    return (
      <FormItem className={cn(className)}>
        <div className="flex items-center gap-2">
          <Checkbox
            id={name}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
          />
          {label && (
            <Label
              htmlFor={name}
              className={cn(
                "font-medium",
                disabled && "cursor-not-allowed opacity-50",
                required && "after:content-['*'] after:text-destructive after:ml-1"
              )}
            >
              {label}
            </Label>
          )}
        </div>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    );
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={cn(className)}>
          <div className="flex items-center gap-2">
            <Checkbox
              id={name}
              checked={!!field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
              aria-invalid={!!error}
            />
            {label && (
              <Label
                htmlFor={name}
                className={cn(
                  "font-medium",
                  disabled && "cursor-not-allowed opacity-50",
                  error && "text-destructive"
                )}
              >
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </Label>
            )}
          </div>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CheckboxField;
