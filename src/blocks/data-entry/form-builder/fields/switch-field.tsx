"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormDescription, FormItem, FormMessage } from "@/primitives/form";
import { Label } from "@/primitives/label";
import { Switch } from "@/primitives/switch";

export interface SwitchFieldProps<T extends FieldValues = FieldValues> {
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

export function SwitchField<T extends FieldValues>({
  name,
  label,
  description,
  disabled = false,
  required = false,
  className,
  checked,
  onCheckedChange,
}: SwitchFieldProps<T>) {
  const { control } = useFormContext<T>();
  const isControlled = checked !== undefined && onCheckedChange !== undefined;

  if (isControlled) {
    return (
      <FormItem className={cn(className)}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Switch
              id={name}
              checked={checked}
              onCheckedChange={onCheckedChange}
              disabled={disabled}
            />
            {label && (
              <Label
                htmlFor={name}
                className={cn("font-medium", disabled && "cursor-not-allowed opacity-50")}
              >
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </Label>
            )}
          </div>
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
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Switch
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
          </div>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SwitchField;
