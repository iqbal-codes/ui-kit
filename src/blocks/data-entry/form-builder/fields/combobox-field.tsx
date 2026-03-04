"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/primitives/combobox";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";

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
  // Controlled props
  value?: any;
  onChange?: (value: any) => void;
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
  value,
  onChange,
}: ComboboxFieldProps<T>) {
  const { control } = useFormContext<T>();
  const isControlled = value !== undefined && onChange !== undefined;

  if (isControlled) {
    return (
      <FormItem className={cn(className)}>
        {label && (
          <FormLabel htmlFor={name}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </FormLabel>
        )}
        <FormControl>
          <Combobox value={value} onValueChange={onChange} disabled={disabled}>
            <ComboboxInput
              placeholder={placeholder}
              disabled={disabled}
              showClear
              showTrigger={false}
            />
            <ComboboxContent>
              <ComboboxList>
                {options.map((option) => (
                  <ComboboxItem key={option.value} value={option.value} disabled={option.disabled}>
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
    );
  }

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
            <Combobox value={field.value} onValueChange={field.onChange} disabled={disabled}>
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
