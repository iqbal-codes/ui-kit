"use client";

import * as React from "react";
import { type FieldValues, type Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import type { FieldType, FieldOption } from "./types";
import {
  TextField,
  TextareaField,
  SelectField,
  ComboboxField,
  CheckboxField,
  SwitchField,
  RadioGroupField,
  DateField,
  FileUploadField,
} from "./fields";

export interface FieldRendererProps<T extends FieldValues> {
  type: FieldType;
  name: Path<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  options?: FieldOption[];
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  rules?: any;
  multiple?: boolean;
  className?: string;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  onUpload?: (files: File[]) => void | Promise<void>;
  rows?: number;
  render?: () => React.ReactNode;
}

export function FieldRenderer<T extends FieldValues>({
  type,
  name,
  label,
  description,
  placeholder,
  options,
  disabled = false,
  readOnly = false,
  required = false,
  rules,
  multiple,
  className,
  accept,
  maxSize,
  maxFiles,
  onUpload,
  rows,
  render,
}: FieldRendererProps<T>) {
  if (render) {
    return render();
  }

  const commonProps = {
    name,
    label,
    description,
    disabled,
    required,
    className,
  };

  switch (type) {
    case "text":
    case "email":
    case "password":
    case "number":
    case "tel":
    case "url":
      return (
        <TextField
          {...commonProps}
          type={type}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      );

    case "textarea":
      return (
        <TextareaField
          {...commonProps}
          placeholder={placeholder}
          readOnly={readOnly}
          rows={rows}
        />
      );

    case "select":
      return (
        <SelectField
          {...commonProps}
          options={options}
          placeholder={placeholder}
        />
      );

    case "combobox":
    case "multi-select":
      return (
        <ComboboxField
          {...commonProps}
          options={options}
          placeholder={placeholder}
          searchable={type === "combobox"}
        />
      );

    case "checkbox":
      return (
        <CheckboxField
          {...commonProps}
        />
      );

    case "switch":
      return (
        <SwitchField
          {...commonProps}
        />
      );

    case "radio":
      return (
        <RadioGroupField
          {...commonProps}
          options={options}
        />
      );

    case "date":
    case "datetime":
      return (
        <DateField
          {...commonProps}
          showTime={type === "datetime"}
        />
      );

    case "file":
      return (
        <FileUploadField
          {...commonProps}
          accept={accept}
          maxSize={maxSize}
          maxFiles={maxFiles}
          onUpload={onUpload}
        />
      );

    case "time":
      return (
        <TextField
          {...commonProps}
          type="text"
          placeholder="HH:MM"
        />
      );

    default:
      return (
        <TextField
          {...commonProps}
          type="text"
          placeholder={placeholder}
        />
      );
  }
}

export default FieldRenderer;
