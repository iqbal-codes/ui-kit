"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { Input } from "@/primitives/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/primitives/popover";

export interface ColorFieldProps<T extends FieldValues = FieldValues> {
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
  /** Color format (default: hex) */
  format?: "hex" | "rgb" | "hsl";
  /** Show alpha channel slider */
  showAlpha?: boolean;
  /** Preset colors to choose from */
  presets?: string[];
  /** Show color preview swatch */
  showPreview?: boolean;
  // Controlled props
  value?: any;
  onChange?: (value: any) => void;
}

// Common color presets
const DEFAULT_PRESETS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#000000",
  "#6b7280",
  "#ffffff",
];

export function ColorField<T extends FieldValues>({
  name,
  label,
  description,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  format = "hex",
  showAlpha = false,
  presets = DEFAULT_PRESETS,
  showPreview = true,
  value,
  onChange,
}: ColorFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [open, setOpen] = React.useState(false);
  const isControlled = value !== undefined && onChange !== undefined;

  // Convert color to display format
  const formatColor = React.useCallback((val: string): string => {
    if (!val) return "";
    return val;
  }, []);

  if (isControlled) {
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
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
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              {showPreview && (
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn("h-9 w-9 shrink-0 p-0 border-2")}
                      disabled={disabled || readOnly}
                      style={{
                        backgroundColor: value || "transparent",
                      }}
                      aria-label="Select color"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-3" align="start">
                    <div className="space-y-3">
                      {/* Native color picker */}
                      <div className="flex justify-center">
                        <Input
                          type="color"
                          value={value || "#000000"}
                          onChange={handleColorChange}
                          className="h-20 w-20 cursor-pointer border-0 p-0"
                          disabled={disabled || readOnly}
                        />
                      </div>

                      {/* Preset colors */}
                      {presets && presets.length > 0 && (
                        <div className="grid grid-cols-5 gap-1.5">
                          {presets.map((preset) => (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => {
                                onChange(preset);
                                setOpen(false);
                              }}
                              className={cn(
                                "h-6 w-6 rounded border border-border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                                value === preset && "ring-2 ring-ring ring-offset-2"
                              )}
                              style={{ backgroundColor: preset }}
                              aria-label={`Select color ${preset}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </PopoverContent>
                </Popover>
              )}

              <div className="flex-1">
                <Input
                  id={name}
                  type="text"
                  placeholder="#000000"
                  value={formatColor(value)}
                  onChange={(e) => onChange(e.target.value)}
                  disabled={disabled || readOnly}
                  className={cn("font-mono", showPreview && "flex-1")}
                />
              </div>
            </div>

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
        <FormLabel htmlFor={name}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(e.target.value);
          };

          return (
            <FormControl>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  {showPreview && (
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className={cn(
                            "h-9 w-9 shrink-0 p-0 border-2",
                            error && "border-destructive"
                          )}
                          disabled={disabled || readOnly}
                          style={{
                            backgroundColor: field.value || "transparent",
                          }}
                          aria-label="Select color"
                        />
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-3" align="start">
                        <div className="space-y-3">
                          {/* Native color picker */}
                          <div className="flex justify-center">
                            <Input
                              type="color"
                              value={field.value || "#000000"}
                              onChange={handleColorChange}
                              className="h-20 w-20 cursor-pointer border-0 p-0"
                              disabled={disabled || readOnly}
                            />
                          </div>

                          {/* Preset colors */}
                          {presets && presets.length > 0 && (
                            <div className="grid grid-cols-5 gap-1.5">
                              {presets.map((preset) => (
                                <button
                                  key={preset}
                                  type="button"
                                  onClick={() => {
                                    field.onChange(preset);
                                    setOpen(false);
                                  }}
                                  className={cn(
                                    "h-6 w-6 rounded border border-border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                                    field.value === preset && "ring-2 ring-ring ring-offset-2"
                                  )}
                                  style={{ backgroundColor: preset }}
                                  aria-label={`Select color ${preset}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}

                  <div className="flex-1">
                    <Input
                      {...field}
                      id={name}
                      type="text"
                      placeholder="#000000"
                      value={formatColor(field.value)}
                      onChange={(e) => field.onChange(e.target.value)}
                      disabled={disabled || readOnly}
                      aria-invalid={!!error}
                      className={cn("font-mono", showPreview && "flex-1")}
                    />
                  </div>
                </div>

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

export default ColorField;
