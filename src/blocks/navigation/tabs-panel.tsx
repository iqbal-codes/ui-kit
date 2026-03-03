import React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/primitives/tabs";

export interface TabItem {
  /** Unique identifier */
  id: string;
  /** Tab label */
  label: string;
  /** Tab content */
  content: React.ReactNode;
  /** Disable tab */
  disabled?: boolean;
}

export interface TabsPanelProps {
  /** Tab items */
  items: TabItem[];
  /** Default active tab */
  defaultTab?: string;
  /** Currently active tab (controlled) */
  value?: string;
  /** Callback when tab changes */
  onValueChange?: (value: string) => void;
  /** Tabs variant */
  variant?: "default" | "pills" | "outline";
  className?: string;
}

export function TabsPanel({
  items,
  defaultTab,
  value,
  onValueChange,
  variant = "default",
  className,
}: TabsPanelProps) {
  const defaultValue = defaultTab || items[0]?.id;
  const variantClass =
    variant === "pills" ? "bg-muted p-1" : variant === "outline" ? "border-b" : "";

  return (
    <Tabs
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={className}
    >
      <TabsList className={cn(variantClass)}>
        {items.map((item) => (
          <TabsTrigger key={item.id} value={item.id} disabled={item.disabled}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.id} value={item.id}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default TabsPanel;
