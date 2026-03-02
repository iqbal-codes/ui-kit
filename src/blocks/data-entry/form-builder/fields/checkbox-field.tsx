"use client";

import * as React from "react";
import { useFormContext, Controller, type FieldPath, type FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/primitives/checkbox";
import { Label } from "@/primitives/label";
import {
  FormItem,
  FormDescription,
  FormMessage,
} from "@/primitives/form";

export interface CheckboxFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export function CheckboxField<T extends FieldValues>({
  name,
  label,
  description,
  disabled = false,
  required = false,
  className,
}: CheckboxFieldProps<T>) {
  const { control } = useFormContext<T>();

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
