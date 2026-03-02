import * as React from "react";
import { SearchIcon, FileIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Command } from "@/primitives/command";
import { Dialog, DialogContent } from "@/primitives/dialog";

export interface CommandItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

export interface CommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  items?: CommandItem[];
  placeholder?: string;
  className?: string;
}

export function CommandPalette({
  open,
  onOpenChange,
  items = [],
  placeholder = "Type a command or search...",
  className,
}: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[600px] p-0 overflow-hidden">
        <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
          <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            cmdk-input=""
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="max-h-[300px] overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <p className="p-4 text-center text-sm text-muted-foreground">No results found.</p>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground w-full text-left"
                  onClick={() => {
                    item.onSelect?.();
                    onOpenChange?.(false);
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CommandPalette;
