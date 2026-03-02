"use client";

import * as React from "react";
import { useFormContext, Controller, type FieldPath, type FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/primitives/combobox";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/primitives/form";

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  options?: ComboboxOption[];
  disabled?: boolean;
  required?: boolean;
  searchable?: boolean;
  className?: string;
}

export function ComboboxField<T extends FieldValues>({
  name,
  label,
  description,
  placeholder = "Select...",
  options = [],
  disabled = false,
  required = false,
  searchable = true,
  className,
}: ComboboxFieldProps<T>) {
  const { control } = useFormContext<T>();

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
            <Combobox
              value={field.value}
              onValueChange={field.onChange}
              disabled={disabled}
            >
              <ComboboxInput
                placeholder={placeholder}
                disabled={disabled}
                showClear
                showTrigger={false}
              />
              <ComboboxContent>
                <ComboboxList>
                  {options.map((option) => (
                    <ComboboxItem
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </ComboboxItem>
                  ))}
                  <ComboboxEmpty>No results found</ComboboxEmpty>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default ComboboxField;
