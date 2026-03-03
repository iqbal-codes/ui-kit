"use client";

import * as React from "react";
import { Controller, type FieldPath, type FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/primitives/form";
import { InputGroup, InputGroupInput } from "@/primitives/input-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/primitives/select";

export interface PhoneFieldProps<T extends FieldValues = FieldValues> {
  /** Field name for react-hook-form registration */
  name: FieldPath<T>;
  /** Field label displayed above input */
  label?: string;
  /** Helper text displayed below input */
  description?: string;
  /** Placeholder text when input is empty */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
  /** Required field indicator */
  required?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Default country code (ISO 3166-1 alpha-2) */
  defaultCountry?: string;
  /** Show country code selector */
  showCountrySelect?: boolean;
  /** Country field name for two-field setup */
  countryFieldName?: string;
}

// Common country codes for phone input
const COUNTRY_CODES = [
  { code: "US", label: "🇺🇸 +1", dialCode: "+1" },
  { code: "GB", label: "🇬🇧 +44", dialCode: "+44" },
  { code: "CA", label: "🇨🇦 +1", dialCode: "+1" },
  { code: "AU", label: "🇦🇺 +61", dialCode: "+61" },
  { code: "DE", label: "🇩🇪 +49", dialCode: "+49" },
  { code: "FR", label: "🇫🇷 +33", dialCode: "+33" },
  { code: "IT", label: "🇮🇹 +39", dialCode: "+39" },
  { code: "ES", label: "🇪🇸 +34", dialCode: "+34" },
  { code: "NL", label: "🇳🇱 +31", dialCode: "+31" },
  { code: "BE", label: "🇧🇪 +32", dialCode: "+32" },
  { code: "CH", label: "🇨🇭 +41", dialCode: "+41" },
  { code: "AT", label: "🇦🇹 +43", dialCode: "+43" },
  { code: "SE", label: "🇸🇪 +46", dialCode: "+46" },
  { code: "NO", label: "🇳🇴 +47", dialCode: "+47" },
  { code: "DK", label: "🇩🇰 +45", dialCode: "+45" },
  { code: "FI", label: "🇫🇮 +358", dialCode: "+358" },
  { code: "PL", label: "🇵🇱 +48", dialCode: "+48" },
  { code: "PT", label: "🇵🇹 +351", dialCode: "+351" },
  { code: "GR", label: "🇬🇷 +30", dialCode: "+30" },
  { code: "IE", label: "🇮🇪 +353", dialCode: "+353" },
  { code: "NZ", label: "🇳🇿 +64", dialCode: "+64" },
  { code: "SG", label: "🇸🇬 +65", dialCode: "+65" },
  { code: "MY", label: "🇲🇾 +60", dialCode: "+60" },
  { code: "TH", label: "🇹🇭 +66", dialCode: "+66" },
  { code: "PH", label: "🇵🇭 +63", dialCode: "+63" },
  { code: "ID", label: "🇮🇩 +62", dialCode: "+62" },
  { code: "VN", label: "🇻🇳 +84", dialCode: "+84" },
  { code: "IN", label: "🇮🇳 +91", dialCode: "+91" },
  { code: "PK", label: "🇵🇰 +92", dialCode: "+92" },
  { code: "BD", label: "🇧🇩 +880", dialCode: "+880" },
  { code: "JP", label: "🇯🇵 +81", dialCode: "+81" },
  { code: "KR", label: "🇰🇷 +82", dialCode: "+82" },
  { code: "CN", label: "🇨🇳 +86", dialCode: "+86" },
  { code: "HK", label: "🇭🇰 +852", dialCode: "+852" },
  { code: "TW", label: "🇹🇼 +886", dialCode: "+886" },
  { code: "AE", label: "🇦🇪 +971", dialCode: "+971" },
  { code: "SA", label: "🇸🇦 +966", dialCode: "+966" },
  { code: "IL", label: "🇮🇱 +972", dialCode: "+972" },
  { code: "ZA", label: "🇿🇦 +27", dialCode: "+27" },
  { code: "BR", label: "🇧🇷 +55", dialCode: "+55" },
  { code: "MX", label: "🇲🇽 +52", dialCode: "+52" },
  { code: "AR", label: "🇦🇷 +54", dialCode: "+54" },
  { code: "CL", label: "🇨🇱 +56", dialCode: "+56" },
  { code: "CO", label: "🇨🇴 +57", dialCode: "+57" },
  { code: "RU", label: "🇷🇺 +7", dialCode: "+7" },
  { code: "UA", label: "🇺🇦 +380", dialCode: "+380" },
  { code: "TR", label: "🇹🇷 +90", dialCode: "+90" },
  { code: "EG", label: "🇪🇬 +20", dialCode: "+20" },
  { code: "NG", label: "🇳🇬 +234", dialCode: "+234" },
  { code: "KE", label: "🇰🇪 +254", dialCode: "+254" },
] as const;

export function PhoneField<T extends FieldValues>({
  name,
  label,
  description,
  placeholder = "(555) 123-4567",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  defaultCountry = "US",
  showCountrySelect = true,
  countryFieldName,
}: PhoneFieldProps<T>) {
  const { control, setValue, watch } = useFormContext<T>();
  const [displayValue, setDisplayValue] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState(defaultCountry);

  // Get country value if using two-field setup
  const countryValue = countryFieldName ? watch(countryFieldName as FieldPath<T>) : null;

  React.useEffect(() => {
    if (countryValue && countryValue !== selectedCountry) {
      setSelectedCountry(countryValue as string);
    }
  }, [countryValue, selectedCountry]);

  // Format phone number with parentheses and dashes
  const formatPhoneNumber = React.useCallback((value: string): string => {
    // Remove all non-numeric characters
    const digits = value.replace(/\D/g, "");

    if (!digits) return "";

    // Format as (XXX) XXX-XXXX for US numbers
    if (digits.length <= 3) {
      return `(${digits}`;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  }, []);

  // Get dial code for selected country
  const getDialCode = React.useCallback((countryCode: string): string => {
    const country = COUNTRY_CODES.find((c) => c.code === countryCode);
    return country?.dialCode || "+1";
  }, []);

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
          // Update display value when field value changes externally
          React.useEffect(() => {
            if (field.value !== undefined && field.value !== null) {
              const digits = field.value.toString().replace(/\D/g, "");
              setDisplayValue(formatPhoneNumber(digits));
            } else {
              setDisplayValue("");
            }
          }, [field.value]);

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;
            const digits = inputValue.replace(/\D/g, "");

            // Limit to 10 digits for US phone numbers
            if (digits.length > 10) return;

            const formatted = formatPhoneNumber(digits);
            setDisplayValue(formatted);

            // Store raw digits with country code
            const dialCode = getDialCode(selectedCountry);
            const fullNumber = dialCode + digits;
            field.onChange(fullNumber);
          };

          const handleCountryChange = (countryCode: string) => {
            setSelectedCountry(countryCode);
            if (countryFieldName) {
              setValue(countryFieldName as FieldPath<T>, countryCode as any);
            }
            // Update the phone number with new country code
            const digits = displayValue.replace(/\D/g, "");
            const dialCode = getDialCode(countryCode);
            const fullNumber = dialCode + digits;
            field.onChange(fullNumber);
          };

          return (
            <div className="flex gap-2">
              {showCountrySelect && (
                <Select value={selectedCountry} onValueChange={handleCountryChange}>
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRY_CODES.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <div className="flex-1">
                <FormControl>
                  <InputGroup data-invalid={!!error || undefined}>
                    <InputGroupInput
                      id={name}
                      type="tel"
                      inputMode="tel"
                      placeholder={placeholder}
                      value={displayValue}
                      onChange={handleChange}
                      disabled={disabled}
                      readOnly={readOnly}
                      aria-invalid={!!error}
                    />
                  </InputGroup>
                </FormControl>
              </div>
            </div>
          );
        }}
      />
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}

export default PhoneField;
