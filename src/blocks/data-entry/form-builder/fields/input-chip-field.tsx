"use client";

import { X } from "lucide-react";
import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { Input } from "@/primitives/input";

export interface InputChipFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  className?: string;
  /** Maximum number of chips allowed */
  maxChips?: number;
  /** Allow duplicate chips */
  allowDuplicates?: boolean;
  /** Transform chip value (e.g., lowercase, trim) */
  transform?: (value: string) => string;
  /** Validation function for individual chips */
  validateChip?: (value: string) => boolean | string;
}

export function InputChipField<T extends FieldValues>({
  name,
  label,
  description,
  placeholder = "Type and press Enter to add",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  maxChips = Infinity,
  allowDuplicates = false,
  transform = (v) => v.trim(),
  validateChip,
}: InputChipFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAddChip = React.useCallback(
    (value: string, currentValue: string[]) => {
      const transformed = transform(value);

      if (!transformed) return;

      // Validate chip
      if (validateChip) {
        const validation = validateChip(transformed);
        if (validation === false || typeof validation === "string") {
          return;
        }
      }

      // Check duplicates
      if (!allowDuplicates && currentValue.includes(transformed)) {
        return;
      }

      // Check max
      if (currentValue.length >= maxChips) {
        return;
      }

      // Add chip
      const newValue = [...currentValue, transformed];
      return newValue;
    },
    [allowDuplicates, maxChips, transform, validateChip]
  );

  const handleKeyDown = React.useCallback(
    (
      e: React.KeyboardEvent<HTMLInputElement>,
      currentValue: string[],
      onChange: (value: string[]) => void
    ) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        const newValue = handleAddChip(inputValue, currentValue);
        if (newValue) {
          onChange(newValue);
          setInputValue("");
        }
      } else if (e.key === "Backspace" && inputValue === "" && currentValue.length > 0) {
        // Remove last chip when backspace is pressed on empty input
        const newValue = [...currentValue];
        newValue.pop();
        onChange(newValue);
      }
    },
    [inputValue, handleAddChip]
  );

  const handleRemoveChip = React.useCallback(
    (index: number, currentValue: string[], onChange: (value: string[]) => void) => {
      const newValue = [...currentValue];
      newValue.splice(index, 1);
      onChange(newValue);
      inputRef.current?.focus();
    },
    []
  );

  const handleBlur = React.useCallback(
    (currentValue: string[], onChange: (value: string[]) => void) => {
      // Add chip on blur if there's input
      if (inputValue.trim()) {
        const newValue = handleAddChip(inputValue, currentValue);
        if (newValue) {
          onChange(newValue);
        }
        setInputValue("");
      }
    },
    [inputValue, handleAddChip]
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[] as unknown as T[keyof T]}
      render={({ field, fieldState: { error } }) => {
        const currentValue = Array.isArray(field.value) ? field.value : [];
        const isReadOnly = readOnly || disabled;
        const canAdd = currentValue.length < maxChips;

        return (
          <FormItem className={cn("space-y-2", className)}>
            {label && (
              <FormLabel htmlFor={name}>
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </FormLabel>
            )}
            <FormControl>
              <div
                className={cn(
                  "flex flex-wrap gap-2 p-2 min-h-[42px] rounded-md border bg-transparent",
                  "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
                  error && "border-destructive focus-within:border-destructive",
                  isReadOnly && "opacity-50 pointer-events-none",
                  className
                )}
              >
                {/* Render chips */}
                {currentValue.map((chip, index) => (
                  <div
                    key={`${chip}-${index}`}
                    className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                  >
                    <span className="max-w-[200px] truncate">{chip}</span>
                    {!isReadOnly && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                        onClick={() => handleRemoveChip(index, currentValue, field.onChange)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}

                {/* Input field */}
                {canAdd && !isReadOnly && (
                  <Input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, currentValue, field.onChange)}
                    onBlur={() => handleBlur(currentValue, field.onChange)}
                    placeholder={currentValue.length === 0 ? placeholder : ""}
                    className="flex-1 min-w-[120px] border-0 shadow-none focus-visible:ring-0 px-2 py-1 h-auto"
                  />
                )}

                {/* Empty state */}
                {currentValue.length === 0 && isReadOnly && (
                  <span className="text-muted-foreground text-sm">No chips added</span>
                )}
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default InputChipField;
