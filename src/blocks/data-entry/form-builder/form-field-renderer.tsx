"use client";

import * as React from "react";
import { type FieldValues, type Path, useFormContext, useWatch } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  ArrayField,
  CheckboxField,
  ColorField,
  ComboboxField,
  CurrencyField,
  DateField,
  FileUploadField,
  InputChipField,
  OTPField,
  PercentageField,
  PhoneField,
  RadioGroupField,
  RatingField,
  SelectField,
  SliderField,
  SwitchField,
  TextareaField,
  TextField,
} from "./fields";
import type { FieldConfig } from "./types";

export type FieldRendererProps<T extends FieldValues> = FieldConfig<T>;

/**
 * Enhanced FieldRenderer with support for:
 * - watchFields: Only watch specific fields for better performance
 * - isDisabled: Dynamic disabled state based on watched values
 * - isHidden: Dynamic hidden state based on watched values
 * - onChangeCallback: Custom onChange with access to watched values
 */
export function FieldRenderer<T extends FieldValues>(props: FieldRendererProps<T>) {
  const {
    type,
    name,
    watchFields,
    isDisabled,
    isHidden,
    when,
    onChangeCallback,
    disabled: staticDisabled,
  } = props;

  const { control, getValues, setValue } = useFormContext<T>();

  // Get watched values - either specific fields or all values
  const watchedValues = useWatch({
    control,
    ...(watchFields ? { name: watchFields as any } : {}),
  }) as Partial<T>;

  // Get current field value
  const currentValue = React.useMemo(() => {
    try {
      return getValues(name as any);
    } catch {
      return undefined;
    }
  }, [getValues, name, ...(watchFields || [])]);

  // Check if field should be hidden
  const shouldBeHidden = React.useMemo(() => {
    if (isHidden) {
      return isHidden(watchedValues, currentValue);
    }
    if (when) {
      return !when(watchedValues);
    }
    return false;
  }, [isHidden, when, watchedValues, currentValue]);

  // Check if field should be disabled
  const shouldBeDisabled = React.useMemo(() => {
    if (staticDisabled === true) {
      return true;
    }
    if (isDisabled) {
      return isDisabled(watchedValues, currentValue);
    }
    return false;
  }, [staticDisabled, isDisabled, watchedValues, currentValue]);

  // Create custom onChange handler that wraps setValue with callback
  const handleValueChange = React.useCallback(
    (value: any) => {
      setValue(name as any, value);
      if (onChangeCallback) {
        onChangeCallback(value, watchedValues, { control, getValues, setValue });
      }
    },
    [name, setValue, onChangeCallback, watchedValues, control, getValues]
  );

  if (shouldBeHidden) {
    return null;
  }

  if (props.render) {
    return props.render(
      { ...props, disabled: shouldBeDisabled, value: currentValue, onChange: handleValueChange },
      { control, getValues, setValue, watchedValues }
    );
  }

  const commonProps = {
    name: props.name,
    label: props.label,
    description: props.description,
    disabled: shouldBeDisabled,
    required: props.rules?.required as boolean,
    className: props.className,
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
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "textarea":
      return (
        <TextareaField
          {...commonProps}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          rows={props.rows}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "select":
      return (
        <SelectField
          {...commonProps}
          options={props.options}
          placeholder={props.placeholder}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "combobox":
    case "multi-select":
      return (
        <ComboboxField
          {...commonProps}
          options={props.options}
          placeholder={props.placeholder}
          searchable={type === "combobox"}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "checkbox":
      return (
        <CheckboxField
          {...commonProps}
          checked={!!currentValue}
          onCheckedChange={handleValueChange}
        />
      );

    case "switch":
      return (
        <SwitchField
          {...commonProps}
          checked={!!currentValue}
          onCheckedChange={handleValueChange}
        />
      );

    case "radio":
      return (
        <RadioGroupField
          {...commonProps}
          options={props.options}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "date":
    case "datetime":
      return (
        <DateField
          {...commonProps}
          showTime={type === "datetime"}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "time":
      return (
        <TextField
          {...commonProps}
          type="text"
          placeholder="HH:MM"
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "file":
      return (
        <FileUploadField
          {...commonProps}
          accept={props.accept}
          maxSize={props.maxSize}
          maxFiles={props.maxFiles}
          onUpload={props.onUpload}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "currency":
      return (
        <CurrencyField
          {...commonProps}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          currencySymbol={props.currencySymbol}
          currencyPosition={props.currencyPosition}
          allowNegative={props.allowNegative}
          decimalPlaces={props.decimalPlaces}
          minValue={props.minValue}
          maxValue={props.maxValue}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "phone":
      return (
        <PhoneField
          {...commonProps}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          defaultCountry={props.defaultCountry}
          showCountrySelect={props.showCountrySelect}
          countryFieldName={props.countryFieldName}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "percentage":
      return (
        <PercentageField
          {...commonProps}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          minValue={props.minValue}
          maxValue={props.maxValue}
          decimalPlaces={props.decimalPlaces}
          step={props.step}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "otp":
      return (
        <OTPField
          {...commonProps}
          otpLength={props.otpLength}
          otpType={props.otpType}
          showSeparator={props.showSeparator}
          groupSize={props.groupSize}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "rating":
      return (
        <RatingField
          {...commonProps}
          maxRating={props.maxRating}
          showNumbers={props.showNumbers}
          labels={props.labels}
          size={props.size}
          allowClear={props.allowClear}
          icon={props.icon}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "color":
      return (
        <ColorField
          {...commonProps}
          format={props.format}
          showAlpha={props.showAlpha}
          presets={props.presets}
          showPreview={props.showPreview}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "slider":
      return (
        <SliderField
          {...commonProps}
          min={props.min}
          max={props.max}
          step={props.step}
          showInput={props.showInput}
          showValue={props.showValue}
          suffix={props.suffix}
          orientation={props.orientation}
          inverted={props.inverted}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "array":
      return (
        <ArrayField
          {...commonProps}
          fields={props.fields}
          minItems={props.minItems}
          maxItems={props.maxItems}
          addItemLabel={props.addItemLabel}
          showReorder={props.showReorder}
          itemTitleField={props.itemTitleField}
          itemTitleTemplate={props.itemTitleTemplate}
          itemDefaultValue={props.itemDefaultValue}
          collapsibleItems={props.collapsibleItems}
          defaultCollapsed={props.defaultCollapsed}
        />
      );

    case "chip":
      return (
        <InputChipField
          {...commonProps}
          placeholder={props.placeholder}
          maxChips={props.maxChips}
          allowDuplicates={props.allowDuplicates}
          transform={props.transform}
          validateChip={props.validateChip}
        />
      );

    case "rich-text":
    case "code":
      return (
        <TextareaField
          {...commonProps}
          placeholder={props.placeholder}
          rows={6}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    case "address":
    case "name":
    case "credit-card":
      return (
        <TextField
          {...commonProps}
          type="text"
          placeholder={props.placeholder}
          value={currentValue}
          onChange={handleValueChange}
        />
      );

    default:
      return (
        <TextField
          {...commonProps}
          type="text"
          placeholder={props.placeholder}
          value={currentValue}
          onChange={handleValueChange}
        />
      );
  }
}

export default FieldRenderer;
