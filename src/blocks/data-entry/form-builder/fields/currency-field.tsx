"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/primitives/input-group";

export interface CurrencyFieldProps<T extends FieldValues = FieldValues> {
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
  /** Currency symbol (default: "$") */
  currencySymbol?: string;
  /** Position of currency symbol */
  currencyPosition?: "prefix" | "suffix";
  /** Allow negative values */
  allowNegative?: boolean;
  /** Number of decimal places */
  decimalPlaces?: number;
  /** Minimum value allowed */
  minValue?: number;
  /** Maximum value allowed */
  maxValue?: number;
  // Controlled props
  value?: any;
  onChange?: (value: any) => void;
}

export function CurrencyField<T extends FieldValues>({
  name,
  label,
  description,
  placeholder = "0.00",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  currencySymbol = "$",
  currencyPosition = "prefix",
  allowNegative = false,
  decimalPlaces = 2,
  minValue,
  maxValue,
  value,
  onChange,
}: CurrencyFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [displayValue, setDisplayValue] = React.useState("");
  const isControlled = value !== undefined && onChange !== undefined;

  if (isControlled) {
    // Update display value when value changes externally
    React.useEffect(() => {
      if (value !== undefined && value !== null) {
        const numValue = typeof value === "number" ? value : parseFloat(value);
        if (!Number.isNaN(numValue)) {
          setDisplayValue(formatCurrency(numValue.toString()));
        }
      } else {
        setDisplayValue("");
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (inputValue === "") {
        setDisplayValue("");
        onChange("");
        return;
      }

      const rawValue = parseValue(inputValue);
      const number = parseFloat(rawValue);

      if (!allowNegative && number < 0) {
        return;
      }

      if (minValue !== undefined && number < minValue) {
        return;
      }
      if (maxValue !== undefined && number > maxValue) {
        return;
      }

      const formatted = formatCurrency(rawValue);
      setDisplayValue(formatted);
      onChange(number);
    };

    const handleBlur = () => {
      if (displayValue) {
        const number = parseFloat(parseValue(displayValue));
        if (!Number.isNaN(number)) {
          setDisplayValue(formatCurrency(number.toString()));
        }
      }
    };

    return (
      <FormItem className={cn(className)}>
        {label && (
          <FormLabel htmlFor={name}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </FormLabel>
        )}
        <FormControl>
          <InputGroup>
            {currencyPosition === "prefix" && (
              <InputGroupAddon align="inline-start">{currencySymbol}</InputGroupAddon>
            )}
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
            />
            {currencyPosition === "suffix" && (
              <InputGroupAddon align="inline-end">{currencySymbol}</InputGroupAddon>
            )}
          </InputGroup>
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    );
  }

  // Format number with thousand separators
  const formatCurrency = React.useCallback(
    (value: string): string => {
      if (!value) return "";

      // Remove non-numeric characters except minus and decimal
      const numericValue = value.replace(/[^0-9.-]/g, "");
      const number = parseFloat(numericValue);

      if (Number.isNaN(number)) return "";

      return number.toLocaleString("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      });
    },
    [decimalPlaces]
  );

  // Parse display value to raw number
  const parseValue = React.useCallback((displayValue: string): string => {
    return displayValue.replace(/,/g, "");
  }, []);

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
                setDisplayValue(formatCurrency(numValue.toString()));
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

            // Parse to raw number
            const rawValue = parseValue(inputValue);
            const number = parseFloat(rawValue);

            // Validate negative
            if (!allowNegative && number < 0) {
              return;
            }

            // Validate min/max
            if (minValue !== undefined && number < minValue) {
              return;
            }
            if (maxValue !== undefined && number > maxValue) {
              return;
            }

            // Format with thousand separators
            const formatted = formatCurrency(rawValue);
            setDisplayValue(formatted);

            // Store raw numeric value
            field.onChange(number);
          };

          const handleBlur = () => {
            if (displayValue) {
              const number = parseFloat(parseValue(displayValue));
              if (!Number.isNaN(number)) {
                setDisplayValue(formatCurrency(number.toString()));
              }
            }
          };

          return (
            <FormControl>
              <InputGroup data-invalid={!!error || undefined}>
                {currencyPosition === "prefix" && (
                  <InputGroupAddon align="inline-start">{currencySymbol}</InputGroupAddon>
                )}
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
                {currencyPosition === "suffix" && (
                  <InputGroupAddon align="inline-end">{currencySymbol}</InputGroupAddon>
                )}
              </InputGroup>
            </FormControl>
          );
        }}
      />
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}

export default CurrencyField;
