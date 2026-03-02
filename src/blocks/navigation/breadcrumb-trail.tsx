import * as React from "react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/primitives/breadcrumb";
import { cn } from "@/lib/utils";

export interface BreadcrumbItemType {
  /** Display label */
  label: string;
  /** Link href (last item may not have link) */
  href?: string;
  /** Whether this item is active */
  isActive?: boolean;
}

export interface BreadcrumbTrailProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItemType[];
  /** Show ellipsis for collapsed items */
  collapsible?: boolean;
  /** Maximum items to show before collapsing */
  maxItems?: number;
  /** Additional CSS classes */
  className?: string;
}

export function BreadcrumbTrail({
  items,
  collapsible = false,
  maxItems = 3,
  className,
}: BreadcrumbTrailProps) {
  if (!items || items.length === 0) return null;

  const shouldCollapse = collapsible && items.length > maxItems;

  const getDisplayItems = (): Array<BreadcrumbItemType & { key: string }> => {
    if (!shouldCollapse) return items.map((item, i) => ({ ...item, key: `item-${i}` }));
    
    const first = items[0];
    const last = items[items.length - 1];
    const middle = items.slice(1, items.length - 1);
    
    return [
      { ...first, key: 'first' },
      { label: "...", key: 'ellipsis' },
      ...middle.slice(-(maxItems - 2)).map((item, i) => ({ ...item, key: `middle-${i}` })),
      { ...last, key: 'last' },
    ];
  };

  const displayItems = getDisplayItems();

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {displayItems.map((item, index) => (
          <React.Fragment key={item.key}>
            <BreadcrumbItem>
              {item.isActive || index === displayItems.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : item.href ? (
                <BreadcrumbLink href={item.href}>
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <span className="text-muted-foreground">{item.label}</span>
              )}
            </BreadcrumbItem>
            {index < displayItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbTrail;
