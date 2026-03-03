"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { Textarea } from "@/primitives/textarea";

export interface TextareaFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  className?: string;
  // Controlled props
  value?: any;
  onChange?: (value: any) => void;
}

export function TextareaField<T extends FieldValues>({
  name,
  label,
  description,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  rows = 4,
  className,
  value,
  onChange,
}: TextareaFieldProps<T>) {
  const { control } = useFormContext<T>();
  const isControlled = value !== undefined && onChange !== undefined;

  if (isControlled) {
    return (
      <FormItem className={cn(className)}>
        {label && (
          <FormLabel htmlFor={name}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </FormLabel>
        )}
        <FormControl>
          <Textarea
            id={name}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            rows={rows}
          />
        </FormControl>
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
          {label && (
            <FormLabel htmlFor={name}>
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Textarea
              {...field}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
              rows={rows}
              aria-invalid={!!error}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextareaField;
