import * as React from "react";
import { Loader2Icon, Search, X } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/primitives/input-group";
import { Button } from "@/primitives/button";

export interface SearchBarProps {
  /** Current search value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Search handler */
  onSearch?: (value: string) => void;
  /** Clear handler */
  onClear?: () => void;
  /** Loading state */
  isLoading?: boolean;
  /** Debounce delay in ms */
  debounce?: number;
  className?: string;
}

export function SearchBar({
  value,
  placeholder = "Search...",
  onSearch,
  onClear,
  isLoading,
  debounce = 300,
  className,
}: SearchBarProps) {
  const [inputValue, setInputValue] = React.useState(value || "");
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (debounce > 0) {
      debounceRef.current = setTimeout(() => {
        onSearch?.(newValue);
      }, debounce);
    } else {
      onSearch?.(newValue);
    }
  };

  const handleClear = () => {
    setInputValue("");
    onClear?.();
  };

  return (
    <InputGroup className={className}>
      <InputGroupAddon align="inline-start">
        <Search className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={isLoading}
      />
      {inputValue && !isLoading && (
        <InputGroupAddon align="inline-end">
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={handleClear}
            className="h-auto p-0 hover:bg-transparent"
          >
            <X className="h-4 w-4" />
          </Button>
        </InputGroupAddon>
      )}
      {isLoading && (
        <InputGroupAddon align="inline-end">
          <Loader2Icon className="h-4 w-4 animate-spin" />
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}

export default SearchBar;
