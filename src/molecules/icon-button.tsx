"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/atom/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/atom/tooltip";
import { LucideIcon } from "lucide-react";

const iconButtonVariants = cva("h-9 w-9 p-0", {
  variants: {
    size: {
      sm: "h-8 w-8",
      default: "h-9 w-9",
      lg: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface IconButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: LucideIcon;
  label: string;
  tooltip?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon: Icon,
      label,
      tooltip,
      size,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const buttonContent = (
      <Button
        ref={ref}
        variant={variant}
        className={cn(iconButtonVariants({ size }), className)}
        aria-label={label}
        {...props}
      >
        <Icon className="h-4 w-4" />
      </Button>
    );

    if (tooltip) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return buttonContent;
  },
);
IconButton.displayName = "IconButton";

export { IconButton };
