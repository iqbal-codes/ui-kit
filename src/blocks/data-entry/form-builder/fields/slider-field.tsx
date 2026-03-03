"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { Input } from "@/primitives/input";
import { Slider } from "@/primitives/slider";

export interface SliderFieldProps<T extends FieldValues = FieldValues> {
  /** Field name for react-hook-form registration */
  name: FieldPath<T>;
  /** Field label displayed above input */
  label?: string;
  /** Helper text displayed below input */
  description?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
  /** Required field indicator */
  required?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Minimum value (default: 0) */
  min?: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Step increment (default: 1) */
  step?: number;
  /** Show value input field */
  showInput?: boolean;
  /** Show value label */
  showValue?: boolean;
  /** Value suffix (e.g., "%", "kg", "px") */
  suffix?: string;
  /** Orientation of the slider */
  orientation?: "horizontal" | "vertical";
  /** Invert the slider direction */
  inverted?: boolean;
}

export function SliderField<T extends FieldValues>({
  name,
  label,
  description,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  min = 0,
  max = 100,
  step = 1,
  showInput = false,
  showValue = true,
  suffix,
  orientation = "horizontal",
  inverted = false,
}: SliderFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [localValue, setLocalValue] = React.useState<number>(min);

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
          // Sync local value with field value
          React.useEffect(() => {
            const value = field.value !== undefined ? Number(field.value) : min;
            setLocalValue(Math.min(Math.max(value, min), max));
          }, [field.value]);

          const handleSliderChange = (values: number[]) => {
            const newValue = values[0];
            setLocalValue(newValue);
            field.onChange(newValue);
          };

          const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseFloat(e.target.value);
            if (Number.isNaN(value)) {
              setLocalValue(min);
              field.onChange(min);
            } else {
              const clampedValue = Math.min(Math.max(value, min), max);
              setLocalValue(clampedValue);
              field.onChange(clampedValue);
            }
          };

          const valueLabel = `${localValue}${suffix || ""}`;

          return (
            <FormControl>
              <div
                className={cn("flex items-center gap-4", orientation === "vertical" && "flex-col")}
              >
                <div className={cn("flex-1", orientation === "vertical" && "h-48 w-full")}>
                  <Slider
                    value={[localValue]}
                    onValueChange={handleSliderChange}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled || readOnly}
                    inverted={inverted}
                    orientation={orientation}
                    aria-invalid={!!error}
                    aria-label={label}
                    className={cn(error && "ring-destructive rounded")}
                  />
                </div>

                {showValue && (
                  <div
                    className={cn(
                      "flex items-center gap-2",
                      orientation === "vertical" && "w-full justify-between"
                    )}
                  >
                    {showInput ? (
                      <Input
                        type="number"
                        value={localValue}
                        onChange={handleInputChange}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled || readOnly}
                        className="w-20"
                        aria-label={`${label} value`}
                      />
                    ) : (
                      <span className="text-sm font-medium tabular-nums min-w-[3rem] text-center">
                        {valueLabel}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </FormControl>
          );
        }}
      />
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />

      {/* Min/Max labels */}
      <div
        className={cn(
          "flex justify-between text-xs text-muted-foreground mt-1",
          orientation === "vertical" && "flex-row"
        )}
      >
        <span>
          {min}
          {suffix}
        </span>
        <span>
          {max}
          {suffix}
        </span>
      </div>
    </FormItem>
  );
}

export default SliderField;
