"use client";

import * as React from "react";
import type { FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  CheckboxField,
  ColorField,
  ComboboxField,
  CurrencyField,
  DateField,
  FileUploadField,
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

export function FieldRenderer<T extends FieldValues>(props: FieldRendererProps<T>) {
  const { type, render } = props;

  if (render) {
    return render(props as any, {} as any);
  }

  const commonProps = {
    name: props.name,
    label: props.label,
    description: props.description,
    disabled: props.disabled,
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
        />
      );

    case "textarea":
      return (
        <TextareaField
          {...commonProps}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          rows={props.rows}
        />
      );

    case "select":
      return (
        <SelectField {...commonProps} options={props.options} placeholder={props.placeholder} />
      );

    case "combobox":
    case "multi-select":
      return (
        <ComboboxField
          {...commonProps}
          options={props.options}
          placeholder={props.placeholder}
          searchable={type === "combobox"}
        />
      );

    case "checkbox":
      return <CheckboxField {...commonProps} />;

    case "switch":
      return <SwitchField {...commonProps} />;

    case "radio":
      return <RadioGroupField {...commonProps} options={props.options} />;

    case "date":
    case "datetime":
      return <DateField {...commonProps} showTime={type === "datetime"} />;

    case "time":
      return <TextField {...commonProps} type="text" placeholder="HH:MM" />;

    case "file":
      return (
        <FileUploadField
          {...commonProps}
          accept={props.accept}
          maxSize={props.maxSize}
          maxFiles={props.maxFiles}
          onUpload={props.onUpload}
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
        />
      );

    case "rich-text":
    case "code":
      // Placeholder - render as textarea for now
      return <TextareaField {...commonProps} placeholder={(props as any).placeholder} rows={6} />;

    case "address":
    case "name":
    case "credit-card":
      // Placeholders - render as text for now
      return <TextField {...commonProps} type="text" placeholder={(props as any).placeholder} />;

    default:
      return <TextField {...commonProps} type="text" placeholder={(props as any).placeholder} />;
  }
}

export default FieldRenderer;
