"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/primitives/input-group";

export interface PercentageFieldProps<T extends FieldValues = FieldValues> {
  /** Field name for react-hook-form registration */
  name: FieldPath<T>;
  /** Field label displayed above input */
  label?: string;
  /** Helper text displayed below input */
  description?: string;
  /** Placeholder text when input is empty */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
  /** Required field indicator */
  required?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Minimum value allowed (default: 0) */
  minValue?: number;
  /** Maximum value allowed (default: 100) */
  maxValue?: number;
  /** Number of decimal places */
  decimalPlaces?: number;
  /** Step increment for arrow keys */
  step?: number;
}

export function PercentageField<T extends FieldValues>({
  name,
  label,
  description,
  placeholder = "0",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  minValue = 0,
  maxValue = 100,
  decimalPlaces = 0,
  step = 1,
}: PercentageFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [displayValue, setDisplayValue] = React.useState("");

  // Format percentage value
  const formatPercentage = React.useCallback(
    (value: string): string => {
      if (!value) return "";

      const number = parseFloat(value);
      if (Number.isNaN(number)) return "";

      return number.toFixed(decimalPlaces);
    },
    [decimalPlaces]
  );

  return (
    <FormItem className={cn(className)}>
      {label && (
        <FormLabel htmlFor={name}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          // Update display value when field value changes externally
          React.useEffect(() => {
            if (field.value !== undefined && field.value !== null) {
              const numValue =
                typeof field.value === "number" ? field.value : parseFloat(field.value);
              if (!Number.isNaN(numValue)) {
                setDisplayValue(formatPercentage(numValue.toString()));
              }
            } else {
              setDisplayValue("");
            }
          }, [field.value]);

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;

            // Allow empty string
            if (inputValue === "") {
              setDisplayValue("");
              field.onChange("");
              return;
            }

            // Validate numeric input
            const validInput = /^-?\d*\.?\d*$/.test(inputValue);
            if (!validInput) return;

            const number = parseFloat(inputValue);

            // Validate min/max
            if (!Number.isNaN(number)) {
              if (number < minValue) {
                return;
              }
              if (number > maxValue) {
                return;
              }
            }

            setDisplayValue(inputValue);
            field.onChange(number);
          };

          const handleBlur = () => {
            if (displayValue) {
              const number = parseFloat(displayValue);
              if (!Number.isNaN(number)) {
                setDisplayValue(formatPercentage(displayValue));
              }
            }
          };

          return (
            <FormControl>
              <InputGroup data-invalid={!!error || undefined}>
                <InputGroupInput
                  id={name}
                  type="text"
                  inputMode="decimal"
                  placeholder={placeholder}
                  value={displayValue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={disabled}
                  readOnly={readOnly}
                  aria-invalid={!!error}
                />
                <InputGroupAddon align="inline-end">%</InputGroupAddon>
              </InputGroup>
            </FormControl>
          );
        }}
      />
      {description && (
        <FormDescription>
          {description}{" "}
          {minValue !== 0 || maxValue !== 100 ? (
            <span className="text-xs">
              ({minValue}% - {maxValue}%)
            </span>
          ) : null}
        </FormDescription>
      )}
      <FormMessage />
    </FormItem>
  );
}

export default PercentageField;
