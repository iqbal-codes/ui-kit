"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Input } from "@/primitives/input";
import { Label } from "@/primitives/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/primitives/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/primitives/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/primitives/select";
import { Calendar } from "@/primitives/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/primitives/popover";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/primitives/combobox";
import { format } from "date-fns";
import type { FilterDialogProps, FilterField } from "./types";

export function FilterDialog({
  open,
  onOpenChange,
  fields,
  values,
  onChange,
  onApply,
  onClearAll,
  isMobile = false,
}: FilterDialogProps) {
  const [localValues, setLocalValues] = React.useState(values);

  // Sync local state with parent values when dialog opens
  React.useEffect(() => {
    if (open) {
      setLocalValues(values);
    }
  }, [open, values]);

  const handleFieldChange = (field: string, value: any) => {
    setLocalValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApply = () => {
    onChange(localValues);
    onApply();
    onOpenChange(false);
  };

  const handleClearAll = () => {
    setLocalValues({});
    onClearAll?.();
  };

  const activeCount = Object.keys(localValues).filter(
    (key) => localValues[key] !== "" && localValues[key] !== null
  ).length;

  const Content = (
    <>
      <DialogHeader className="space-y-1">
        <DialogTitle>Filter Data</DialogTitle>
      </DialogHeader>

      <div className="space-y-4 py-4">
        {fields.map((field) => (
          <FilterFieldInput
            key={field.name}
            field={field}
            value={localValues[field.name]}
            onChange={(value) => handleFieldChange(field.name, value)}
          />
        ))}
      </div>

      <SheetFooter className="gap-2 sm:justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={handleClearAll}
          disabled={activeCount === 0}
        >
          Clear All
        </Button>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={handleApply}>
            Apply {activeCount > 0 && `(${activeCount})`}
          </Button>
        </div>
      </SheetFooter>
    </>
  );

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle>Filter Data</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4 py-4">
              {fields.map((field) => (
                <FilterFieldInput
                  key={field.name}
                  field={field}
                  value={localValues[field.name]}
                  onChange={(value) => handleFieldChange(field.name, value)}
                />
              ))}
            </div>
          </div>
          <SheetFooter className="gap-2 sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleClearAll}
              disabled={activeCount === 0}
            >
              Clear All
            </Button>
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={handleApply}>
                Apply {activeCount > 0 && `(${activeCount})`}
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {Content}
      </DialogContent>
    </Dialog>
  );
}

/**
 * Individual filter field input component
 */
function FilterFieldInput({
  field,
  value,
  onChange,
}: {
  field: FilterField;
  value: any;
  onChange: (value: any) => void;
}) {
  switch (field.type) {
    case "text":
      return (
        <div className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            placeholder={field.placeholder}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      );

    case "select":
      return (
        <div className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Select value={value || ""} onValueChange={onChange}>
            <SelectTrigger id={field.name}>
              <SelectValue placeholder={field.placeholder || "Select..."} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );

    case "combobox":
      return (
        <div className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Combobox
            value={value || ""}
            onValueChange={onChange}
          >
            <ComboboxInput
              placeholder={field.placeholder || "Select..."}
              showClear
              showTrigger={false}
            />
            <ComboboxContent>
              <ComboboxList>
                {field.options?.map((option) => (
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
        </div>
      );

    case "date":
      return (
        <div className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                {value ? (
                  format(value, "PPP")
                ) : (
                  <span>{field.placeholder || "Pick a date"}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={value ? new Date(value) : undefined}
                onSelect={(date) => onChange(date ? date.toISOString() : null)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      );

    default:
      return (
        <div className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            placeholder={field.placeholder}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      );
  }
}

export default FilterDialog;
