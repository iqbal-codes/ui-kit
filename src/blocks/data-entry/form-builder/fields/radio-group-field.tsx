"use client";

import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { Label } from "@/primitives/label";
import { RadioGroup, RadioGroupItem } from "@/primitives/radio-group";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  options?: RadioOption[];
  disabled?: boolean;
  required?: boolean;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function RadioGroupField<T extends FieldValues>({
  name,
  label,
  description,
  options = [],
  disabled = false,
  required = false,
  orientation = "vertical",
  className,
}: RadioGroupFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={cn(className)}>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              disabled={disabled}
              orientation={orientation}
              className={cn(orientation === "horizontal" && "flex flex-wrap gap-4")}
              aria-invalid={!!error}
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  className={cn("flex items-start gap-2", orientation === "vertical" && "flex-col")}
                >
                  <RadioGroupItem
                    id={`${name}-${option.value}`}
                    value={option.value}
                    disabled={disabled || option.disabled}
                  />
                  <div className="space-y-1">
                    <Label
                      htmlFor={`${name}-${option.value}`}
                      className={cn(
                        "font-medium",
                        (disabled || option.disabled) && "cursor-not-allowed opacity-50"
                      )}
                    >
                      {option.label}
                    </Label>
                    {option.description && (
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default RadioGroupField;
