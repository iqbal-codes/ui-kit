import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";

import { Input } from "@/primitives/input";
import { Button } from "@/primitives/button";
import { cn } from "@/lib/utils";

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
  /** Additional CSS classes */
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
    <div className={cn("relative flex items-center w-full max-w-sm", className)}>
      <SearchIcon className="absolute left-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className="pr-8"
        disabled={isLoading}
      />
      {inputValue && !isLoading && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 h-full px-2 hover:bg-transparent"
          onClick={handleClear}
        >
          <XIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export default SearchBar;
