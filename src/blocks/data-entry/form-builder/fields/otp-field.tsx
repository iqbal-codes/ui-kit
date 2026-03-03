"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/primitives/input-otp";

export interface OTPFieldProps<T extends FieldValues = FieldValues> {
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
  /** Length of the OTP code (default: 6) */
  otpLength?: number;
  /** Type of OTP - numeric or alphanumeric */
  otpType?: "numeric" | "alphanumeric";
  /** Show separator between groups */
  showSeparator?: boolean;
  /** Group size for separator (e.g., 3 for 3-3 split) */
  groupSize?: number;
  /** Auto-submit when all digits are entered */
  autoFocus?: boolean;
  /** Placeholder for empty slots */
  placeholder?: string;
}

export function OTPField<T extends FieldValues>({
  name,
  label,
  description,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  otpLength = 6,
  otpType = "numeric",
  showSeparator = true,
  groupSize = 3,
  autoFocus = false,
  placeholder = "○",
}: OTPFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [value, setValue] = React.useState("");

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
          // Sync with external value changes
          React.useEffect(() => {
            if (field.value !== undefined && field.value !== null) {
              setValue(field.value.toString());
            }
          }, [field.value]);

          const handleChange = (newValue: string) => {
            setValue(newValue);
            field.onChange(newValue);
          };

          // Calculate group positions
          const firstGroupSize = showSeparator ? groupSize : otpLength;
          const secondGroupSize = showSeparator ? otpLength - groupSize : 0;

          return (
            <FormControl>
              <div className="flex flex-col items-start gap-2">
                <InputOTP
                  maxLength={otpLength}
                  value={value}
                  onChange={handleChange}
                  disabled={disabled}
                  readOnly={readOnly}
                  autoFocus={autoFocus}
                  pattern={otpType === "numeric" ? "[0-9]*" : "[0-9a-zA-Z]*"}
                  inputMode={otpType === "numeric" ? "numeric" : "text"}
                  aria-invalid={!!error}
                  className={cn(error && "ring-destructive border-destructive")}
                >
                  <InputOTPGroup>
                    {Array.from({ length: firstGroupSize }).map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className={cn(
                          "h-12 w-12 text-lg",
                          error && "border-destructive ring-destructive/20"
                        )}
                      />
                    ))}
                  </InputOTPGroup>
                  {showSeparator && secondGroupSize > 0 && <InputOTPSeparator />}
                  {secondGroupSize > 0 && (
                    <InputOTPGroup>
                      {Array.from({ length: secondGroupSize }).map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={firstGroupSize + index}
                          className={cn(
                            "h-12 w-12 text-lg",
                            error && "border-destructive ring-destructive/20"
                          )}
                        />
                      ))}
                    </InputOTPGroup>
                  )}
                </InputOTP>
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

export default OTPField;
