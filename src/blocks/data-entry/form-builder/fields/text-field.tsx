"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { Input } from "@/primitives/input";

export interface TextFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  className?: string;
  // Controlled props (when used without internal Controller)
  value?: any;
  onChange?: (value: any) => void;
}

export function TextField<T extends FieldValues>({
  name,
  label,
  description,
  placeholder,
  type = "text",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  value,
  onChange,
}: TextFieldProps<T>) {
  const { control } = useFormContext<T>();

  // Check if component is controlled (value/onChange provided)
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
          <Input
            id={name}
            type={type}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
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
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
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

export default TextField;
