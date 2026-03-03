"use client";

import { StarIcon } from "lucide-react";
import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";

export interface RatingFieldProps<T extends FieldValues = FieldValues> {
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
  /** Maximum rating value (default: 5) */
  maxRating?: number;
  /** Show rating numbers below stars */
  showNumbers?: boolean;
  /** Custom labels for each rating level */
  labels?: string[];
  /** Size of the stars */
  size?: "sm" | "md" | "lg";
  /** Allow clearing the rating by clicking the same star */
  allowClear?: boolean;
  /** Icon to use for rating */
  icon?: "star" | "heart" | "thumbs-up";
  // Controlled props
  value?: any;
  onChange?: (value: any) => void;
}

export function RatingField<T extends FieldValues>({
  name,
  label,
  description,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  maxRating = 5,
  showNumbers = false,
  labels,
  size = "md",
  allowClear = true,
  icon = "star",
  value,
  onChange,
}: RatingFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);
  const isControlled = value !== undefined && onChange !== undefined;

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const IconComponent =
    icon === "star"
      ? StarIcon
      : icon === "heart"
        ? ({ className }: { className?: string }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )
        : ({ className }: { className?: string }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h4V9H1v12zm22 0h-6v-9h6v9zM10.69 3.86L9.28 2.45a1 1 0 00-1.41 0l-1.42 1.41L1 9.41V21h22V9.41l-5.44-5.55-1.41 1.41a6 6 0 01-8.46 0z" />
            </svg>
          );

  if (isControlled) {
    const currentValue = value || 0;

    const handleKeyDown = (e: React.KeyboardEvent, rating: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!readOnly && !disabled) {
          onChange(rating);
        }
      }
    };

    return (
      <FormItem className={cn(className)}>
        {label && (
          <FormLabel>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </FormLabel>
        )}
        <FormControl>
          <div className="flex flex-col gap-2">
            <div
              className="flex items-center gap-1"
              role="radiogroup"
              aria-labelledby={label ? `${name}-label` : undefined}
            >
              {Array.from({ length: maxRating }).map((_, index) => {
                const rating = index + 1;
                const isFilled =
                  hoverValue !== null ? rating <= hoverValue : rating <= currentValue;

                return (
                  <button
                    key={index}
                    type="button"
                    disabled={disabled || readOnly}
                    onClick={() => {
                      if (!readOnly && !disabled) {
                        const newValue = allowClear && currentValue === rating ? 0 : rating;
                        onChange(newValue);
                      }
                    }}
                    onMouseEnter={() => !readOnly && !disabled && setHoverValue(rating)}
                    onMouseLeave={() => setHoverValue(null)}
                    onKeyDown={(e) => handleKeyDown(e, rating)}
                    className={cn(
                      "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded",
                      disabled || readOnly
                        ? "cursor-default"
                        : "cursor-pointer hover:scale-110",
                      (disabled || readOnly) && "opacity-50"
                    )}
                    aria-checked={currentValue === rating}
                    role="radio"
                    aria-label={`${rating} out of ${maxRating}`}
                    tabIndex={disabled || readOnly ? -1 : 0}
                  >
                    <IconComponent
                      className={cn(
                        sizeClasses[size],
                        isFilled ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                      )}
                    />
                  </button>
                );
              })}
            </div>
            {(showNumbers || labels) && (
              <div className="flex justify-between text-xs text-muted-foreground">
                {Array.from({ length: maxRating }).map((_, index) => (
                  <span key={index} className="flex-1 text-center">
                    {labels?.[index] || (showNumbers ? index + 1 : "")}
                  </span>
                ))}
              </div>
            )}
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </div>
        </FormControl>
      </FormItem>
    );
  }

  return (
    <FormItem className={cn(className)}>
      {label && (
        <FormLabel>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          const currentValue = field.value || 0;

          const handleKeyDown = (e: React.KeyboardEvent, rating: number) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!readOnly && !disabled) {
                field.onChange(rating);
              }
            }
          };

          return (
            <FormControl>
              <div className="flex flex-col gap-2">
                <div
                  className="flex items-center gap-1"
                  role="radiogroup"
                  aria-labelledby={label ? `${name}-label` : undefined}
                >
                  {Array.from({ length: maxRating }).map((_, index) => {
                    const rating = index + 1;
                    const isFilled =
                      hoverValue !== null ? rating <= hoverValue : rating <= currentValue;

                    return (
                      <button
                        key={index}
                        type="button"
                        disabled={disabled || readOnly}
                        onClick={() => {
                          if (!readOnly && !disabled) {
                            const newValue = allowClear && currentValue === rating ? 0 : rating;
                            field.onChange(newValue);
                          }
                        }}
                        onMouseEnter={() => !readOnly && !disabled && setHoverValue(rating)}
                        onMouseLeave={() => setHoverValue(null)}
                        onKeyDown={(e) => handleKeyDown(e, rating)}
                        className={cn(
                          "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded",
                          disabled || readOnly
                            ? "cursor-default"
                            : "cursor-pointer hover:scale-110",
                          (disabled || readOnly) && "opacity-50"
                        )}
                        aria-checked={currentValue === rating}
                        role="radio"
                        aria-label={`${rating} out of ${maxRating}`}
                        tabIndex={disabled || readOnly ? -1 : 0}
                      >
                        <IconComponent
                          className={cn(
                            sizeClasses[size],
                            isFilled ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                          )}
                        />
                      </button>
                    );
                  })}
                </div>
                {(showNumbers || labels) && (
                  <div className="flex justify-between text-xs text-muted-foreground">
                    {Array.from({ length: maxRating }).map((_, index) => (
                      <span key={index} className="flex-1 text-center">
                        {labels?.[index] || (showNumbers ? index + 1 : "")}
                      </span>
                    ))}
                  </div>
                )}
                {description && <FormDescription>{description}</FormDescription>}
                <FormMessage />
              </div>
            </FormControl>
          );
        }}
      />
    </FormItem>
  );
}

export default RatingField;
