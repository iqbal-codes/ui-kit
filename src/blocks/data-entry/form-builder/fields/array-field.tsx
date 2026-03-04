"use client";

import { ChevronDown, ChevronRight, ChevronUp, GripVertical, Plus, Trash2 } from "lucide-react";
import * as React from "react";
import {
  Controller,
  type FieldPath,
  type FieldValues,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Card, CardContent, CardHeader } from "@/primitives/card";
import { FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { FieldRenderer } from "../form-field-renderer";
import type { FieldConfig } from "../types";

export interface ArrayFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  fields: FieldConfig<any>[];
  minItems?: number;
  maxItems?: number;
  addItemLabel?: string;
  showReorder?: boolean;
  itemTitleField?: FieldPath<T>;
  itemTitleTemplate?: string;
  itemDefaultValue?: any;
  collapsibleItems?: boolean;
  defaultCollapsed?: boolean;
}

export function ArrayField<T extends FieldValues>({
  name,
  label,
  description,
  disabled = false,
  required = false,
  className,
  fields,
  minItems = 0,
  maxItems = Infinity,
  addItemLabel = "Add Item",
  showReorder = false,
  itemTitleField,
  itemTitleTemplate,
  itemDefaultValue,
  collapsibleItems = true,
  defaultCollapsed = false,
}: ArrayFieldProps<T>) {
  const { control, watch } = useFormContext<T>();
  const [openItems, setOpenItems] = React.useState<Record<number, boolean>>({});

  const {
    fields: arrayFields,
    append,
    remove,
    move,
  } = useFieldArray({
    control,
    name: name as any,
  });

  // Initialize open state for items
  React.useEffect(() => {
    const initialOpenState: Record<number, boolean> = {};
    arrayFields.forEach((_, index) => {
      initialOpenState[index] = !defaultCollapsed;
    });
    setOpenItems((prev) => ({ ...initialOpenState, ...prev }));
  }, [arrayFields.length, defaultCollapsed]);

  const canAdd = arrayFields.length < maxItems;
  const canRemoveItems = arrayFields.length > minItems;

  const handleAdd = () => {
    if (canAdd) {
      append(itemDefaultValue ?? {});
      // Open the newly added item
      const newIndex = arrayFields.length;
      setOpenItems((prev) => ({ ...prev, [newIndex]: true }));
    }
  };

  const handleRemove = (index: number) => {
    if (canRemoveItems) {
      remove(index);
      // Update open state indices after removal
      setOpenItems((prev) => {
        const updated: Record<number, boolean> = {};
        Object.entries(prev).forEach(([key, value]) => {
          const numKey = parseInt(key, 10);
          if (numKey < index) {
            updated[numKey] = value;
          } else if (numKey > index) {
            updated[numKey - 1] = value;
          }
        });
        return updated;
      });
    }
  };

  const handleMove = (fromIndex: number, toIndex: number) => {
    move(fromIndex, toIndex);
    // Update open state indices after move
    setOpenItems((prev) => {
      const updated: Record<number, boolean> = {};
      Object.entries(prev).forEach(([key, value]) => {
        const numKey = parseInt(key, 10);
        if (numKey === fromIndex) {
          updated[toIndex] = value;
        } else if (numKey === toIndex) {
          updated[fromIndex] = value;
        } else {
          updated[numKey] = value;
        }
      });
      return updated;
    });
  };

  const handleToggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getItemTitle = (index: number) => {
    const values = watch();
    const arrayValue = values[name as keyof typeof values] as any[];
    const item = arrayValue?.[index];

    if (!item) return `Item ${index + 1}`;

    // Use custom template if provided
    if (itemTitleTemplate) {
      const parts = itemTitleTemplate.split(/\{([^}]+)\}/);
      return (
        parts
          .map((part) => {
            if (part.startsWith("{") && part.endsWith("}")) return "";
            if (part.trim()) {
              const value = part.split(".").reduce((obj, key) => obj?.[key], item);
              return value ?? "";
            }
            return "";
          })
          .join("")
          .trim() || `Item ${index + 1}`
      );
    }

    // Use title field if provided
    if (itemTitleField) {
      const titleValue = itemTitleField.split(".").reduce((obj, key) => obj?.[key], item);
      if (titleValue) return String(titleValue);
    }

    return `Item ${index + 1}`;
  };

  return (
    <FormItem className={cn("space-y-4", className)}>
      {label && (
        <div className="flex items-center justify-between">
          <FormLabel>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </FormLabel>
          <span className="text-xs text-muted-foreground">{arrayFields.length} item(s)</span>
        </div>
      )}
      {description && <FormDescription>{description}</FormDescription>}

      <div className="space-y-3">
        {arrayFields.map((field, index) => {
          const isOpen = openItems[index] ?? true;
          const canDelete = canRemoveItems && !disabled;

          return (
            <Card key={field.id} className="relative">
              {collapsibleItems ? (
                <CardHeader className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {showReorder && (
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 cursor-move"
                          disabled={disabled || index === 0}
                          onClick={() => handleMove(index, index - 1)}
                        >
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 cursor-move"
                          disabled={disabled || index === arrayFields.length - 1}
                          onClick={() => handleMove(index, index + 1)}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 flex-1 justify-start px-2 font-normal text-left"
                      onClick={() => handleToggleItem(index)}
                    >
                      {isOpen ? (
                        <ChevronDown className="h-4 w-4 mr-2" />
                      ) : (
                        <ChevronRight className="h-4 w-4 mr-2" />
                      )}
                      <span className="truncate">{getItemTitle(index)}</span>
                    </Button>
                    {canDelete && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        onClick={() => handleRemove(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
              ) : (
                <div className="flex items-center justify-between p-4 pb-0">
                  <div className="flex items-center gap-2">
                    {showReorder && (
                      <div className="flex items-center text-muted-foreground">
                        <GripVertical className="h-4 w-4" />
                      </div>
                    )}
                    <span className="text-sm font-medium">{getItemTitle(index)}</span>
                  </div>
                  {canDelete && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      onClick={() => handleRemove(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}

              {(isOpen || !collapsibleItems) && (
                <CardContent className="p-4 pt-0 space-y-4">
                  {fields.map((fieldConfig: FieldConfig<any>) => (
                    <Controller
                      key={`${field.id}-${fieldConfig.name}`}
                      name={`${name}.${index}.${fieldConfig.name as string}` as FieldPath<T>}
                      control={control}
                      render={() => (
                        <FieldRenderer
                          {...(fieldConfig as any)}
                          name={`${name}.${index}.${fieldConfig.name as string}` as FieldPath<T>}
                          disabled={disabled}
                        />
                      )}
                    />
                  ))}
                  {!collapsibleItems && canDelete && (
                    <div className="flex justify-end pt-2 border-t">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-destructive"
                        onClick={() => handleRemove(index)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          );
        })}

        {arrayFields.length === 0 && (
          <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
            No items added yet
          </div>
        )}

        {canAdd && (
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleAdd}
            disabled={disabled}
          >
            <Plus className="h-4 w-4 mr-2" />
            {addItemLabel}
          </Button>
        )}

        {!canAdd && maxItems !== Infinity && (
          <p className="text-xs text-muted-foreground text-center">
            Maximum {maxItems} item(s) reached
          </p>
        )}
      </div>

      <FormMessage />
    </FormItem>
  );
}

export default ArrayField;
