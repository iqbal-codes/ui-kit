'use strict';

var React105 = require('react');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var classVarianceAuthority = require('class-variance-authority');
var radixUi = require('radix-ui');
var dateFns = require('date-fns');
var reactDayPicker = require('react-day-picker');
var react = require('@base-ui/react');
var reactHookForm = require('react-hook-form');
var inputOtp = require('input-otp');
var nextThemes = require('next-themes');
var sonner = require('sonner');
var sortable = require('@dnd-kit/sortable');
var utilities = require('@dnd-kit/utilities');
var core = require('@dnd-kit/core');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React105__namespace = /*#__PURE__*/_interopNamespace(React105);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src/blocks/data-display/activity-timeline.tsx
var variantStyles = {
  default: "bg-muted",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500"
};
function ActivityTimeline({
  items,
  showTimestamp = true,
  compact = false,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("relative", className) }, items.map((item, index) => /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      key: item.id,
      className: cn("relative flex gap-4", !compact && "pb-8", compact && "pb-4 last:pb-0")
    },
    index !== items.length - 1 && /* @__PURE__ */ React105__namespace.default.createElement(
      "div",
      {
        className: cn("absolute left-[11px] top-6 h-full w-0.5 bg-muted", compact && "top-4")
      }
    ),
    /* @__PURE__ */ React105__namespace.default.createElement(
      "div",
      {
        className: cn(
          "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
          variantStyles[item.variant || "default"]
        )
      },
      item.icon ? /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "h-3 w-3 text-white" }, item.icon) : /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CircleIcon, { className: "h-2 w-2 text-white" })
    ),
    /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("flex-1 space-y-1", compact && "space-y-0.5") }, /* @__PURE__ */ React105__namespace.default.createElement("p", { className: cn("text-sm font-medium", compact && "text-xs") }, item.title), item.description && /* @__PURE__ */ React105__namespace.default.createElement("p", { className: cn("text-sm text-muted-foreground", compact && "text-xs") }, item.description), showTimestamp && item.timestamp && /* @__PURE__ */ React105__namespace.default.createElement(
      "p",
      {
        className: cn(
          "flex items-center gap-1 text-xs text-muted-foreground",
          compact && "text-[10px]"
        )
      },
      /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.ClockIcon, { className: "h-3 w-3" }),
      item.timestamp
    ))
  )));
}
var gapSizes = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6"
};
var columnSizes = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6"
};
function CardGrid({ columns = 3, gap = "md", children, className }) {
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("grid", columnSizes[columns], gapSizes[gap], className) }, children);
}
function DataGrid({
  columns,
  rows,
  showHeader = true,
  striped = false,
  hoverable = true,
  onRowClick,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("w-full overflow-auto", className) }, /* @__PURE__ */ React105__namespace.default.createElement("table", { className: "w-full caption-bottom text-sm" }, showHeader && /* @__PURE__ */ React105__namespace.default.createElement("thead", { className: "border-b bg-muted/50" }, /* @__PURE__ */ React105__namespace.default.createElement("tr", null, columns.map((column) => /* @__PURE__ */ React105__namespace.default.createElement(
    "th",
    {
      key: column.id,
      className: cn(
        "h-10 px-2 text-left font-medium text-muted-foreground",
        column.align === "center" && "text-center",
        column.align === "right" && "text-right"
      ),
      style: { width: column.width }
    },
    column.label
  )))), /* @__PURE__ */ React105__namespace.default.createElement("tbody", null, rows.map((row, rowIndex) => /* @__PURE__ */ React105__namespace.default.createElement(
    "tr",
    {
      key: row.id,
      onClick: () => onRowClick?.(row),
      className: cn(
        "border-b transition-colors",
        striped && rowIndex % 2 === 1 && "bg-muted/30",
        hoverable && "hover:bg-muted/50",
        onRowClick && "cursor-pointer"
      )
    },
    columns.map((column) => /* @__PURE__ */ React105__namespace.default.createElement(
      "td",
      {
        key: column.id,
        className: cn(
          "p-2",
          column.align === "center" && "text-center",
          column.align === "right" && "text-right"
        )
      },
      row.cells[column.id]
    ))
  )), rows.length === 0 && /* @__PURE__ */ React105__namespace.default.createElement("tr", null, /* @__PURE__ */ React105__namespace.default.createElement("td", { colSpan: columns.length, className: "p-8 text-center text-muted-foreground" }, "No data available")))));
}
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? radixUi.Slot.Root : "span";
  return /* @__PURE__ */ React105__namespace.default.createElement(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { "data-slot": "card-content", className: cn("px-6", className), ...props });
}
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Progress.Root,
    {
      "data-slot": "progress",
      className: cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      radixUi.Progress.Indicator,
      {
        "data-slot": "progress-indicator",
        className: "bg-primary h-full w-full flex-1 transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  );
}

// src/blocks/data-display/entity-card.tsx
function EntityCard({
  title,
  subtitle,
  description,
  status,
  progress,
  avatar,
  metadata,
  actions,
  onClick,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    Card,
    {
      className: cn("transition-colors", onClick && "cursor-pointer hover:bg-muted/50", className),
      onClick
    },
    /* @__PURE__ */ React105__namespace.default.createElement(CardHeader, { className: "space-y-3" }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-start gap-3 min-w-0" }, avatar && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "shrink-0" }, avatar), /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "min-w-0" }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React105__namespace.default.createElement(CardTitle, { className: "text-base truncate" }, title), status && /* @__PURE__ */ React105__namespace.default.createElement(Badge, { variant: status.variant || "secondary", className: "shrink-0 text-xs" }, status.label)), subtitle && /* @__PURE__ */ React105__namespace.default.createElement(CardDescription, { className: "text-sm" }, subtitle)))), description && /* @__PURE__ */ React105__namespace.default.createElement(CardDescription, { className: "text-sm line-clamp-2" }, description)),
    (progress !== void 0 || metadata) && /* @__PURE__ */ React105__namespace.default.createElement(CardContent, { className: "space-y-3" }, progress !== void 0 && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex justify-between text-xs text-muted-foreground" }, /* @__PURE__ */ React105__namespace.default.createElement("span", null, "Progress"), /* @__PURE__ */ React105__namespace.default.createElement("span", null, progress, "%")), /* @__PURE__ */ React105__namespace.default.createElement(Progress, { value: progress, className: "h-2" })), metadata && metadata.length > 0 && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "grid grid-cols-2 gap-2 text-sm" }, metadata.map((item) => /* @__PURE__ */ React105__namespace.default.createElement("div", { key: item.label, className: "flex justify-between" }, /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "text-muted-foreground" }, item.label), /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "font-medium truncate" }, item.value))))),
    actions && /* @__PURE__ */ React105__namespace.default.createElement(CardContent, { className: "pt-0" }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex gap-2" }, actions))
  );
}
function MasonryBoard({ items, columns = 3, gap = 4, className }) {
  const columnArrays = React105__namespace.useMemo(() => {
    const cols = Array.from({ length: columns }, () => []);
    const heights = Array(columns).fill(0);
    items.forEach((item) => {
      const minHeightIndex = heights.indexOf(Math.min(...heights));
      cols[minHeightIndex].push(item);
      heights[minHeightIndex] += item.heightHint || 200;
    });
    return cols;
  }, [items, columns]);
  return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("grid", `grid-cols-${columns}`, className), style: { gap: `${gap * 4}px` } }, columnArrays.map((column, colIndex) => /* @__PURE__ */ React105__namespace.createElement("div", { key: colIndex, className: "flex flex-col", style: { gap: `${gap * 4}px` } }, column.map((item) => /* @__PURE__ */ React105__namespace.createElement("div", { key: item.id }, item.content)))));
}
var trendConfig = {
  up: {
    icon: lucideReact.ArrowUpIcon,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30"
  },
  down: {
    icon: lucideReact.ArrowDownIcon,
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30"
  },
  neutral: {
    icon: lucideReact.MinusIcon,
    color: "text-muted-foreground",
    bg: "bg-muted"
  }
};
function MetricCard({
  label,
  value,
  previousValue,
  trend,
  trendValue,
  description,
  compact = false,
  onClick,
  className
}) {
  const trendData = trend ? trendConfig[trend] : null;
  const changePercent = React105__namespace.useMemo(() => {
    if (!previousValue || !trend) return null;
    const current = typeof value === "number" ? value : parseFloat(String(value));
    const prev = typeof previousValue === "number" ? previousValue : parseFloat(String(previousValue));
    if (Number.isNaN(current) || Number.isNaN(prev) || prev === 0) return null;
    return ((current - prev) / prev * 100).toFixed(1);
  }, [value, previousValue, trend]);
  return /* @__PURE__ */ React105__namespace.createElement(
    Card,
    {
      className: cn("transition-colors", onClick && "cursor-pointer hover:bg-muted/50", className),
      onClick
    },
    /* @__PURE__ */ React105__namespace.createElement(CardHeader, { className: cn("pb-2", compact && "pb-1") }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React105__namespace.createElement(CardDescription, { className: cn("font-medium text-foreground", compact && "text-sm") }, label), trendData && /* @__PURE__ */ React105__namespace.createElement(Badge, { variant: "outline", className: cn("gap-1 text-xs", trendData.bg, trendData.color) }, trend === "up" && /* @__PURE__ */ React105__namespace.createElement(lucideReact.ArrowUpIcon, { className: "h-3 w-3" }), trend === "down" && /* @__PURE__ */ React105__namespace.createElement(lucideReact.ArrowDownIcon, { className: "h-3 w-3" }), trend === "neutral" && /* @__PURE__ */ React105__namespace.createElement(lucideReact.MinusIcon, { className: "h-3 w-3" }), trendValue || changePercent || "\u2014"))),
    /* @__PURE__ */ React105__namespace.createElement(CardContent, null, /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("font-bold", compact ? "text-xl" : "text-3xl") }, value), description && !compact && /* @__PURE__ */ React105__namespace.createElement(CardDescription, { className: "mt-1 text-xs" }, description))
  );
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? radixUi.Slot.Root : "button";
  return /* @__PURE__ */ React105__namespace.createElement(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/blocks/data-display/section-header.tsx
function SectionHeader({ title, description, action, icon, className }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(Card, { className: cn("border-0 shadow-none bg-transparent", className) }, /* @__PURE__ */ React105__namespace.default.createElement(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 px-0 pb-4" }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center gap-3" }, icon && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center" }, icon), /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React105__namespace.default.createElement(CardTitle, { className: "text-xl font-semibold tracking-tight" }, title), description && /* @__PURE__ */ React105__namespace.default.createElement(CardDescription, { className: "text-sm" }, description))), action && /* @__PURE__ */ React105__namespace.default.createElement(
    Button,
    {
      variant: action.variant || "default",
      size: "sm",
      onClick: action.onClick,
      className: "shrink-0"
    },
    action.icon && /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "mr-2" }, action.icon),
    action.label
  )), /* @__PURE__ */ React105__namespace.default.createElement(CardContent, { className: "px-0" }));
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// src/primitives/input-group.tsx
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
var inputGroupAddonVariants = classVarianceAuthority.cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
var inputGroupButtonVariants = classVarianceAuthority.cva("text-sm shadow-none flex gap-2 items-center", {
  variants: {
    size: {
      xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
      sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupInput({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}

// src/blocks/data-entry/search-bar.tsx
function SearchBar({
  value,
  placeholder = "Search...",
  onSearch,
  onClear,
  isLoading,
  debounce = 300,
  className
}) {
  const [inputValue, setInputValue] = React105__namespace.useState(value || "");
  const debounceRef = React105__namespace.useRef(null);
  React105__namespace.useEffect(() => {
    if (value !== void 0) {
      setInputValue(value);
    }
  }, [value]);
  const handleChange = (e) => {
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
  return /* @__PURE__ */ React105__namespace.createElement(InputGroup, { className }, /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-start" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.Search, { className: "h-4 w-4" })), /* @__PURE__ */ React105__namespace.createElement(
    InputGroupInput,
    {
      placeholder,
      value: inputValue,
      onChange: handleChange,
      disabled: isLoading
    }
  ), inputValue && !isLoading && /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-end" }, /* @__PURE__ */ React105__namespace.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon-xs",
      onClick: handleClear,
      className: "h-auto p-0 hover:bg-transparent"
    },
    /* @__PURE__ */ React105__namespace.createElement(lucideReact.X, { className: "h-4 w-4" })
  )), isLoading && /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-end" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.Loader2Icon, { className: "h-4 w-4 animate-spin" })));
}

// src/blocks/data-display/smart-data-table/filter-bar.tsx
function FilterBar({
  searchValue,
  onSearchChange,
  onAddFilter,
  onClearAll,
  searchPlaceholder = "Search...",
  hasFilters = false,
  isLoading = false,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("flex items-center justify-between gap-3", className) }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React105__namespace.default.createElement(
    SearchBar,
    {
      value: searchValue,
      placeholder: searchPlaceholder,
      onSearch: onSearchChange,
      onClear: () => onSearchChange?.(""),
      isLoading,
      debounce: 300,
      className: "w-full"
    }
  )), /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center gap-2 shrink-0" }, /* @__PURE__ */ React105__namespace.default.createElement(Button, { type: "button", variant: "outline", onClick: onAddFilter }, "+ Add Filter"), hasFilters && /* @__PURE__ */ React105__namespace.default.createElement(
    Button,
    {
      type: "button",
      variant: "ghost",
      onClick: onClearAll,
      className: "text-muted-foreground hover:text-destructive"
    },
    "Clear"
  )));
}
function FilterChips({ filters, onRemoveFilter, onClearAll, className }) {
  if (filters.length === 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("div", { className: cn("flex flex-wrap items-center gap-2 py-2", className) }, filters.map((filter) => /* @__PURE__ */ React.createElement(
    Badge,
    {
      key: filter.field,
      variant: "secondary",
      className: "flex items-center gap-1.5 px-2.5 py-1.5 h-auto font-normal"
    },
    /* @__PURE__ */ React.createElement("span", { className: "text-muted-foreground" }, filter.label, ":"),
    /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, filter.displayValue),
    /* @__PURE__ */ React.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "icon",
        className: "h-4 w-4 hover:bg-transparent",
        onClick: () => onRemoveFilter(filter.field)
      },
      /* @__PURE__ */ React.createElement(lucideReact.X, { className: "h-3.5 w-3.5" })
    )
  )), onClearAll && filters.length > 1 && /* @__PURE__ */ React.createElement(
    Button,
    {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: onClearAll,
      className: "h-auto text-muted-foreground hover:text-destructive"
    },
    "Clear All"
  ));
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  return /* @__PURE__ */ React105__namespace.createElement(
    reactDayPicker.DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn("rounded-l-md bg-accent", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ React105__namespace.createElement("div", { "data-slot": "calendar", ref: rootRef, className: cn(className2), ...props2 });
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronRightIcon, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ React105__namespace.createElement("td", { ...props2 }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex size-(--cell-size) items-center justify-center text-center" }, children));
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const ref = React105__namespace.useRef(null);
  React105__namespace.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ React105__namespace.createElement(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
var Combobox = react.Combobox.Root;
function ComboboxTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    react.Combobox.Trigger,
    {
      "data-slot": "combobox-trigger",
      className: cn("[&_svg:not([class*='size-'])]:size-4", className),
      ...props
    },
    children,
    /* @__PURE__ */ React105__namespace.createElement(
      lucideReact.ChevronDownIcon,
      {
        "data-slot": "combobox-trigger-icon",
        className: "text-muted-foreground pointer-events-none size-4"
      }
    )
  );
}
function ComboboxClear({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    react.Combobox.Clear,
    {
      "data-slot": "combobox-clear",
      render: /* @__PURE__ */ React105__namespace.createElement(InputGroupButton, { variant: "ghost", size: "icon-xs" }),
      className: cn(className),
      ...props
    },
    /* @__PURE__ */ React105__namespace.createElement(lucideReact.XIcon, { className: "pointer-events-none" })
  );
}
function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.createElement(InputGroup, { className: cn("w-auto", className) }, /* @__PURE__ */ React105__namespace.createElement(react.Combobox.Input, { render: /* @__PURE__ */ React105__namespace.createElement(InputGroupInput, { disabled }), ...props }), /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-end" }, showTrigger && /* @__PURE__ */ React105__namespace.createElement(
    InputGroupButton,
    {
      size: "icon-xs",
      variant: "ghost",
      asChild: true,
      "data-slot": "input-group-button",
      className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
      disabled
    },
    /* @__PURE__ */ React105__namespace.createElement(ComboboxTrigger, null)
  ), showClear && /* @__PURE__ */ React105__namespace.createElement(ComboboxClear, { disabled })), children);
}
function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.createElement(react.Combobox.Portal, null, /* @__PURE__ */ React105__namespace.createElement(
    react.Combobox.Positioner,
    {
      side,
      sideOffset,
      align,
      alignOffset,
      anchor,
      className: "isolate z-50"
    },
    /* @__PURE__ */ React105__namespace.createElement(
      react.Combobox.Popup,
      {
        "data-slot": "combobox-content",
        "data-chips": !!anchor,
        className: cn(
          "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 group/combobox-content relative max-h-96 w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-md shadow-md ring-1 duration-100 data-[chips=true]:min-w-(--anchor-width) *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none",
          className
        ),
        ...props
      }
    )
  ));
}
function ComboboxList({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    react.Combobox.List,
    {
      "data-slot": "combobox-list",
      className: cn(
        "max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0",
        className
      ),
      ...props
    }
  );
}
function ComboboxItem({ className, children, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    react.Combobox.Item,
    {
      "data-slot": "combobox-item",
      className: cn(
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React105__namespace.createElement(
      react.Combobox.ItemIndicator,
      {
        "data-slot": "combobox-item-indicator",
        render: /* @__PURE__ */ React105__namespace.createElement("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" })
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.CheckIcon, { className: "pointer-events-none size-4 pointer-coarse:size-5" })
    )
  );
}
function ComboboxEmpty({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    react.Combobox.Empty,
    {
      "data-slot": "combobox-empty",
      className: cn(
        "text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex",
        className
      ),
      ...props
    }
  );
}
function Dialog({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Dialog.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Dialog.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Dialog.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(DialogPortal, { "data-slot": "dialog-portal" }, /* @__PURE__ */ React105__namespace.default.createElement(DialogOverlay, null), /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Dialog.Content,
    {
      "data-slot": "dialog-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
        className
      ),
      ...props
    },
    children,
    showCloseButton && /* @__PURE__ */ React105__namespace.default.createElement(
      radixUi.Dialog.Close,
      {
        "data-slot": "dialog-close",
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      },
      /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.XIcon, null),
      /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "sr-only" }, "Close")
    )
  ));
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Dialog.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Label.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Popover({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Popover.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Popover.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Popover.Portal, null, /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Popover.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ));
}
function Select({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Select.Root, { "data-slot": "select", ...props });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Select.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Select.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Select.Icon, { asChild: true }, /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.ChevronDownIcon, { className: "size-4 opacity-50" }))
  );
}
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Select.Portal, null, /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Select.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align,
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(SelectScrollUpButton, null),
    /* @__PURE__ */ React105__namespace.default.createElement(
      radixUi.Select.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
        )
      },
      children
    ),
    /* @__PURE__ */ React105__namespace.default.createElement(SelectScrollDownButton, null)
  ));
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Select.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      "span",
      {
        "data-slot": "select-item-indicator",
        className: "absolute right-2 flex size-3.5 items-center justify-center"
      },
      /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Select.ItemIndicator, null, /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CheckIcon, { className: "size-4" }))
    ),
    /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Select.ItemText, null, children)
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Select.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.ChevronUpIcon, { className: "size-4" })
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Select.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.ChevronDownIcon, { className: "size-4" })
  );
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Dialog.Root, { "data-slot": "sheet", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Dialog.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Dialog.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(SheetPortal, null, /* @__PURE__ */ React105__namespace.default.createElement(SheetOverlay, null), /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Dialog.Content,
    {
      "data-slot": "sheet-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
        side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
        side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        className
      ),
      ...props
    },
    children,
    showCloseButton && /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Dialog.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.XIcon, { className: "size-4" }), /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "sr-only" }, "Close"))
  ));
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Dialog.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Dialog.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/blocks/data-display/smart-data-table/filter-dialog.tsx
function FilterDialog({
  open,
  onOpenChange,
  fields,
  values,
  onChange,
  onApply,
  onClearAll,
  isMobile = false
}) {
  const [localValues, setLocalValues] = React105__namespace.useState(values);
  React105__namespace.useEffect(() => {
    if (open) {
      setLocalValues(values);
    }
  }, [open, values]);
  const handleFieldChange = (field, value) => {
    setLocalValues((prev) => ({
      ...prev,
      [field]: value
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
  const Content = /* @__PURE__ */ React105__namespace.createElement(React105__namespace.Fragment, null, /* @__PURE__ */ React105__namespace.createElement(DialogHeader, { className: "space-y-1" }, /* @__PURE__ */ React105__namespace.createElement(DialogTitle, null, "Filter Data")), /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-4 py-4" }, fields.map((field) => /* @__PURE__ */ React105__namespace.createElement(
    FilterFieldInput,
    {
      key: field.name,
      field,
      value: localValues[field.name],
      onChange: (value) => handleFieldChange(field.name, value)
    }
  ))), /* @__PURE__ */ React105__namespace.createElement(SheetFooter, { className: "gap-2 sm:justify-between" }, /* @__PURE__ */ React105__namespace.createElement(
    Button,
    {
      type: "button",
      variant: "outline",
      onClick: handleClearAll,
      disabled: activeCount === 0
    },
    "Clear All"
  ), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React105__namespace.createElement(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false) }, "Cancel"), /* @__PURE__ */ React105__namespace.createElement(Button, { type: "button", onClick: handleApply }, "Apply ", activeCount > 0 && `(${activeCount})`))));
  if (isMobile) {
    return /* @__PURE__ */ React105__namespace.createElement(Sheet, { open, onOpenChange }, /* @__PURE__ */ React105__namespace.createElement(SheetContent, { className: "flex flex-col" }, /* @__PURE__ */ React105__namespace.createElement(SheetHeader, null, /* @__PURE__ */ React105__namespace.createElement(SheetTitle, null, "Filter Data")), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1 overflow-y-auto" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-4 py-4" }, fields.map((field) => /* @__PURE__ */ React105__namespace.createElement(
      FilterFieldInput,
      {
        key: field.name,
        field,
        value: localValues[field.name],
        onChange: (value) => handleFieldChange(field.name, value)
      }
    )))), /* @__PURE__ */ React105__namespace.createElement(SheetFooter, { className: "gap-2 sm:justify-between" }, /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "outline",
        onClick: handleClearAll,
        disabled: activeCount === 0
      },
      "Clear All"
    ), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React105__namespace.createElement(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false) }, "Cancel"), /* @__PURE__ */ React105__namespace.createElement(Button, { type: "button", onClick: handleApply }, "Apply ", activeCount > 0 && `(${activeCount})`)))));
  }
  return /* @__PURE__ */ React105__namespace.createElement(Dialog, { open, onOpenChange }, /* @__PURE__ */ React105__namespace.createElement(DialogContent, { className: "sm:max-w-md" }, Content));
}
function FilterFieldInput({
  field,
  value,
  onChange
}) {
  switch (field.type) {
    case "text":
      return /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React105__namespace.createElement(Label, { htmlFor: field.name }, field.label), /* @__PURE__ */ React105__namespace.createElement(
        Input,
        {
          id: field.name,
          placeholder: field.placeholder,
          value: value || "",
          onChange: (e) => onChange(e.target.value)
        }
      ));
    case "select":
      return /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React105__namespace.createElement(Label, { htmlFor: field.name }, field.label), /* @__PURE__ */ React105__namespace.createElement(Select, { value: value || "", onValueChange: onChange }, /* @__PURE__ */ React105__namespace.createElement(SelectTrigger, { id: field.name }, /* @__PURE__ */ React105__namespace.createElement(SelectValue, { placeholder: field.placeholder || "Select..." })), /* @__PURE__ */ React105__namespace.createElement(SelectContent, null, field.options?.map((option) => /* @__PURE__ */ React105__namespace.createElement(SelectItem, { key: option.value, value: option.value, disabled: option.disabled }, option.label)))));
    case "combobox":
      return /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React105__namespace.createElement(Label, { htmlFor: field.name }, field.label), /* @__PURE__ */ React105__namespace.createElement(Combobox, { value: value || "", onValueChange: onChange }, /* @__PURE__ */ React105__namespace.createElement(
        ComboboxInput,
        {
          placeholder: field.placeholder || "Select...",
          showClear: true,
          showTrigger: false
        }
      ), /* @__PURE__ */ React105__namespace.createElement(ComboboxContent, null, /* @__PURE__ */ React105__namespace.createElement(ComboboxList, null, field.options?.map((option) => /* @__PURE__ */ React105__namespace.createElement(ComboboxItem, { key: option.value, value: option.value, disabled: option.disabled }, option.label)), /* @__PURE__ */ React105__namespace.createElement(ComboboxEmpty, null, "No results found")))));
    case "date":
      return /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React105__namespace.createElement(Label, { htmlFor: field.name }, field.label), /* @__PURE__ */ React105__namespace.createElement(Popover, null, /* @__PURE__ */ React105__namespace.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement(Button, { variant: "outline", className: "w-full justify-start text-left font-normal" }, value ? dateFns.format(value, "PPP") : /* @__PURE__ */ React105__namespace.createElement("span", null, field.placeholder || "Pick a date"))), /* @__PURE__ */ React105__namespace.createElement(PopoverContent, { className: "w-auto p-0", align: "start" }, /* @__PURE__ */ React105__namespace.createElement(
        Calendar,
        {
          mode: "single",
          selected: value ? new Date(value) : void 0,
          onSelect: (date) => onChange(date ? date.toISOString() : null),
          autoFocus: true
        }
      ))));
    default:
      return /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React105__namespace.createElement(Label, { htmlFor: field.name }, field.label), /* @__PURE__ */ React105__namespace.createElement(
        Input,
        {
          id: field.name,
          placeholder: field.placeholder,
          value: value || "",
          onChange: (e) => onChange(e.target.value)
        }
      ));
  }
}
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "nav",
    {
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "a",
    {
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.ChevronLeftIcon, null),
    /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "hidden sm:block" }, "Previous")
  );
}
function PaginationNext({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "hidden sm:block" }, "Next"),
    /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.ChevronRightIcon, null)
  );
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.MoreHorizontalIcon, { className: "size-4" }),
    /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "sr-only" }, "More pages")
  );
}

// src/blocks/navigation/pagination.tsx
function getPageNumbers(current, total, siblingCount) {
  const totalItems = siblingCount * 2 + 3;
  const dots = "...";
  if (total <= totalItems) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const leftSiblingIndex = Math.max(current - siblingCount, 2);
  const rightSiblingIndex = Math.min(current + siblingCount, total - 1);
  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < total - 1;
  if (!showLeftDots && showRightDots) {
    const leftItemCount = siblingCount * 2 + 3;
    return [...Array.from({ length: leftItemCount }, (_, i) => i + 1), dots, total];
  }
  if (showLeftDots && !showRightDots) {
    const rightItemCount = siblingCount * 2 + 3;
    return [
      1,
      dots,
      ...Array.from({ length: rightItemCount }, (_, i) => total - rightItemCount + i + 1)
    ];
  }
  return [
    1,
    dots,
    ...Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    ),
    dots,
    total
  ];
}
function Pagination2({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = false,
  compact = false,
  className
}) {
  const pageNumbers = getPageNumbers(page, totalPages, siblingCount);
  if (totalPages <= 1) return null;
  if (compact) {
    return /* @__PURE__ */ React.createElement(Pagination, { className: cn("gap-1", className) }, /* @__PURE__ */ React.createElement(PaginationContent, null, /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: () => onPageChange(page - 1),
        disabled: page === 1,
        "aria-label": "Previous page"
      },
      /* @__PURE__ */ React.createElement(lucideReact.ChevronLeftIcon, { className: "h-4 w-4" })
    )), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement("span", { className: "text-sm text-muted-foreground" }, "Page ", page, " of ", totalPages)), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: () => onPageChange(page + 1),
        disabled: page === totalPages,
        "aria-label": "Next page"
      },
      /* @__PURE__ */ React.createElement(lucideReact.ChevronRightIcon, { className: "h-4 w-4" })
    ))));
  }
  return /* @__PURE__ */ React.createElement(Pagination, { className: cn("gap-1", className) }, /* @__PURE__ */ React.createElement(PaginationContent, null, showFirstLast && /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: () => onPageChange(1),
      disabled: page === 1,
      "aria-label": "First page"
    },
    /* @__PURE__ */ React.createElement(lucideReact.ChevronsLeftIcon, { className: "h-4 w-4" })
  )), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(
    PaginationPrevious,
    {
      href: "#",
      onClick: (e) => {
        e.preventDefault();
        if (page > 1) onPageChange(page - 1);
      },
      className: cn(page === 1 && "pointer-events-none opacity-50")
    }
  )), pageNumbers.map(
    (item) => item === "..." ? /* @__PURE__ */ React.createElement(PaginationItem, { key: "ellipsis" }, /* @__PURE__ */ React.createElement(PaginationEllipsis, null)) : /* @__PURE__ */ React.createElement(PaginationItem, { key: item }, /* @__PURE__ */ React.createElement(
      PaginationLink,
      {
        href: "#",
        onClick: (e) => {
          e.preventDefault();
          onPageChange(item);
        },
        isActive: page === item,
        "aria-label": `Go to page ${item}`
      },
      item
    ))
  ), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(
    PaginationNext,
    {
      href: "#",
      onClick: (e) => {
        e.preventDefault();
        if (page < totalPages) onPageChange(page + 1);
      },
      className: cn(page === totalPages && "pointer-events-none opacity-50")
    }
  )), showFirstLast && /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: () => onPageChange(totalPages),
      disabled: page === totalPages,
      "aria-label": "Last page"
    },
    /* @__PURE__ */ React.createElement(lucideReact.ChevronsRightIcon, { className: "h-4 w-4" })
  ))));
}

// src/blocks/data-display/smart-data-table/smart-data-table.tsx
function SmartDataTable({
  data,
  columns,
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
  filterFields = [],
  searchPlaceholder = "Search...",
  enableSearchDebounce = true,
  searchDebounceDelay = 300,
  useUrlState = false,
  urlStateId,
  isLoading = false,
  emptyMessage = "No data available",
  emptyState,
  enableRowSelection = false,
  onRowSelectionChange,
  enableColumnVisibility = false,
  enableSorting = false,
  enablePagination = false,
  currentPage = 1,
  onPageChange,
  pageSize = 10,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50],
  totalItems,
  showFirstLast = false,
  compactPagination = false,
  className
}) {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = React105__namespace.useState(false);
  const [localFilters, setLocalFilters] = React105__namespace.useState(filters || {});
  const [internalPage, setInternalPage] = React105__namespace.useState(1);
  const [internalPageSize, setInternalPageSize] = React105__namespace.useState(pageSize);
  const [isMobile, setIsMobile] = React105__namespace.useState(false);
  React105__namespace.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  React105__namespace.useEffect(() => {
    if (filters) {
      setLocalFilters(filters);
    }
  }, [filters]);
  React105__namespace.useEffect(() => {
    if (currentPage) {
      setInternalPage(currentPage);
    }
  }, [currentPage]);
  React105__namespace.useEffect(() => {
    setInternalPageSize(pageSize);
  }, [pageSize]);
  const actualTotalItems = totalItems ?? data.length;
  const totalPages = Math.ceil(actualTotalItems / internalPageSize);
  const paginatedData = React105__namespace.useMemo(() => {
    if (!enablePagination || totalItems !== void 0) {
      return data;
    }
    const start = (internalPage - 1) * internalPageSize;
    const end = start + internalPageSize;
    return data.slice(start, end);
  }, [data, enablePagination, totalItems, internalPage, internalPageSize]);
  const activeFilters = React105__namespace.useMemo(() => {
    if (!localFilters) return [];
    return Object.entries(localFilters).filter(([_, value]) => value !== "" && value !== null && value !== void 0).map(([field, value]) => {
      const fieldConfig = filterFields.find((f) => f.name === field);
      return {
        field,
        label: fieldConfig?.label || field,
        value,
        displayValue: formatFilterValue(value, fieldConfig?.type)
      };
    });
  }, [localFilters, filterFields]);
  const handleAddFilter = () => {
    setIsFilterDialogOpen(true);
  };
  const handleClearAll = () => {
    setLocalFilters({});
    onFiltersChange?.({});
  };
  const handleRemoveFilter = (field) => {
    const newFilters = { ...localFilters };
    delete newFilters[field];
    setLocalFilters(newFilters);
    onFiltersChange?.(newFilters);
  };
  const handleFilterChange = (newFilters) => {
    setLocalFilters(newFilters);
  };
  const handleFilterApply = () => {
    onFiltersChange?.(localFilters);
  };
  const handlePageChange = (newPage) => {
    setInternalPage(newPage);
    onPageChange?.(newPage);
  };
  const handlePageSizeChange = (newSize) => {
    setInternalPageSize(newSize);
    setInternalPage(1);
    onPageSizeChange?.(newSize);
  };
  return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("space-y-3", className) }, /* @__PURE__ */ React105__namespace.createElement(
    FilterBar,
    {
      searchValue: searchQuery,
      onSearchChange,
      onAddFilter: handleAddFilter,
      onClearAll: handleClearAll,
      searchPlaceholder,
      hasFilters: activeFilters.length > 0,
      isLoading
    }
  ), activeFilters.length > 0 && /* @__PURE__ */ React105__namespace.createElement(
    FilterChips,
    {
      filters: activeFilters,
      onRemoveFilter: handleRemoveFilter,
      onClearAll: handleClearAll
    }
  ), paginatedData.length === 0 ? emptyState || /* @__PURE__ */ React105__namespace.createElement("div", { className: "py-12 text-center" }, /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-muted-foreground" }, emptyMessage)) : /* @__PURE__ */ React105__namespace.createElement(
    DataGrid,
    {
      columns: columns.map((col) => ({
        id: col.id,
        label: col.header,
        width: col.width,
        align: col.align
      })),
      rows: paginatedData.map((item, index) => ({
        id: item.id || `row-${index}`,
        cells: columns.reduce(
          (acc, col) => ({
            ...acc,
            [col.id]: col.cell ? col.cell(item) : item[col.accessorKey]
          }),
          {}
        )
      })),
      showHeader: true,
      striped: true,
      hoverable: true,
      onRowClick: (row) => {
        if (enableRowSelection && onRowSelectionChange) {
          const dataIndex = paginatedData.findIndex(
            (item, i) => item.id === row.id || `row-${i}` === row.id
          );
          if (dataIndex >= 0) {
            onRowSelectionChange([paginatedData[dataIndex]]);
          }
        }
      }
    }
  ), enablePagination && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-between gap-4 pt-4 border-t" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2 text-sm text-muted-foreground" }, /* @__PURE__ */ React105__namespace.createElement("span", null, "Show"), /* @__PURE__ */ React105__namespace.createElement(
    Select,
    {
      value: internalPageSize.toString(),
      onValueChange: (value) => handlePageSizeChange(Number(value))
    },
    /* @__PURE__ */ React105__namespace.createElement(SelectTrigger, { className: "w-[70px]" }, /* @__PURE__ */ React105__namespace.createElement(SelectValue, null)),
    /* @__PURE__ */ React105__namespace.createElement(SelectContent, null, pageSizeOptions.map((size) => /* @__PURE__ */ React105__namespace.createElement(SelectItem, { key: size, value: size.toString() }, size, " / page")))
  ), /* @__PURE__ */ React105__namespace.createElement("span", null, actualTotalItems, " ", actualTotalItems === 1 ? "item" : "items")), /* @__PURE__ */ React105__namespace.createElement(
    Pagination2,
    {
      page: internalPage,
      totalPages,
      onPageChange: handlePageChange,
      showFirstLast,
      compact: compactPagination || isMobile,
      siblingCount: 1
    }
  )), filterFields.length > 0 && /* @__PURE__ */ React105__namespace.createElement(
    FilterDialog,
    {
      open: isFilterDialogOpen,
      onOpenChange: setIsFilterDialogOpen,
      fields: filterFields,
      values: localFilters,
      onChange: handleFilterChange,
      onApply: handleFilterApply,
      onClearAll: handleClearAll,
      isMobile
    }
  ));
}
function formatFilterValue(value, type) {
  if (value === null || value === void 0 || value === "") {
    return "";
  }
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    try {
      return new Date(value).toLocaleDateString();
    } catch {
      return value;
    }
  }
  if (Array.isArray(value)) {
    return value.map((v) => formatFilterValue(v)).join(" - ");
  }
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  return String(value);
}
function TrendBadge({
  direction,
  value,
  label
}) {
  const icons = {
    up: lucideReact.ArrowUpIcon,
    down: lucideReact.ArrowDownIcon,
    neutral: lucideReact.MinusIcon
  };
  const variants = {
    up: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    down: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    neutral: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
  };
  const Icon = icons[direction];
  return /* @__PURE__ */ React.createElement(Badge, { variant: "outline", className: cn("gap-1 font-normal", variants[direction]) }, /* @__PURE__ */ React.createElement(Icon, { className: "h-3 w-3" }), /* @__PURE__ */ React.createElement("span", null, value), label && /* @__PURE__ */ React.createElement("span", { className: "text-muted-foreground" }, label));
}
function StatCard({ title, value, description, trend, className, onClick }) {
  return /* @__PURE__ */ React.createElement(
    Card,
    {
      className: cn("transition-colors", onClick && "cursor-pointer hover:bg-muted/50", className),
      onClick
    },
    /* @__PURE__ */ React.createElement(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement(CardTitle, { className: "text-sm font-medium" }, title), description && /* @__PURE__ */ React.createElement(CardDescription, { className: "text-xs" }, description)), trend && /* @__PURE__ */ React.createElement(TrendBadge, { direction: trend.direction, value: trend.value, label: trend.label })),
    /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold tracking-tight" }, value))
  );
}

// src/blocks/data-display/status-grid.tsx
var variantColors = {
  default: "bg-primary",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500"
};
var ringSizes = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-20 w-20"
};
function StatusGrid({
  items,
  total,
  showProgress = true,
  ringSize = "md",
  className
}) {
  const totalCount = total ?? items.reduce((sum, item) => sum + item.count, 0);
  return /* @__PURE__ */ React.createElement("div", { className: cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className) }, items.map((item) => {
    const percentage = totalCount > 0 ? item.count / totalCount * 100 : 0;
    return /* @__PURE__ */ React.createElement("div", { key: item.id, className: "flex items-center gap-3 p-3 rounded-lg border bg-card" }, showProgress && /* @__PURE__ */ React.createElement("div", { className: cn("relative shrink-0", ringSizes[ringSize]) }, /* @__PURE__ */ React.createElement("svg", { className: "h-full w-full -rotate-90", viewBox: "0 0 36 36", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: "18",
        cy: "18",
        r: "16",
        fill: "none",
        className: "stroke-muted",
        strokeWidth: "3"
      }
    ), /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: "18",
        cy: "18",
        r: "16",
        fill: "none",
        className: cn("stroke-current", variantColors[item.variant]),
        strokeWidth: "3",
        strokeDasharray: `${percentage}, 100`,
        strokeLinecap: "round"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React.createElement(
      "span",
      {
        className: cn(
          "font-bold",
          ringSize === "sm" && "text-xs",
          ringSize === "md" && "text-sm",
          ringSize === "lg" && "text-base"
        )
      },
      Math.round(percentage),
      "%"
    ))), /* @__PURE__ */ React.createElement("div", { className: "min-w-0" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium truncate" }, item.label), /* @__PURE__ */ React.createElement("p", { className: cn("text-2xl font-bold", `text-${item.variant}`) }, item.count)));
  }));
}
function DurationPicker({
  value,
  onChange,
  min = 0,
  max = 1440,
  showPresets = true,
  presets = [15, 30, 60, 120, 240, 480, 720],
  className
}) {
  const [hours, setHours] = React105__namespace.useState(() => {
    if (!value) return 0;
    return Math.floor(value / 60);
  });
  const [minutes, setMinutes] = React105__namespace.useState(() => {
    if (!value) return 0;
    return value % 60;
  });
  React105__namespace.useEffect(() => {
    if (value !== void 0) {
      setHours(Math.floor(value / 60));
      setMinutes(value % 60);
    }
  }, [value]);
  const handleChange = (newHours, newMinutes) => {
    const totalMinutes = Math.min(max, Math.max(min, newHours * 60 + newMinutes));
    setHours(Math.floor(totalMinutes / 60));
    setMinutes(totalMinutes % 60);
    onChange?.(totalMinutes);
  };
  const handleHoursChange = (e) => {
    const h = parseInt(e.target.value, 10) || 0;
    handleChange(h, minutes);
  };
  const handleMinutesChange = (e) => {
    const m = parseInt(e.target.value, 10) || 0;
    handleChange(hours, m);
  };
  const formatPreset = (mins) => {
    if (mins < 60) return `${mins}m`;
    if (mins === 60) return "1h";
    if (mins < 1440) return `${Math.floor(mins / 60)}h`;
    return `${Math.floor(mins / 1440)}d`;
  };
  return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("space-y-3", className) }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React105__namespace.createElement("label", { className: "text-xs text-muted-foreground" }, "Hours"), /* @__PURE__ */ React105__namespace.createElement(
    Input,
    {
      type: "number",
      min: 0,
      max: Math.floor(max / 60),
      value: hours,
      onChange: handleHoursChange,
      className: "w-full"
    }
  )), /* @__PURE__ */ React105__namespace.createElement("span", { className: "pt-6 text-muted-foreground" }, ":"), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React105__namespace.createElement("label", { className: "text-xs text-muted-foreground" }, "Minutes"), /* @__PURE__ */ React105__namespace.createElement(
    Input,
    {
      type: "number",
      min: 0,
      max: 59,
      value: minutes,
      onChange: handleMinutesChange,
      className: "w-full"
    }
  ))), showPresets && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex flex-wrap gap-1" }, presets.map((preset) => /* @__PURE__ */ React105__namespace.createElement(
    Button,
    {
      key: preset,
      type: "button",
      variant: value === preset ? "default" : "outline",
      size: "sm",
      onClick: () => handleChange(Math.floor(preset / 60), preset % 60)
    },
    formatPreset(preset)
  ))));
}
function FilterChip({
  label,
  selected = false,
  onToggle,
  onRemove,
  count,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    Badge,
    {
      variant: selected ? "default" : "outline",
      className: cn(
        "cursor-pointer transition-all hover:opacity-80",
        onToggle && "pr-1",
        className
      ),
      onClick: onToggle
    },
    label,
    count !== void 0 && /* @__PURE__ */ React.createElement("span", { className: "ml-1 text-xs opacity-70" }, "(", count, ")"),
    onRemove && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: (e) => {
          e.stopPropagation();
          onRemove();
        },
        className: "ml-1 hover:bg-background/20 rounded p-0.5"
      },
      /* @__PURE__ */ React.createElement(lucideReact.X, { className: "h-3 w-3" })
    )
  );
}
var FormFieldContext = React105__namespace.createContext({});
var useFormField = () => {
  const fieldContext = React105__namespace.useContext(FormFieldContext);
  const itemContext = React105__namespace.useContext(FormItemContext);
  const { getFieldState } = reactHookForm.useFormContext();
  const formState = reactHookForm.useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React105__namespace.createContext({});
function FormItem({ className, ...props }) {
  const id = React105__namespace.useId();
  return /* @__PURE__ */ React105__namespace.createElement(FormItemContext.Provider, { value: { id } }, /* @__PURE__ */ React105__namespace.createElement("div", { "data-slot": "form-item", className: cn("grid gap-2", className), ...props }));
}
function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ React105__namespace.createElement(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ React105__namespace.createElement(
    radixUi.Slot.Root,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ React105__namespace.createElement(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className),
      ...props
    },
    body
  );
}
function FieldRenderer(props) {
  const {
    type,
    name,
    watchFields,
    isDisabled,
    isHidden,
    when,
    onChangeCallback,
    disabled: staticDisabled
  } = props;
  const { control, getValues, setValue } = reactHookForm.useFormContext();
  const watchedValues = reactHookForm.useWatch({
    control,
    ...watchFields ? { name: watchFields } : {}
  });
  const currentValue = React105__namespace.useMemo(() => {
    try {
      return getValues(name);
    } catch {
      return void 0;
    }
  }, [getValues, name, ...watchFields || []]);
  const shouldBeHidden = React105__namespace.useMemo(() => {
    if (isHidden) {
      return isHidden(watchedValues, currentValue);
    }
    if (when) {
      return !when(watchedValues);
    }
    return false;
  }, [isHidden, when, watchedValues, currentValue]);
  const shouldBeDisabled = React105__namespace.useMemo(() => {
    if (staticDisabled === true) {
      return true;
    }
    if (isDisabled) {
      return isDisabled(watchedValues, currentValue);
    }
    return false;
  }, [staticDisabled, isDisabled, watchedValues, currentValue]);
  const handleValueChange = React105__namespace.useCallback(
    (value) => {
      setValue(name, value);
      if (onChangeCallback) {
        onChangeCallback(value, watchedValues, { control, getValues, setValue });
      }
    },
    [name, setValue, onChangeCallback, watchedValues, control, getValues]
  );
  if (shouldBeHidden) {
    return null;
  }
  if (props.render && type !== "custom") {
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
    required: props.rules?.required,
    className: props.className
  };
  switch (type) {
    case "text":
    case "email":
    case "password":
    case "number":
    case "tel":
    case "url":
      return /* @__PURE__ */ React105__namespace.createElement(
        TextField,
        {
          ...commonProps,
          type,
          placeholder: props.placeholder,
          readOnly: props.readOnly,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "textarea":
      return /* @__PURE__ */ React105__namespace.createElement(
        TextareaField,
        {
          ...commonProps,
          placeholder: props.placeholder,
          readOnly: props.readOnly,
          rows: props.rows,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "select":
      return /* @__PURE__ */ React105__namespace.createElement(
        SelectField,
        {
          ...commonProps,
          options: props.options,
          placeholder: props.placeholder,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "combobox":
    case "multi-select":
      return /* @__PURE__ */ React105__namespace.createElement(
        ComboboxField,
        {
          ...commonProps,
          options: props.options,
          placeholder: props.placeholder,
          searchable: type === "combobox",
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "checkbox":
      return /* @__PURE__ */ React105__namespace.createElement(
        CheckboxField,
        {
          ...commonProps,
          checked: !!currentValue,
          onCheckedChange: handleValueChange
        }
      );
    case "switch":
      return /* @__PURE__ */ React105__namespace.createElement(
        SwitchField,
        {
          ...commonProps,
          checked: !!currentValue,
          onCheckedChange: handleValueChange
        }
      );
    case "radio":
      return /* @__PURE__ */ React105__namespace.createElement(
        RadioGroupField,
        {
          ...commonProps,
          options: props.options,
          value: currentValue,
          onValueChange: handleValueChange
        }
      );
    case "date":
    case "datetime":
      return /* @__PURE__ */ React105__namespace.createElement(
        DateField,
        {
          ...commonProps,
          showTime: type === "datetime",
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "time":
      return /* @__PURE__ */ React105__namespace.createElement(
        TextField,
        {
          ...commonProps,
          type: "text",
          placeholder: "HH:MM",
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "file":
      return /* @__PURE__ */ React105__namespace.createElement(
        FileUploadField,
        {
          ...commonProps,
          accept: props.accept,
          maxSize: props.maxSize,
          maxFiles: props.maxFiles,
          onUpload: props.onUpload,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "currency":
      return /* @__PURE__ */ React105__namespace.createElement(
        CurrencyField,
        {
          ...commonProps,
          placeholder: props.placeholder,
          readOnly: props.readOnly,
          currencySymbol: props.currencySymbol,
          currencyPosition: props.currencyPosition,
          allowNegative: props.allowNegative,
          decimalPlaces: props.decimalPlaces,
          minValue: props.minValue,
          maxValue: props.maxValue,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "phone":
      return /* @__PURE__ */ React105__namespace.createElement(
        PhoneField,
        {
          ...commonProps,
          placeholder: props.placeholder,
          readOnly: props.readOnly,
          defaultCountry: props.defaultCountry,
          showCountrySelect: props.showCountrySelect,
          countryFieldName: props.countryFieldName,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "percentage":
      return /* @__PURE__ */ React105__namespace.createElement(
        PercentageField,
        {
          ...commonProps,
          placeholder: props.placeholder,
          readOnly: props.readOnly,
          minValue: props.minValue,
          maxValue: props.maxValue,
          decimalPlaces: props.decimalPlaces,
          step: props.step,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "otp":
      return /* @__PURE__ */ React105__namespace.createElement(
        OTPField,
        {
          ...commonProps,
          otpLength: props.otpLength,
          otpType: props.otpType,
          showSeparator: props.showSeparator,
          groupSize: props.groupSize,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "rating":
      return /* @__PURE__ */ React105__namespace.createElement(
        RatingField,
        {
          ...commonProps,
          maxRating: props.maxRating,
          showNumbers: props.showNumbers,
          labels: props.labels,
          size: props.size,
          allowClear: props.allowClear,
          icon: props.icon,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "color":
      return /* @__PURE__ */ React105__namespace.createElement(
        ColorField,
        {
          ...commonProps,
          format: props.format,
          showAlpha: props.showAlpha,
          presets: props.presets,
          showPreview: props.showPreview,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "slider":
      return /* @__PURE__ */ React105__namespace.createElement(
        SliderField,
        {
          ...commonProps,
          min: props.min,
          max: props.max,
          step: props.step,
          showInput: props.showInput,
          showValue: props.showValue,
          suffix: props.suffix,
          orientation: props.orientation,
          inverted: props.inverted,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "array":
      return /* @__PURE__ */ React105__namespace.createElement(
        ArrayField,
        {
          ...commonProps,
          fields: props.fields,
          minItems: props.minItems,
          maxItems: props.maxItems,
          addItemLabel: props.addItemLabel,
          showReorder: props.showReorder,
          itemTitleField: props.itemTitleField,
          itemTitleTemplate: props.itemTitleTemplate,
          itemDefaultValue: props.itemDefaultValue,
          collapsibleItems: props.collapsibleItems,
          defaultCollapsed: props.defaultCollapsed
        }
      );
    case "chip":
      return /* @__PURE__ */ React105__namespace.createElement(
        InputChipField,
        {
          ...commonProps,
          placeholder: props.placeholder,
          maxChips: props.maxChips,
          allowDuplicates: props.allowDuplicates,
          transform: props.transform,
          validateChip: props.validateChip
        }
      );
    case "custom":
      return props.render?.({
        value: currentValue,
        onChange: handleValueChange,
        form: { control, getValues, setValue, watchedValues },
        field: props
      });
    case "rich-text":
    case "code":
      return /* @__PURE__ */ React105__namespace.createElement(
        TextareaField,
        {
          ...commonProps,
          placeholder: props.placeholder,
          rows: 6,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    case "address":
    case "name":
    case "credit-card":
      return /* @__PURE__ */ React105__namespace.createElement(
        TextField,
        {
          ...commonProps,
          type: "text",
          placeholder: props.placeholder,
          value: currentValue,
          onChange: handleValueChange
        }
      );
    default:
      return null;
  }
}

// src/blocks/data-entry/form-builder/fields/array-field.tsx
function ArrayField({
  name,
  label,
  description,
  disabled = false,
  required = false,
  className,
  fields,
  minItems = 0,
  maxItems = Infinity,
  addItemLabel = "Add Item",
  showReorder = false,
  itemTitleField,
  itemTitleTemplate,
  itemDefaultValue,
  collapsibleItems = true,
  defaultCollapsed = false
}) {
  const { control, watch } = reactHookForm.useFormContext();
  const [openItems, setOpenItems] = React105__namespace.useState({});
  const {
    fields: arrayFields,
    append,
    remove,
    move
  } = reactHookForm.useFieldArray({
    control,
    name
  });
  React105__namespace.useEffect(() => {
    const initialOpenState = {};
    arrayFields.forEach((_, index) => {
      initialOpenState[index] = !defaultCollapsed;
    });
    setOpenItems((prev) => ({ ...initialOpenState, ...prev }));
  }, [arrayFields.length, defaultCollapsed]);
  const canAdd = arrayFields.length < maxItems;
  const canRemoveItems = arrayFields.length > minItems;
  const handleAdd = () => {
    if (canAdd) {
      append(itemDefaultValue ?? {});
      const newIndex = arrayFields.length;
      setOpenItems((prev) => ({ ...prev, [newIndex]: true }));
    }
  };
  const handleRemove = (index) => {
    if (canRemoveItems) {
      remove(index);
      setOpenItems((prev) => {
        const updated = {};
        Object.entries(prev).forEach(([key, value]) => {
          const numKey = parseInt(key, 10);
          if (numKey < index) {
            updated[numKey] = value;
          } else if (numKey > index) {
            updated[numKey - 1] = value;
          }
        });
        return updated;
      });
    }
  };
  const handleMove = (fromIndex, toIndex) => {
    move(fromIndex, toIndex);
    setOpenItems((prev) => {
      const updated = {};
      Object.entries(prev).forEach(([key, value]) => {
        const numKey = parseInt(key, 10);
        if (numKey === fromIndex) {
          updated[toIndex] = value;
        } else if (numKey === toIndex) {
          updated[fromIndex] = value;
        } else {
          updated[numKey] = value;
        }
      });
      return updated;
    });
  };
  const handleToggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  const getItemTitle = (index) => {
    const values = watch();
    const arrayValue = values[name];
    const item = arrayValue?.[index];
    if (!item) return `Item ${index + 1}`;
    if (itemTitleTemplate) {
      const parts = itemTitleTemplate.split(/\{([^}]+)\}/);
      return parts.map((part) => {
        if (part.startsWith("{") && part.endsWith("}")) return "";
        if (part.trim()) {
          const value = part.split(".").reduce((obj, key) => obj?.[key], item);
          return value ?? "";
        }
        return "";
      }).join("").trim() || `Item ${index + 1}`;
    }
    if (itemTitleField) {
      const titleValue = itemTitleField.split(".").reduce((obj, key) => obj?.[key], item);
      if (titleValue) return String(titleValue);
    }
    return `Item ${index + 1}`;
  };
  return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn("space-y-4", className) }, label && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React105__namespace.createElement(FormLabel, null, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-xs text-muted-foreground" }, arrayFields.length, " item(s)")), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-3" }, arrayFields.map((field, index) => {
    const isOpen = openItems[index] ?? true;
    const canDelete = canRemoveItems && !disabled;
    return /* @__PURE__ */ React105__namespace.createElement(Card, { key: field.id, className: "relative" }, collapsibleItems ? /* @__PURE__ */ React105__namespace.createElement(CardHeader, { className: "py-3 px-4" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, showReorder && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        className: "h-6 w-6 p-0 cursor-move",
        disabled: disabled || index === 0,
        onClick: () => handleMove(index, index - 1)
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronUp, { className: "h-4 w-4" })
    ), /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        className: "h-6 w-6 p-0 cursor-move",
        disabled: disabled || index === arrayFields.length - 1,
        onClick: () => handleMove(index, index + 1)
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronDown, { className: "h-4 w-4" })
    )), /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        className: "h-8 flex-1 justify-start px-2 font-normal text-left",
        onClick: () => handleToggleItem(index)
      },
      isOpen ? /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronDown, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronRight, { className: "h-4 w-4 mr-2" }),
      /* @__PURE__ */ React105__namespace.createElement("span", { className: "truncate" }, getItemTitle(index))
    ), canDelete && /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        className: "h-8 w-8 p-0 text-destructive hover:text-destructive",
        onClick: () => handleRemove(index)
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.Trash2, { className: "h-4 w-4" })
    ))) : /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-between p-4 pb-0" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, showReorder && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center text-muted-foreground" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.GripVertical, { className: "h-4 w-4" })), /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-sm font-medium" }, getItemTitle(index))), canDelete && /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        className: "h-8 w-8 p-0 text-destructive hover:text-destructive",
        onClick: () => handleRemove(index)
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.Trash2, { className: "h-4 w-4" })
    )), (isOpen || !collapsibleItems) && /* @__PURE__ */ React105__namespace.createElement(CardContent, { className: "p-4 pt-0 space-y-4" }, fields.map((fieldConfig) => /* @__PURE__ */ React105__namespace.createElement(
      reactHookForm.Controller,
      {
        key: `${field.id}-${fieldConfig.name}`,
        name: `${name}.${index}.${fieldConfig.name}`,
        control,
        render: () => /* @__PURE__ */ React105__namespace.createElement(
          FieldRenderer,
          {
            ...fieldConfig,
            name: `${name}.${index}.${fieldConfig.name}`,
            disabled
          }
        )
      }
    )), !collapsibleItems && canDelete && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex justify-end pt-2 border-t" }, /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        className: "text-destructive",
        onClick: () => handleRemove(index)
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.Trash2, { className: "h-4 w-4 mr-2" }),
      "Remove"
    ))));
  }), arrayFields.length === 0 && /* @__PURE__ */ React105__namespace.createElement("div", { className: "text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg" }, "No items added yet"), canAdd && /* @__PURE__ */ React105__namespace.createElement(
    Button,
    {
      type: "button",
      variant: "outline",
      className: "w-full",
      onClick: handleAdd,
      disabled
    },
    /* @__PURE__ */ React105__namespace.createElement(lucideReact.Plus, { className: "h-4 w-4 mr-2" }),
    addItemLabel
  ), !canAdd && maxItems !== Infinity && /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-xs text-muted-foreground text-center" }, "Maximum ", maxItems, " item(s) reached")), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
}
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Checkbox.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      radixUi.Checkbox.Indicator,
      {
        "data-slot": "checkbox-indicator",
        className: "grid place-content-center text-current transition-none"
      },
      /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CheckIcon, { className: "size-3.5" })
    )
  );
}

// src/blocks/data-entry/form-builder/fields/checkbox-field.tsx
function CheckboxField({
  name,
  label,
  description,
  disabled = false,
  required = false,
  className,
  checked,
  onCheckedChange
}) {
  const { control } = reactHookForm.useFormContext();
  const isControlled = checked !== void 0 && onCheckedChange !== void 0;
  if (isControlled) {
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
      Checkbox,
      {
        id: name,
        checked,
        onCheckedChange,
        disabled
      }
    ), label && /* @__PURE__ */ React105__namespace.createElement(
      Label,
      {
        htmlFor: name,
        className: cn(
          "font-medium",
          disabled && "cursor-not-allowed opacity-50",
          required && "after:content-['*'] after:text-destructive after:ml-1"
        )
      },
      label
    )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
        Checkbox,
        {
          id: name,
          checked: !!field.value,
          onCheckedChange: field.onChange,
          disabled,
          "aria-invalid": !!error
        }
      ), label && /* @__PURE__ */ React105__namespace.createElement(
        Label,
        {
          htmlFor: name,
          className: cn(
            "font-medium",
            disabled && "cursor-not-allowed opacity-50",
            error && "text-destructive"
          )
        },
        label,
        required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")
      )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))
    }
  );
}
var DEFAULT_PRESETS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#000000",
  "#6b7280",
  "#ffffff"
];
function ColorField({
  name,
  label,
  description,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  format: format3 = "hex",
  showAlpha = false,
  presets = DEFAULT_PRESETS,
  showPreview = true,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const [open, setOpen] = React105__namespace.useState(false);
  const isControlled = value !== void 0 && onChange !== void 0;
  const formatColor = React105__namespace.useCallback((val) => {
    if (!val) return "";
    return val;
  }, []);
  if (isControlled) {
    const handleColorChange = (e) => {
      onChange(e.target.value);
    };
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex gap-2" }, showPreview && /* @__PURE__ */ React105__namespace.createElement(Popover, { open, onOpenChange: setOpen }, /* @__PURE__ */ React105__namespace.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "outline",
        className: cn("h-9 w-9 shrink-0 p-0 border-2"),
        disabled: disabled || readOnly,
        style: {
          backgroundColor: value || "transparent"
        },
        "aria-label": "Select color"
      }
    )), /* @__PURE__ */ React105__namespace.createElement(PopoverContent, { className: "w-auto p-3", align: "start" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React105__namespace.createElement(
      Input,
      {
        type: "color",
        value: value || "#000000",
        onChange: handleColorChange,
        className: "h-20 w-20 cursor-pointer border-0 p-0",
        disabled: disabled || readOnly
      }
    )), presets && presets.length > 0 && /* @__PURE__ */ React105__namespace.createElement("div", { className: "grid grid-cols-5 gap-1.5" }, presets.map((preset) => /* @__PURE__ */ React105__namespace.createElement(
      "button",
      {
        key: preset,
        type: "button",
        onClick: () => {
          onChange(preset);
          setOpen(false);
        },
        className: cn(
          "h-6 w-6 rounded border border-border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
          value === preset && "ring-2 ring-ring ring-offset-2"
        ),
        style: { backgroundColor: preset },
        "aria-label": `Select color ${preset}`
      }
    )))))), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React105__namespace.createElement(
      Input,
      {
        id: name,
        type: "text",
        placeholder: "#000000",
        value: formatColor(value),
        onChange: (e) => onChange(e.target.value),
        disabled: disabled || readOnly,
        className: cn("font-mono", showPreview && "flex-1")
      }
    ))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))));
  }
  return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => {
        const handleColorChange = (e) => {
          field.onChange(e.target.value);
        };
        return /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex gap-2" }, showPreview && /* @__PURE__ */ React105__namespace.createElement(Popover, { open, onOpenChange: setOpen }, /* @__PURE__ */ React105__namespace.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement(
          Button,
          {
            type: "button",
            variant: "outline",
            className: cn(
              "h-9 w-9 shrink-0 p-0 border-2",
              error && "border-destructive"
            ),
            disabled: disabled || readOnly,
            style: {
              backgroundColor: field.value || "transparent"
            },
            "aria-label": "Select color"
          }
        )), /* @__PURE__ */ React105__namespace.createElement(PopoverContent, { className: "w-auto p-3", align: "start" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React105__namespace.createElement(
          Input,
          {
            type: "color",
            value: field.value || "#000000",
            onChange: handleColorChange,
            className: "h-20 w-20 cursor-pointer border-0 p-0",
            disabled: disabled || readOnly
          }
        )), presets && presets.length > 0 && /* @__PURE__ */ React105__namespace.createElement("div", { className: "grid grid-cols-5 gap-1.5" }, presets.map((preset) => /* @__PURE__ */ React105__namespace.createElement(
          "button",
          {
            key: preset,
            type: "button",
            onClick: () => {
              field.onChange(preset);
              setOpen(false);
            },
            className: cn(
              "h-6 w-6 rounded border border-border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
              field.value === preset && "ring-2 ring-ring ring-offset-2"
            ),
            style: { backgroundColor: preset },
            "aria-label": `Select color ${preset}`
          }
        )))))), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React105__namespace.createElement(
          Input,
          {
            ...field,
            id: name,
            type: "text",
            placeholder: "#000000",
            value: formatColor(field.value),
            onChange: (e) => field.onChange(e.target.value),
            disabled: disabled || readOnly,
            "aria-invalid": !!error,
            className: cn("font-mono", showPreview && "flex-1")
          }
        ))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null)));
      }
    }
  ));
}
function ComboboxField({
  name,
  label,
  description,
  placeholder = "Select...",
  options = [],
  disabled = false,
  required = false,
  searchable = true,
  className,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(Combobox, { value, onValueChange: onChange, disabled }, /* @__PURE__ */ React105__namespace.createElement(
      ComboboxInput,
      {
        placeholder,
        disabled,
        showClear: true,
        showTrigger: false
      }
    ), /* @__PURE__ */ React105__namespace.createElement(ComboboxContent, null, /* @__PURE__ */ React105__namespace.createElement(ComboboxList, null, options.map((option) => /* @__PURE__ */ React105__namespace.createElement(ComboboxItem, { key: option.value, value: option.value, disabled: option.disabled }, option.label)), /* @__PURE__ */ React105__namespace.createElement(ComboboxEmpty, null, "No results found"))))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(Combobox, { value: field.value, onValueChange: field.onChange, disabled }, /* @__PURE__ */ React105__namespace.createElement(
        ComboboxInput,
        {
          placeholder,
          disabled,
          showClear: true,
          showTrigger: false
        }
      ), /* @__PURE__ */ React105__namespace.createElement(ComboboxContent, null, /* @__PURE__ */ React105__namespace.createElement(ComboboxList, null, options.map((option) => /* @__PURE__ */ React105__namespace.createElement(
        ComboboxItem,
        {
          key: option.value,
          value: option.value,
          disabled: option.disabled
        },
        option.label
      )), /* @__PURE__ */ React105__namespace.createElement(ComboboxEmpty, null, "No results found"))))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))
    }
  );
}
function CurrencyField({
  name,
  label,
  description,
  placeholder = "0.00",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  currencySymbol = "$",
  currencyPosition = "prefix",
  allowNegative = false,
  decimalPlaces = 2,
  minValue,
  maxValue,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const [displayValue, setDisplayValue] = React105__namespace.useState("");
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    React105__namespace.useEffect(() => {
      if (value !== void 0 && value !== null) {
        const numValue = typeof value === "number" ? value : parseFloat(value);
        if (!Number.isNaN(numValue)) {
          setDisplayValue(formatCurrency(numValue.toString()));
        }
      } else {
        setDisplayValue("");
      }
    }, [value]);
    const handleChange = (e) => {
      const inputValue = e.target.value;
      if (inputValue === "") {
        setDisplayValue("");
        onChange("");
        return;
      }
      const rawValue = parseValue(inputValue);
      const number = parseFloat(rawValue);
      if (!allowNegative && number < 0) {
        return;
      }
      if (minValue !== void 0 && number < minValue) {
        return;
      }
      if (maxValue !== void 0 && number > maxValue) {
        return;
      }
      const formatted = formatCurrency(rawValue);
      setDisplayValue(formatted);
      onChange(number);
    };
    const handleBlur = () => {
      if (displayValue) {
        const number = parseFloat(parseValue(displayValue));
        if (!Number.isNaN(number)) {
          setDisplayValue(formatCurrency(number.toString()));
        }
      }
    };
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(InputGroup, null, currencyPosition === "prefix" && /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-start" }, currencySymbol), /* @__PURE__ */ React105__namespace.createElement(
      InputGroupInput,
      {
        id: name,
        type: "text",
        inputMode: "decimal",
        placeholder,
        value: displayValue,
        onChange: handleChange,
        onBlur: handleBlur,
        disabled,
        readOnly
      }
    ), currencyPosition === "suffix" && /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-end" }, currencySymbol))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  const formatCurrency = React105__namespace.useCallback(
    (value2) => {
      if (!value2) return "";
      const numericValue = value2.replace(/[^0-9.-]/g, "");
      const number = parseFloat(numericValue);
      if (Number.isNaN(number)) return "";
      return number.toLocaleString("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces
      });
    },
    [decimalPlaces]
  );
  const parseValue = React105__namespace.useCallback((displayValue2) => {
    return displayValue2.replace(/,/g, "");
  }, []);
  return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => {
        React105__namespace.useEffect(() => {
          if (field.value !== void 0 && field.value !== null) {
            const numValue = typeof field.value === "number" ? field.value : parseFloat(field.value);
            if (!Number.isNaN(numValue)) {
              setDisplayValue(formatCurrency(numValue.toString()));
            }
          } else {
            setDisplayValue("");
          }
        }, [field.value]);
        const handleChange = (e) => {
          const inputValue = e.target.value;
          if (inputValue === "") {
            setDisplayValue("");
            field.onChange("");
            return;
          }
          const rawValue = parseValue(inputValue);
          const number = parseFloat(rawValue);
          if (!allowNegative && number < 0) {
            return;
          }
          if (minValue !== void 0 && number < minValue) {
            return;
          }
          if (maxValue !== void 0 && number > maxValue) {
            return;
          }
          const formatted = formatCurrency(rawValue);
          setDisplayValue(formatted);
          field.onChange(number);
        };
        const handleBlur = () => {
          if (displayValue) {
            const number = parseFloat(parseValue(displayValue));
            if (!Number.isNaN(number)) {
              setDisplayValue(formatCurrency(number.toString()));
            }
          }
        };
        return /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(InputGroup, { "data-invalid": !!error || void 0 }, currencyPosition === "prefix" && /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-start" }, currencySymbol), /* @__PURE__ */ React105__namespace.createElement(
          InputGroupInput,
          {
            id: name,
            type: "text",
            inputMode: "decimal",
            placeholder,
            value: displayValue,
            onChange: handleChange,
            onBlur: handleBlur,
            disabled,
            readOnly,
            "aria-invalid": !!error
          }
        ), currencyPosition === "suffix" && /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-end" }, currencySymbol)));
      }
    }
  ), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
}
function DateField({
  name,
  label,
  description,
  placeholder = "Pick a date",
  disabled = false,
  required = false,
  showTime = false,
  dateFormat = "PPP",
  className,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    return /* @__PURE__ */ React105__namespace.default.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.default.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.default.createElement(Popover, null, /* @__PURE__ */ React105__namespace.default.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.default.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.default.createElement(
      Button,
      {
        variant: "outline",
        className: cn(
          "w-full justify-start text-left font-normal",
          !value && "text-muted-foreground"
        ),
        disabled
      },
      /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CalendarIcon, { className: "mr-2 h-4 w-4" }),
      value ? dateFns.format(value, dateFormat) : /* @__PURE__ */ React105__namespace.default.createElement("span", null, placeholder)
    ))), /* @__PURE__ */ React105__namespace.default.createElement(PopoverContent, { className: "w-auto p-0", align: "start" }, /* @__PURE__ */ React105__namespace.default.createElement(
      Calendar,
      {
        mode: "single",
        selected: value,
        onSelect: onChange,
        disabled,
        autoFocus: true
      }
    ))), description && /* @__PURE__ */ React105__namespace.default.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.default.createElement(FormMessage, null));
  }
  return /* @__PURE__ */ React105__namespace.default.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.default.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.default.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.default.createElement(Popover, null, /* @__PURE__ */ React105__namespace.default.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.default.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.default.createElement(
        Button,
        {
          variant: "outline",
          className: cn(
            "w-full justify-start text-left font-normal",
            !field.value && "text-muted-foreground",
            error && "border-destructive"
          ),
          disabled
        },
        /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CalendarIcon, { className: "mr-2 h-4 w-4" }),
        field.value ? dateFns.format(field.value, dateFormat) : /* @__PURE__ */ React105__namespace.default.createElement("span", null, placeholder)
      ))), /* @__PURE__ */ React105__namespace.default.createElement(PopoverContent, { className: "w-auto p-0", align: "start" }, /* @__PURE__ */ React105__namespace.default.createElement(
        Calendar,
        {
          mode: "single",
          selected: field.value,
          onSelect: field.onChange,
          disabled,
          autoFocus: true
        }
      ))), description && /* @__PURE__ */ React105__namespace.default.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.default.createElement(FormMessage, null))
    }
  );
}
function UploadDropzone({
  accept,
  maxSize = 10 * 1024 * 1024,
  // 10MB default
  maxFiles = 1,
  onFilesSelected,
  onFileSelected,
  uploadProgress,
  isUploading = false,
  onFileRemove,
  uploadedFiles = [],
  disabled = false,
  label = "Upload files",
  description,
  className
}) {
  const [isDragOver, setIsDragOver] = React105__namespace.useState(false);
  const [files, setFiles] = React105__namespace.useState([]);
  const inputRef = React105__namespace.useRef(null);
  const handleDragOver = React105__namespace.useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);
  const handleDragLeave = React105__namespace.useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);
  const validateFile = (file) => {
    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${formatFileSize(maxSize)}`;
    }
    if (accept) {
      const acceptedTypes = accept.split(",").map((t) => t.trim());
      const fileType = file.type;
      const fileName = file.name.toLowerCase();
      const isAccepted = acceptedTypes.some((type) => {
        if (type.startsWith("image/") || type.startsWith("video/") || type.startsWith("audio/")) {
          return fileType === type || fileType.startsWith(`${type.split("/")[0]}/`);
        }
        if (type.startsWith(".")) {
          return fileName.endsWith(type.toLowerCase());
        }
        return fileType === type;
      });
      if (!isAccepted) {
        return `File type not accepted. Accepted: ${accept}`;
      }
    }
    return null;
  };
  const handleFiles = React105__namespace.useCallback(
    async (newFiles) => {
      const validFiles = [];
      const errors = [];
      for (const file of newFiles) {
        const error = validateFile(file);
        if (error) {
          errors.push(error);
        } else if (validFiles.length < maxFiles) {
          validFiles.push(file);
        }
      }
      if (errors.length > 0) {
        console.error(errors.join("\n"));
      }
      if (validFiles.length > 0) {
        setFiles((prev) => [...prev, ...validFiles].slice(0, maxFiles));
        await onFilesSelected(validFiles);
        if (onFileSelected && validFiles.length === 1) {
          onFileSelected(validFiles[0]);
        }
      }
    },
    [maxFiles, onFilesSelected, onFileSelected, validateFile]
  );
  const handleDrop = React105__namespace.useCallback(
    async (e) => {
      e.preventDefault();
      setIsDragOver(false);
      if (disabled) return;
      const droppedFiles = Array.from(e.dataTransfer.files);
      await handleFiles(droppedFiles);
    },
    [disabled, handleFiles]
  );
  const handleInputChange = React105__namespace.useCallback(
    async (e) => {
      if (disabled) return;
      const selectedFiles = Array.from(e.target.files || []);
      await handleFiles(selectedFiles);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [disabled, handleFiles]
  );
  const handleRemoveFile = React105__namespace.useCallback(
    (file, index) => {
      setFiles((prev) => prev.filter((_, i) => i !== index));
      onFileRemove?.(file);
    },
    [onFileRemove]
  );
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Math.round(bytes / k ** i * 100) / 100} ${sizes[i]}`;
  };
  return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("w-full space-y-3", className) }, /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      onClick: () => !disabled && inputRef.current?.click(),
      className: cn(
        "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors",
        "hover:bg-muted/50",
        isDragOver && "border-primary bg-muted",
        disabled && "cursor-not-allowed opacity-50",
        isUploading && "pointer-events-none"
      )
    },
    /* @__PURE__ */ React105__namespace.createElement(
      "input",
      {
        ref: inputRef,
        type: "file",
        accept,
        multiple: maxFiles > 1,
        onChange: handleInputChange,
        className: "hidden",
        disabled
      }
    ),
    /* @__PURE__ */ React105__namespace.createElement(
      lucideReact.UploadCloud,
      {
        className: cn("mb-4 h-10 w-10", isDragOver ? "text-primary" : "text-muted-foreground")
      }
    ),
    /* @__PURE__ */ React105__namespace.createElement("p", { className: "mb-1 text-sm font-medium" }, label),
    description && /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-center text-sm text-muted-foreground" }, description),
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "mt-2 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground" }, accept && /* @__PURE__ */ React105__namespace.createElement("span", null, "Accepted:", " ", accept.split(",").map((t) => t.trim().toUpperCase()).join(", ")), maxSize && /* @__PURE__ */ React105__namespace.createElement("span", null, "Max size: ", formatFileSize(maxSize)), maxFiles > 1 && /* @__PURE__ */ React105__namespace.createElement("span", null, "Max files: ", maxFiles))
  ), isUploading && uploadProgress !== void 0 && /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React105__namespace.createElement(Progress, { value: uploadProgress, className: "h-2" }), /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-right text-xs text-muted-foreground" }, uploadProgress, "%")), (files.length > 0 || uploadedFiles.length > 0) && /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-2" }, files.map((file, index) => /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      key: `${file.name}-${index}`,
      className: "flex items-center justify-between rounded-md border bg-muted/50 p-3"
    },
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.File, { className: "h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ React105__namespace.createElement("div", null, /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-sm font-medium" }, file.name), /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-xs text-muted-foreground" }, formatFileSize(file.size)))),
    !isUploading && /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "icon",
        onClick: () => handleRemoveFile(file, index),
        className: "h-8 w-8"
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.X, { className: "h-4 w-4" })
    )
  )), uploadedFiles.map((file, index) => /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      key: `${file.name}-${index}`,
      className: "flex items-center justify-between rounded-md border bg-muted/50 p-3"
    },
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.File, { className: "h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ React105__namespace.createElement("div", null, /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-sm font-medium" }, file.name), /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-xs text-muted-foreground" }, formatFileSize(file.size)))),
    onFileRemove && /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "icon",
        onClick: () => onFileRemove(file),
        className: "h-8 w-8"
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.X, { className: "h-4 w-4" })
    )
  ))));
}

// src/blocks/data-entry/form-builder/fields/file-upload-field.tsx
function FileUploadField({
  name,
  label,
  description,
  accept,
  maxSize,
  maxFiles = 1,
  disabled = false,
  required = false,
  onUpload,
  className,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const [isUploading, setIsUploading] = React105__namespace.useState(false);
  const [uploadProgress, setUploadProgress] = React105__namespace.useState();
  const [uploadedFiles, setUploadedFiles] = React105__namespace.useState([]);
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    const handleFilesSelected2 = React105__namespace.useCallback(
      async (files) => {
        if (!onUpload) return;
        setIsUploading(true);
        setUploadProgress(0);
        try {
          const interval = setInterval(() => {
            setUploadProgress((prev) => {
              if (prev === void 0) return 0;
              if (prev >= 100) {
                clearInterval(interval);
                return 100;
              }
              return prev + 10;
            });
          }, 200);
          await onUpload(files);
          setUploadProgress(100);
          clearInterval(interval);
          setUploadedFiles((prev) => [
            ...prev,
            ...files.map((file) => ({
              name: file.name,
              size: file.size
            }))
          ]);
        } finally {
          setIsUploading(false);
          setUploadProgress(void 0);
        }
      },
      [onUpload]
    );
    const handleFileRemove2 = React105__namespace.useCallback((file) => {
      setUploadedFiles((prev) => prev.filter((f) => f.name !== file.name));
    }, []);
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, null, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
      UploadDropzone,
      {
        accept,
        maxSize,
        maxFiles,
        onFilesSelected: handleFilesSelected2,
        isUploading,
        uploadProgress,
        uploadedFiles,
        onFileRemove: handleFileRemove2,
        disabled,
        label: value?.length ? "Add more files" : "Upload files",
        description
      }
    )), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  const handleFilesSelected = React105__namespace.useCallback(
    async (files) => {
      if (!onUpload) return;
      setIsUploading(true);
      setUploadProgress(0);
      try {
        const interval = setInterval(() => {
          setUploadProgress((prev) => {
            if (prev === void 0) return 0;
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 10;
          });
        }, 200);
        await onUpload(files);
        setUploadProgress(100);
        clearInterval(interval);
        setUploadedFiles((prev) => [
          ...prev,
          ...files.map((file) => ({
            name: file.name,
            size: file.size
          }))
        ]);
      } finally {
        setIsUploading(false);
        setUploadProgress(void 0);
      }
    },
    [onUpload]
  );
  const handleFileRemove = React105__namespace.useCallback((file) => {
    setUploadedFiles((prev) => prev.filter((f) => f.name !== file.name));
  }, []);
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, null, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
        UploadDropzone,
        {
          accept,
          maxSize,
          maxFiles,
          onFilesSelected: (files) => {
            handleFilesSelected(files);
            field.onChange(files);
          },
          isUploading,
          uploadProgress,
          uploadedFiles,
          onFileRemove: handleFileRemove,
          disabled,
          label: field.value?.length ? "Add more files" : "Upload files",
          description
        }
      )), error && /* @__PURE__ */ React105__namespace.createElement(FormMessage, null, error.message))
    }
  );
}
function InputChipField({
  name,
  label,
  description,
  placeholder = "Type and press Enter to add",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  maxChips = Infinity,
  allowDuplicates = false,
  transform = (v) => v.trim(),
  validateChip
}) {
  const { control } = reactHookForm.useFormContext();
  const [inputValue, setInputValue] = React105__namespace.useState("");
  const inputRef = React105__namespace.useRef(null);
  const handleAddChip = React105__namespace.useCallback(
    (value, currentValue) => {
      const transformed = transform(value);
      if (!transformed) return;
      if (validateChip) {
        const validation = validateChip(transformed);
        if (validation === false || typeof validation === "string") {
          return;
        }
      }
      if (!allowDuplicates && currentValue.includes(transformed)) {
        return;
      }
      if (currentValue.length >= maxChips) {
        return;
      }
      const newValue = [...currentValue, transformed];
      return newValue;
    },
    [allowDuplicates, maxChips, transform, validateChip]
  );
  const handleKeyDown = React105__namespace.useCallback(
    (e, currentValue, onChange) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        const newValue = handleAddChip(inputValue, currentValue);
        if (newValue) {
          onChange(newValue);
          setInputValue("");
        }
      } else if (e.key === "Backspace" && inputValue === "" && currentValue.length > 0) {
        const newValue = [...currentValue];
        newValue.pop();
        onChange(newValue);
      }
    },
    [inputValue, handleAddChip]
  );
  const handleRemoveChip = React105__namespace.useCallback(
    (index, currentValue, onChange) => {
      const newValue = [...currentValue];
      newValue.splice(index, 1);
      onChange(newValue);
      inputRef.current?.focus();
    },
    []
  );
  const handleBlur = React105__namespace.useCallback(
    (currentValue, onChange) => {
      if (inputValue.trim()) {
        const newValue = handleAddChip(inputValue, currentValue);
        if (newValue) {
          onChange(newValue);
        }
        setInputValue("");
      }
    },
    [inputValue, handleAddChip]
  );
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      defaultValue: [],
      render: ({ field, fieldState: { error } }) => {
        const currentValue = Array.isArray(field.value) ? field.value : [];
        const isReadOnly = readOnly || disabled;
        const canAdd = currentValue.length < maxChips;
        return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn("space-y-2", className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
          "div",
          {
            className: cn(
              "flex flex-wrap gap-2 p-2 min-h-[42px] rounded-md border bg-transparent",
              "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
              error && "border-destructive focus-within:border-destructive",
              isReadOnly && "opacity-50 pointer-events-none",
              className
            )
          },
          currentValue.map((chip, index) => /* @__PURE__ */ React105__namespace.createElement(
            "div",
            {
              key: `${chip}-${index}`,
              className: "inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
            },
            /* @__PURE__ */ React105__namespace.createElement("span", { className: "max-w-[200px] truncate" }, chip),
            !isReadOnly && /* @__PURE__ */ React105__namespace.createElement(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                className: "h-4 w-4 p-0 hover:bg-transparent",
                onClick: () => handleRemoveChip(index, currentValue, field.onChange)
              },
              /* @__PURE__ */ React105__namespace.createElement(lucideReact.X, { className: "h-3 w-3" })
            )
          )),
          canAdd && !isReadOnly && /* @__PURE__ */ React105__namespace.createElement(
            Input,
            {
              ref: inputRef,
              type: "text",
              value: inputValue,
              onChange: (e) => setInputValue(e.target.value),
              onKeyDown: (e) => handleKeyDown(e, currentValue, field.onChange),
              onBlur: () => handleBlur(currentValue, field.onChange),
              placeholder: currentValue.length === 0 ? placeholder : "",
              className: "flex-1 min-w-[120px] border-0 shadow-none focus-visible:ring-0 px-2 py-1 h-auto"
            }
          ),
          currentValue.length === 0 && isReadOnly && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-muted-foreground text-sm" }, "No chips added")
        )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
      }
    }
  );
}
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.createElement(
    inputOtp.OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement("div", { "data-slot": "input-otp-group", className: cn("flex items-center", className), ...props });
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React105__namespace.useContext(inputOtp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      ),
      ...props
    },
    char,
    hasFakeCaret && /* @__PURE__ */ React105__namespace.createElement("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }))
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement("div", { "data-slot": "input-otp-separator", role: "separator", ...props }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.MinusIcon, null));
}

// src/blocks/data-entry/form-builder/fields/otp-field.tsx
function OTPField({
  name,
  label,
  description,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  otpLength = 6,
  otpType = "numeric",
  showSeparator = true,
  groupSize = 3,
  autoFocus = false,
  placeholder = "\u25CB",
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const [otpValue, setOtpValue] = React105__namespace.useState("");
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    React105__namespace.useEffect(() => {
      if (value !== void 0 && value !== null) {
        setOtpValue(value.toString());
      } else {
        setOtpValue("");
      }
    }, [value]);
    const handleChange = (newValue) => {
      setOtpValue(newValue);
      onChange(newValue);
    };
    const firstGroupSize = showSeparator ? groupSize : otpLength;
    const secondGroupSize = showSeparator ? otpLength - groupSize : 0;
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex flex-col items-start gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
      InputOTP,
      {
        maxLength: otpLength,
        value: otpValue,
        onChange: handleChange,
        disabled,
        readOnly,
        autoFocus,
        pattern: otpType === "numeric" ? "[0-9]*" : "[0-9a-zA-Z]*",
        inputMode: otpType === "numeric" ? "numeric" : "text"
      },
      /* @__PURE__ */ React105__namespace.createElement(InputOTPGroup, null, Array.from({ length: firstGroupSize }).map((_, index) => /* @__PURE__ */ React105__namespace.createElement(InputOTPSlot, { key: index, index, className: cn("h-12 w-12 text-lg") }))),
      showSeparator && secondGroupSize > 0 && /* @__PURE__ */ React105__namespace.createElement(InputOTPSeparator, null),
      secondGroupSize > 0 && /* @__PURE__ */ React105__namespace.createElement(InputOTPGroup, null, Array.from({ length: secondGroupSize }).map((_, index) => /* @__PURE__ */ React105__namespace.createElement(
        InputOTPSlot,
        {
          key: index,
          index: firstGroupSize + index,
          className: cn("h-12 w-12 text-lg")
        }
      )))
    ), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))));
  }
  return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => {
        React105__namespace.useEffect(() => {
          if (field.value !== void 0 && field.value !== null) {
            setOtpValue(field.value.toString());
          }
        }, [field.value]);
        const handleChange = (newValue) => {
          setOtpValue(newValue);
          field.onChange(newValue);
        };
        const firstGroupSize = showSeparator ? groupSize : otpLength;
        const secondGroupSize = showSeparator ? otpLength - groupSize : 0;
        return /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex flex-col items-start gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
          InputOTP,
          {
            maxLength: otpLength,
            value,
            onChange: handleChange,
            disabled,
            readOnly,
            autoFocus,
            pattern: otpType === "numeric" ? "[0-9]*" : "[0-9a-zA-Z]*",
            inputMode: otpType === "numeric" ? "numeric" : "text",
            "aria-invalid": !!error,
            className: cn(error && "ring-destructive border-destructive")
          },
          /* @__PURE__ */ React105__namespace.createElement(InputOTPGroup, null, Array.from({ length: firstGroupSize }).map((_, index) => /* @__PURE__ */ React105__namespace.createElement(
            InputOTPSlot,
            {
              key: index,
              index,
              className: cn(
                "h-12 w-12 text-lg",
                error && "border-destructive ring-destructive/20"
              )
            }
          ))),
          showSeparator && secondGroupSize > 0 && /* @__PURE__ */ React105__namespace.createElement(InputOTPSeparator, null),
          secondGroupSize > 0 && /* @__PURE__ */ React105__namespace.createElement(InputOTPGroup, null, Array.from({ length: secondGroupSize }).map((_, index) => /* @__PURE__ */ React105__namespace.createElement(
            InputOTPSlot,
            {
              key: index,
              index: firstGroupSize + index,
              className: cn(
                "h-12 w-12 text-lg",
                error && "border-destructive ring-destructive/20"
              )
            }
          )))
        ), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null)));
      }
    }
  ));
}
function PercentageField({
  name,
  label,
  description,
  placeholder = "0",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  minValue = 0,
  maxValue = 100,
  decimalPlaces = 0,
  step = 1,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const [displayValue, setDisplayValue] = React105__namespace.useState("");
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    React105__namespace.useEffect(() => {
      if (value !== void 0 && value !== null) {
        const numValue = typeof value === "number" ? value : parseFloat(value);
        if (!Number.isNaN(numValue)) {
          setDisplayValue(formatPercentage(numValue.toString()));
        }
      } else {
        setDisplayValue("");
      }
    }, [value]);
    const handleChange = (e) => {
      const inputValue = e.target.value;
      if (inputValue === "") {
        setDisplayValue("");
        onChange("");
        return;
      }
      const validInput = /^-?\d*\.?\d*$/.test(inputValue);
      if (!validInput) return;
      const number = parseFloat(inputValue);
      if (!Number.isNaN(number)) {
        if (number < minValue) {
          return;
        }
        if (number > maxValue) {
          return;
        }
      }
      setDisplayValue(inputValue);
      onChange(number);
    };
    const handleBlur = () => {
      if (displayValue) {
        const number = parseFloat(displayValue);
        if (!Number.isNaN(number)) {
          setDisplayValue(formatPercentage(displayValue));
        }
      }
    };
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(InputGroup, null, /* @__PURE__ */ React105__namespace.createElement(
      InputGroupInput,
      {
        id: name,
        type: "text",
        inputMode: "decimal",
        placeholder,
        value: displayValue,
        onChange: handleChange,
        onBlur: handleBlur,
        disabled,
        readOnly
      }
    ), /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-end" }, "%"))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description, " ", minValue !== 0 || maxValue !== 100 ? /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-xs" }, "(", minValue, "% - ", maxValue, "%)") : null), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  const formatPercentage = React105__namespace.useCallback(
    (value2) => {
      if (!value2) return "";
      const number = parseFloat(value2);
      if (Number.isNaN(number)) return "";
      return number.toFixed(decimalPlaces);
    },
    [decimalPlaces]
  );
  return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => {
        React105__namespace.useEffect(() => {
          if (field.value !== void 0 && field.value !== null) {
            const numValue = typeof field.value === "number" ? field.value : parseFloat(field.value);
            if (!Number.isNaN(numValue)) {
              setDisplayValue(formatPercentage(numValue.toString()));
            }
          } else {
            setDisplayValue("");
          }
        }, [field.value]);
        const handleChange = (e) => {
          const inputValue = e.target.value;
          if (inputValue === "") {
            setDisplayValue("");
            field.onChange("");
            return;
          }
          const validInput = /^-?\d*\.?\d*$/.test(inputValue);
          if (!validInput) return;
          const number = parseFloat(inputValue);
          if (!Number.isNaN(number)) {
            if (number < minValue) {
              return;
            }
            if (number > maxValue) {
              return;
            }
          }
          setDisplayValue(inputValue);
          field.onChange(number);
        };
        const handleBlur = () => {
          if (displayValue) {
            const number = parseFloat(displayValue);
            if (!Number.isNaN(number)) {
              setDisplayValue(formatPercentage(displayValue));
            }
          }
        };
        return /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(InputGroup, { "data-invalid": !!error || void 0 }, /* @__PURE__ */ React105__namespace.createElement(
          InputGroupInput,
          {
            id: name,
            type: "text",
            inputMode: "decimal",
            placeholder,
            value: displayValue,
            onChange: handleChange,
            onBlur: handleBlur,
            disabled,
            readOnly,
            "aria-invalid": !!error
          }
        ), /* @__PURE__ */ React105__namespace.createElement(InputGroupAddon, { align: "inline-end" }, "%")));
      }
    }
  ), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description, " ", minValue !== 0 || maxValue !== 100 ? /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-xs" }, "(", minValue, "% - ", maxValue, "%)") : null), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
}
var COUNTRY_CODES = [
  { code: "US", label: "\u{1F1FA}\u{1F1F8} +1", dialCode: "+1" },
  { code: "GB", label: "\u{1F1EC}\u{1F1E7} +44", dialCode: "+44" },
  { code: "CA", label: "\u{1F1E8}\u{1F1E6} +1", dialCode: "+1" },
  { code: "AU", label: "\u{1F1E6}\u{1F1FA} +61", dialCode: "+61" },
  { code: "DE", label: "\u{1F1E9}\u{1F1EA} +49", dialCode: "+49" },
  { code: "FR", label: "\u{1F1EB}\u{1F1F7} +33", dialCode: "+33" },
  { code: "IT", label: "\u{1F1EE}\u{1F1F9} +39", dialCode: "+39" },
  { code: "ES", label: "\u{1F1EA}\u{1F1F8} +34", dialCode: "+34" },
  { code: "NL", label: "\u{1F1F3}\u{1F1F1} +31", dialCode: "+31" },
  { code: "BE", label: "\u{1F1E7}\u{1F1EA} +32", dialCode: "+32" },
  { code: "CH", label: "\u{1F1E8}\u{1F1ED} +41", dialCode: "+41" },
  { code: "AT", label: "\u{1F1E6}\u{1F1F9} +43", dialCode: "+43" },
  { code: "SE", label: "\u{1F1F8}\u{1F1EA} +46", dialCode: "+46" },
  { code: "NO", label: "\u{1F1F3}\u{1F1F4} +47", dialCode: "+47" },
  { code: "DK", label: "\u{1F1E9}\u{1F1F0} +45", dialCode: "+45" },
  { code: "FI", label: "\u{1F1EB}\u{1F1EE} +358", dialCode: "+358" },
  { code: "PL", label: "\u{1F1F5}\u{1F1F1} +48", dialCode: "+48" },
  { code: "PT", label: "\u{1F1F5}\u{1F1F9} +351", dialCode: "+351" },
  { code: "GR", label: "\u{1F1EC}\u{1F1F7} +30", dialCode: "+30" },
  { code: "IE", label: "\u{1F1EE}\u{1F1EA} +353", dialCode: "+353" },
  { code: "NZ", label: "\u{1F1F3}\u{1F1FF} +64", dialCode: "+64" },
  { code: "SG", label: "\u{1F1F8}\u{1F1EC} +65", dialCode: "+65" },
  { code: "MY", label: "\u{1F1F2}\u{1F1FE} +60", dialCode: "+60" },
  { code: "TH", label: "\u{1F1F9}\u{1F1ED} +66", dialCode: "+66" },
  { code: "PH", label: "\u{1F1F5}\u{1F1ED} +63", dialCode: "+63" },
  { code: "ID", label: "\u{1F1EE}\u{1F1E9} +62", dialCode: "+62" },
  { code: "VN", label: "\u{1F1FB}\u{1F1F3} +84", dialCode: "+84" },
  { code: "IN", label: "\u{1F1EE}\u{1F1F3} +91", dialCode: "+91" },
  { code: "PK", label: "\u{1F1F5}\u{1F1F0} +92", dialCode: "+92" },
  { code: "BD", label: "\u{1F1E7}\u{1F1E9} +880", dialCode: "+880" },
  { code: "JP", label: "\u{1F1EF}\u{1F1F5} +81", dialCode: "+81" },
  { code: "KR", label: "\u{1F1F0}\u{1F1F7} +82", dialCode: "+82" },
  { code: "CN", label: "\u{1F1E8}\u{1F1F3} +86", dialCode: "+86" },
  { code: "HK", label: "\u{1F1ED}\u{1F1F0} +852", dialCode: "+852" },
  { code: "TW", label: "\u{1F1F9}\u{1F1FC} +886", dialCode: "+886" },
  { code: "AE", label: "\u{1F1E6}\u{1F1EA} +971", dialCode: "+971" },
  { code: "SA", label: "\u{1F1F8}\u{1F1E6} +966", dialCode: "+966" },
  { code: "IL", label: "\u{1F1EE}\u{1F1F1} +972", dialCode: "+972" },
  { code: "ZA", label: "\u{1F1FF}\u{1F1E6} +27", dialCode: "+27" },
  { code: "BR", label: "\u{1F1E7}\u{1F1F7} +55", dialCode: "+55" },
  { code: "MX", label: "\u{1F1F2}\u{1F1FD} +52", dialCode: "+52" },
  { code: "AR", label: "\u{1F1E6}\u{1F1F7} +54", dialCode: "+54" },
  { code: "CL", label: "\u{1F1E8}\u{1F1F1} +56", dialCode: "+56" },
  { code: "CO", label: "\u{1F1E8}\u{1F1F4} +57", dialCode: "+57" },
  { code: "RU", label: "\u{1F1F7}\u{1F1FA} +7", dialCode: "+7" },
  { code: "UA", label: "\u{1F1FA}\u{1F1E6} +380", dialCode: "+380" },
  { code: "TR", label: "\u{1F1F9}\u{1F1F7} +90", dialCode: "+90" },
  { code: "EG", label: "\u{1F1EA}\u{1F1EC} +20", dialCode: "+20" },
  { code: "NG", label: "\u{1F1F3}\u{1F1EC} +234", dialCode: "+234" },
  { code: "KE", label: "\u{1F1F0}\u{1F1EA} +254", dialCode: "+254" }
];
function PhoneField({
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
  value,
  onChange
}) {
  const { control, setValue, watch } = reactHookForm.useFormContext();
  const [displayValue, setDisplayValue] = React105__namespace.useState("");
  const [selectedCountry, setSelectedCountry] = React105__namespace.useState(defaultCountry);
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    React105__namespace.useEffect(() => {
      if (value !== void 0 && value !== null) {
        const digits = value.toString().replace(/\D/g, "");
        setDisplayValue(formatPhoneNumber(digits));
      } else {
        setDisplayValue("");
      }
    }, [value]);
    const handleChange = (e) => {
      const inputValue = e.target.value;
      const digits = inputValue.replace(/\D/g, "");
      if (digits.length > 10) return;
      const formatted = formatPhoneNumber(digits);
      setDisplayValue(formatted);
      const dialCode = getDialCode(selectedCountry);
      const fullNumber = dialCode + digits;
      onChange(fullNumber);
    };
    const handleCountryChange = (countryCode) => {
      setSelectedCountry(countryCode);
      if (countryFieldName) {
        setValue(countryFieldName, countryCode);
      }
      const digits = displayValue.replace(/\D/g, "");
      const dialCode = getDialCode(countryCode);
      const fullNumber = dialCode + digits;
      onChange(fullNumber);
    };
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex gap-2" }, showCountrySelect && /* @__PURE__ */ React105__namespace.createElement(Select, { value: selectedCountry, onValueChange: handleCountryChange }, /* @__PURE__ */ React105__namespace.createElement(SelectTrigger, { className: "w-[110px]" }, /* @__PURE__ */ React105__namespace.createElement(SelectValue, { placeholder: "Select" })), /* @__PURE__ */ React105__namespace.createElement(SelectContent, null, COUNTRY_CODES.map((country) => /* @__PURE__ */ React105__namespace.createElement(SelectItem, { key: country.code, value: country.code }, country.label)))), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(InputGroup, null, /* @__PURE__ */ React105__namespace.createElement(
      InputGroupInput,
      {
        id: name,
        type: "tel",
        inputMode: "tel",
        placeholder,
        value: displayValue,
        onChange: handleChange,
        disabled,
        readOnly
      }
    ))))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  const countryValue = countryFieldName ? watch(countryFieldName) : null;
  React105__namespace.useEffect(() => {
    if (countryValue && countryValue !== selectedCountry) {
      setSelectedCountry(countryValue);
    }
  }, [countryValue, selectedCountry]);
  const formatPhoneNumber = React105__namespace.useCallback((value2) => {
    const digits = value2.replace(/\D/g, "");
    if (!digits) return "";
    if (digits.length <= 3) {
      return `(${digits}`;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  }, []);
  const getDialCode = React105__namespace.useCallback((countryCode) => {
    const country = COUNTRY_CODES.find((c) => c.code === countryCode);
    return country?.dialCode || "+1";
  }, []);
  return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => {
        React105__namespace.useEffect(() => {
          if (field.value !== void 0 && field.value !== null) {
            const digits = field.value.toString().replace(/\D/g, "");
            setDisplayValue(formatPhoneNumber(digits));
          } else {
            setDisplayValue("");
          }
        }, [field.value]);
        const handleChange = (e) => {
          const inputValue = e.target.value;
          const digits = inputValue.replace(/\D/g, "");
          if (digits.length > 10) return;
          const formatted = formatPhoneNumber(digits);
          setDisplayValue(formatted);
          const dialCode = getDialCode(selectedCountry);
          const fullNumber = dialCode + digits;
          field.onChange(fullNumber);
        };
        const handleCountryChange = (countryCode) => {
          setSelectedCountry(countryCode);
          if (countryFieldName) {
            setValue(countryFieldName, countryCode);
          }
          const digits = displayValue.replace(/\D/g, "");
          const dialCode = getDialCode(countryCode);
          const fullNumber = dialCode + digits;
          field.onChange(fullNumber);
        };
        return /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex gap-2" }, showCountrySelect && /* @__PURE__ */ React105__namespace.createElement(Select, { value: selectedCountry, onValueChange: handleCountryChange }, /* @__PURE__ */ React105__namespace.createElement(SelectTrigger, { className: "w-[110px]" }, /* @__PURE__ */ React105__namespace.createElement(SelectValue, { placeholder: "Select" })), /* @__PURE__ */ React105__namespace.createElement(SelectContent, null, COUNTRY_CODES.map((country) => /* @__PURE__ */ React105__namespace.createElement(SelectItem, { key: country.code, value: country.code }, country.label)))), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(InputGroup, { "data-invalid": !!error || void 0 }, /* @__PURE__ */ React105__namespace.createElement(
          InputGroupInput,
          {
            id: name,
            type: "tel",
            inputMode: "tel",
            placeholder,
            value: displayValue,
            onChange: handleChange,
            disabled,
            readOnly,
            "aria-invalid": !!error
          }
        )))));
      }
    }
  ), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
}
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.RadioGroup.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.RadioGroup.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      radixUi.RadioGroup.Indicator,
      {
        "data-slot": "radio-group-indicator",
        className: "relative flex items-center justify-center"
      },
      /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CircleIcon, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
    )
  );
}

// src/blocks/data-entry/form-builder/fields/radio-group-field.tsx
function RadioGroupField({
  name,
  label,
  description,
  options = [],
  disabled = false,
  required = false,
  orientation = "vertical",
  className,
  value,
  onValueChange
}) {
  const { control } = reactHookForm.useFormContext();
  const isControlled = value !== void 0 && onValueChange !== void 0;
  if (isControlled) {
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, null, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
      RadioGroup,
      {
        onValueChange,
        value,
        disabled,
        orientation,
        className: cn(orientation === "horizontal" && "flex flex-wrap gap-4")
      },
      options.map((option) => /* @__PURE__ */ React105__namespace.createElement(
        "div",
        {
          key: option.value,
          className: cn("flex items-start gap-2", orientation === "vertical" && "flex-col")
        },
        /* @__PURE__ */ React105__namespace.createElement(
          RadioGroupItem,
          {
            id: `${name}-${option.value}`,
            value: option.value,
            disabled: disabled || option.disabled
          }
        ),
        /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React105__namespace.createElement(
          Label,
          {
            htmlFor: `${name}-${option.value}`,
            className: cn(
              "font-medium",
              (disabled || option.disabled) && "cursor-not-allowed opacity-50"
            )
          },
          option.label
        ), option.description && /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-sm text-muted-foreground" }, option.description))
      ))
    )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, null, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
        RadioGroup,
        {
          onValueChange: field.onChange,
          value: field.value,
          disabled,
          orientation,
          className: cn(orientation === "horizontal" && "flex flex-wrap gap-4"),
          "aria-invalid": !!error
        },
        options.map((option) => /* @__PURE__ */ React105__namespace.createElement(
          "div",
          {
            key: option.value,
            className: cn("flex items-start gap-2", orientation === "vertical" && "flex-col")
          },
          /* @__PURE__ */ React105__namespace.createElement(
            RadioGroupItem,
            {
              id: `${name}-${option.value}`,
              value: option.value,
              disabled: disabled || option.disabled
            }
          ),
          /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React105__namespace.createElement(
            Label,
            {
              htmlFor: `${name}-${option.value}`,
              className: cn(
                "font-medium",
                (disabled || option.disabled) && "cursor-not-allowed opacity-50"
              )
            },
            option.label
          ), option.description && /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-sm text-muted-foreground" }, option.description))
        ))
      )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))
    }
  );
}
function RatingField({
  name,
  label,
  description,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  maxRating = 5,
  showNumbers = false,
  labels,
  size = "md",
  allowClear = true,
  icon = "star",
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const [hoverValue, setHoverValue] = React105__namespace.useState(null);
  const isControlled = value !== void 0 && onChange !== void 0;
  const sizeClasses2 = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  };
  const IconComponent = icon === "star" ? lucideReact.StarIcon : icon === "heart" ? ({ className: className2 }) => /* @__PURE__ */ React105__namespace.createElement("svg", { className: className2, fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React105__namespace.createElement("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })) : ({ className: className2 }) => /* @__PURE__ */ React105__namespace.createElement("svg", { className: className2, fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React105__namespace.createElement("path", { d: "M1 21h4V9H1v12zm22 0h-6v-9h6v9zM10.69 3.86L9.28 2.45a1 1 0 00-1.41 0l-1.42 1.41L1 9.41V21h22V9.41l-5.44-5.55-1.41 1.41a6 6 0 01-8.46 0z" }));
  if (isControlled) {
    const currentValue = value || 0;
    const handleKeyDown = (e, rating) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!readOnly && !disabled) {
          onChange(rating);
        }
      }
    };
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, null, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex flex-col gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        className: "flex items-center gap-1",
        role: "radiogroup",
        "aria-labelledby": label ? `${name}-label` : void 0
      },
      Array.from({ length: maxRating }).map((_, index) => {
        const rating = index + 1;
        const isFilled = hoverValue !== null ? rating <= hoverValue : rating <= currentValue;
        return /* @__PURE__ */ React105__namespace.createElement(
          "button",
          {
            key: index,
            type: "button",
            disabled: disabled || readOnly,
            onClick: () => {
              if (!readOnly && !disabled) {
                const newValue = allowClear && currentValue === rating ? 0 : rating;
                onChange(newValue);
              }
            },
            onMouseEnter: () => !readOnly && !disabled && setHoverValue(rating),
            onMouseLeave: () => setHoverValue(null),
            onKeyDown: (e) => handleKeyDown(e, rating),
            className: cn(
              "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded",
              disabled || readOnly ? "cursor-default" : "cursor-pointer hover:scale-110",
              (disabled || readOnly) && "opacity-50"
            ),
            "aria-checked": currentValue === rating,
            role: "radio",
            "aria-label": `${rating} out of ${maxRating}`,
            tabIndex: disabled || readOnly ? -1 : 0
          },
          /* @__PURE__ */ React105__namespace.createElement(
            IconComponent,
            {
              className: cn(
                sizeClasses2[size],
                isFilled ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
              )
            }
          )
        );
      })
    ), (showNumbers || labels) && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex justify-between text-xs text-muted-foreground" }, Array.from({ length: maxRating }).map((_, index) => /* @__PURE__ */ React105__namespace.createElement("span", { key: index, className: "flex-1 text-center" }, labels?.[index] || (showNumbers ? index + 1 : "")))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))));
  }
  return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, null, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => {
        const currentValue = field.value || 0;
        const handleKeyDown = (e, rating) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!readOnly && !disabled) {
              field.onChange(rating);
            }
          }
        };
        return /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex flex-col gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
          "div",
          {
            className: "flex items-center gap-1",
            role: "radiogroup",
            "aria-labelledby": label ? `${name}-label` : void 0
          },
          Array.from({ length: maxRating }).map((_, index) => {
            const rating = index + 1;
            const isFilled = hoverValue !== null ? rating <= hoverValue : rating <= currentValue;
            return /* @__PURE__ */ React105__namespace.createElement(
              "button",
              {
                key: index,
                type: "button",
                disabled: disabled || readOnly,
                onClick: () => {
                  if (!readOnly && !disabled) {
                    const newValue = allowClear && currentValue === rating ? 0 : rating;
                    field.onChange(newValue);
                  }
                },
                onMouseEnter: () => !readOnly && !disabled && setHoverValue(rating),
                onMouseLeave: () => setHoverValue(null),
                onKeyDown: (e) => handleKeyDown(e, rating),
                className: cn(
                  "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded",
                  disabled || readOnly ? "cursor-default" : "cursor-pointer hover:scale-110",
                  (disabled || readOnly) && "opacity-50"
                ),
                "aria-checked": currentValue === rating,
                role: "radio",
                "aria-label": `${rating} out of ${maxRating}`,
                tabIndex: disabled || readOnly ? -1 : 0
              },
              /* @__PURE__ */ React105__namespace.createElement(
                IconComponent,
                {
                  className: cn(
                    sizeClasses2[size],
                    isFilled ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                  )
                }
              )
            );
          })
        ), (showNumbers || labels) && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex justify-between text-xs text-muted-foreground" }, Array.from({ length: maxRating }).map((_, index) => /* @__PURE__ */ React105__namespace.createElement("span", { key: index, className: "flex-1 text-center" }, labels?.[index] || (showNumbers ? index + 1 : "")))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null)));
      }
    }
  ));
}
function SelectField({
  name,
  label,
  description,
  placeholder = "Select...",
  options = [],
  disabled = false,
  required = false,
  className,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(Select, { onValueChange: onChange, value, disabled }, /* @__PURE__ */ React105__namespace.createElement(SelectTrigger, { id: name, className: "w-full" }, /* @__PURE__ */ React105__namespace.createElement(SelectValue, { placeholder })), /* @__PURE__ */ React105__namespace.createElement(SelectContent, null, options.map((option) => /* @__PURE__ */ React105__namespace.createElement(SelectItem, { key: option.value, value: option.value, disabled: option.disabled }, option.label))))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(Select, { onValueChange: field.onChange, value: field.value, disabled }, /* @__PURE__ */ React105__namespace.createElement(SelectTrigger, { id: name, className: "w-full" }, /* @__PURE__ */ React105__namespace.createElement(SelectValue, { placeholder })), /* @__PURE__ */ React105__namespace.createElement(SelectContent, null, options.map((option) => /* @__PURE__ */ React105__namespace.createElement(SelectItem, { key: option.value, value: option.value, disabled: option.disabled }, option.label))))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))
    }
  );
}
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React105__namespace.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ React105__namespace.createElement(
    radixUi.Slider.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React105__namespace.createElement(
      radixUi.Slider.Track,
      {
        "data-slot": "slider-track",
        className: cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )
      },
      /* @__PURE__ */ React105__namespace.createElement(
        radixUi.Slider.Range,
        {
          "data-slot": "slider-range",
          className: cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )
        }
      )
    ),
    Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ React105__namespace.createElement(
      radixUi.Slider.Thumb,
      {
        "data-slot": "slider-thumb",
        key: index,
        className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
      }
    ))
  );
}

// src/blocks/data-entry/form-builder/fields/slider-field.tsx
function SliderField({
  name,
  label,
  description,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  min = 0,
  max = 100,
  step = 1,
  showInput = false,
  showValue = true,
  suffix,
  orientation = "horizontal",
  inverted = false,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const [localValue, setLocalValue] = React105__namespace.useState(min);
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    React105__namespace.useEffect(() => {
      const controlledValue = value !== void 0 ? Number(value) : min;
      setLocalValue(Math.min(Math.max(controlledValue, min), max));
    }, [value]);
    const handleSliderChange = (values) => {
      const newValue = values[0];
      setLocalValue(newValue);
      onChange(newValue);
    };
    const handleInputChange = (e) => {
      const inputValue = parseFloat(e.target.value);
      if (Number.isNaN(inputValue)) {
        setLocalValue(min);
        onChange(min);
      } else {
        const clampedValue = Math.min(Math.max(inputValue, min), max);
        setLocalValue(clampedValue);
        onChange(clampedValue);
      }
    };
    const valueLabel = `${localValue}${suffix || ""}`;
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex items-center gap-4", orientation === "vertical" && "flex-col") }, /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex-1", orientation === "vertical" && "h-48 w-full") }, /* @__PURE__ */ React105__namespace.createElement(
      Slider,
      {
        value: [localValue],
        onValueChange: handleSliderChange,
        min,
        max,
        step,
        disabled: disabled || readOnly,
        inverted,
        orientation,
        "aria-label": label,
        className: cn("rounded")
      }
    )), showValue && /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        className: cn(
          "flex items-center gap-2",
          orientation === "vertical" && "w-full justify-between"
        )
      },
      showInput ? /* @__PURE__ */ React105__namespace.createElement(
        Input,
        {
          type: "number",
          value: localValue,
          onChange: handleInputChange,
          min,
          max,
          step,
          disabled: disabled || readOnly,
          className: "w-20",
          "aria-label": `${label} value`
        }
      ) : /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-sm font-medium tabular-nums min-w-[3rem] text-center" }, valueLabel)
    ))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null), /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        className: cn(
          "flex justify-between text-xs text-muted-foreground mt-1",
          orientation === "vertical" && "flex-row"
        )
      },
      /* @__PURE__ */ React105__namespace.createElement("span", null, min, suffix),
      /* @__PURE__ */ React105__namespace.createElement("span", null, max, suffix)
    ));
  }
  return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => {
        React105__namespace.useEffect(() => {
          const value2 = field.value !== void 0 ? Number(field.value) : min;
          setLocalValue(Math.min(Math.max(value2, min), max));
        }, [field.value]);
        const handleSliderChange = (values) => {
          const newValue = values[0];
          setLocalValue(newValue);
          field.onChange(newValue);
        };
        const handleInputChange = (e) => {
          const value2 = parseFloat(e.target.value);
          if (Number.isNaN(value2)) {
            setLocalValue(min);
            field.onChange(min);
          } else {
            const clampedValue = Math.min(Math.max(value2, min), max);
            setLocalValue(clampedValue);
            field.onChange(clampedValue);
          }
        };
        const valueLabel = `${localValue}${suffix || ""}`;
        return /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
          "div",
          {
            className: cn("flex items-center gap-4", orientation === "vertical" && "flex-col")
          },
          /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex-1", orientation === "vertical" && "h-48 w-full") }, /* @__PURE__ */ React105__namespace.createElement(
            Slider,
            {
              value: [localValue],
              onValueChange: handleSliderChange,
              min,
              max,
              step,
              disabled: disabled || readOnly,
              inverted,
              orientation,
              "aria-invalid": !!error,
              "aria-label": label,
              className: cn(error && "ring-destructive rounded")
            }
          )),
          showValue && /* @__PURE__ */ React105__namespace.createElement(
            "div",
            {
              className: cn(
                "flex items-center gap-2",
                orientation === "vertical" && "w-full justify-between"
              )
            },
            showInput ? /* @__PURE__ */ React105__namespace.createElement(
              Input,
              {
                type: "number",
                value: localValue,
                onChange: handleInputChange,
                min,
                max,
                step,
                disabled: disabled || readOnly,
                className: "w-20",
                "aria-label": `${label} value`
              }
            ) : /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-sm font-medium tabular-nums min-w-[3rem] text-center" }, valueLabel)
          )
        ));
      }
    }
  ), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null), /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      className: cn(
        "flex justify-between text-xs text-muted-foreground mt-1",
        orientation === "vertical" && "flex-row"
      )
    },
    /* @__PURE__ */ React105__namespace.createElement("span", null, min, suffix),
    /* @__PURE__ */ React105__namespace.createElement("span", null, max, suffix)
  ));
}
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Switch.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      radixUi.Switch.Thumb,
      {
        "data-slot": "switch-thumb",
        className: cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )
      }
    )
  );
}

// src/blocks/data-entry/form-builder/fields/switch-field.tsx
function SwitchField({
  name,
  label,
  description,
  disabled = false,
  required = false,
  className,
  checked,
  onCheckedChange
}) {
  const { control } = reactHookForm.useFormContext();
  const isControlled = checked !== void 0 && onCheckedChange !== void 0;
  if (isControlled) {
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
      Switch,
      {
        id: name,
        checked,
        onCheckedChange,
        disabled
      }
    ), label && /* @__PURE__ */ React105__namespace.createElement(
      Label,
      {
        htmlFor: name,
        className: cn("font-medium", disabled && "cursor-not-allowed opacity-50")
      },
      label,
      required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")
    ))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
        Switch,
        {
          id: name,
          checked: !!field.value,
          onCheckedChange: field.onChange,
          disabled,
          "aria-invalid": !!error
        }
      ), label && /* @__PURE__ */ React105__namespace.createElement(
        Label,
        {
          htmlFor: name,
          className: cn(
            "font-medium",
            disabled && "cursor-not-allowed opacity-50",
            error && "text-destructive"
          )
        },
        label,
        required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")
      ))), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))
    }
  );
}
function TextField({
  name,
  label,
  description,
  placeholder,
  type = "text",
  disabled = false,
  readOnly = false,
  required = false,
  className,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
      Input,
      {
        id: name,
        type,
        value: value || "",
        onChange,
        placeholder,
        disabled,
        readOnly
      }
    )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
        Input,
        {
          ...field,
          id: name,
          type,
          placeholder,
          disabled,
          readOnly,
          "aria-invalid": !!error
        }
      )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))
    }
  );
}
function TextareaField({
  name,
  label,
  description,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  rows = 4,
  className,
  value,
  onChange
}) {
  const { control } = reactHookForm.useFormContext();
  const isControlled = value !== void 0 && onChange !== void 0;
  if (isControlled) {
    return /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
      Textarea,
      {
        id: name,
        value: value || "",
        onChange,
        placeholder,
        disabled,
        readOnly,
        rows
      }
    )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    reactHookForm.Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ React105__namespace.createElement(FormItem, { className: cn(className) }, label && /* @__PURE__ */ React105__namespace.createElement(FormLabel, { htmlFor: name }, label, required && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")), /* @__PURE__ */ React105__namespace.createElement(FormControl, null, /* @__PURE__ */ React105__namespace.createElement(
        Textarea,
        {
          ...field,
          id: name,
          placeholder,
          disabled,
          readOnly,
          rows,
          "aria-invalid": !!error
        }
      )), description && /* @__PURE__ */ React105__namespace.createElement(FormDescription, null, description), /* @__PURE__ */ React105__namespace.createElement(FormMessage, null))
    }
  );
}
var statusConfig = {
  valid: {
    color: "text-emerald-500",
    label: "Complete"
  },
  invalid: {
    color: "text-red-500",
    label: "Incomplete"
  },
  pending: {
    color: "text-amber-500",
    label: "Pending"
  }};
function FormSection({
  title,
  description,
  validationStatus = "none",
  children,
  actions,
  error,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("space-y-4", className) }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React105__namespace.default.createElement("h3", { className: "text-base font-semibold" }, title), validationStatus === "valid" && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("flex items-center gap-1 text-xs", statusConfig.valid.color) }, /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CheckCircleIcon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ React105__namespace.default.createElement("span", null, statusConfig.valid.label)), validationStatus === "invalid" && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("flex items-center gap-1 text-xs", statusConfig.invalid.color) }, /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.AlertCircleIcon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ React105__namespace.default.createElement("span", null, statusConfig.invalid.label)), validationStatus === "pending" && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("flex items-center gap-1 text-xs", statusConfig.pending.color) }, /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.AlertCircleIcon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ React105__namespace.default.createElement("span", null, statusConfig.pending.label))), /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center gap-2" }, actions)), description && /* @__PURE__ */ React105__namespace.default.createElement("p", { className: "text-sm text-muted-foreground" }, description), error && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center gap-2 text-sm text-red-500" }, /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.AlertCircleIcon, { className: "h-4 w-4" }), error), children);
}

// src/blocks/data-entry/form-builder/form-body.tsx
function FormBody({
  form,
  sections,
  renderField,
  className
}) {
  const { watch, formState } = form;
  const { errors, dirtyFields } = formState;
  const visibleSections = sections.filter((section) => {
    if (!section.when) return true;
    const values = watch();
    return section.when(values);
  });
  const getSectionValidationStatus = (section) => {
    const sectionFields = section.fields.map((f) => f.name);
    const sectionErrors = sectionFields.filter((field) => errors[field]);
    if (sectionErrors.length > 0) return "invalid";
    if (sectionFields.every((field) => dirtyFields[field]))
      return "valid";
    return section.validationStatus || "none";
  };
  return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-6", className) }, visibleSections.map((section) => {
    const visibleFields = section.fields.filter((field) => {
      if (!field.when) return true;
      const values = watch();
      return field.when(values);
    });
    if (visibleFields.length === 0) return null;
    const sectionError = section.fields.map((f) => errors[f.name]?.message).filter(Boolean)[0];
    return /* @__PURE__ */ React.createElement(
      FormSection,
      {
        key: section.id,
        title: section.title,
        description: section.description,
        validationStatus: getSectionValidationStatus(section),
        actions: section.actions,
        error: sectionError
      },
      /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, visibleFields.map((fieldConfig) => /* @__PURE__ */ React.createElement("div", { key: fieldConfig.name }, renderField ? renderField(fieldConfig, form) : /* @__PURE__ */ React.createElement(FieldRenderer, { ...fieldConfig }))))
    );
  }));
}
function StickyActions({
  children,
  showDirtyWarning = false,
  isDirty = false,
  position = "bottom",
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "sticky z-30 flex items-center justify-between gap-4 border-t bg-background px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]",
        position === "bottom" && "bottom-0",
        position === "top" && "top-0",
        className
      )
    },
    /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center gap-2" }, showDirtyWarning && isDirty && /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "text-sm text-amber-600 dark:text-amber-400" }, "You have unsaved changes")),
    /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center gap-2" }, children)
  );
}
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    lucideReact.Loader2Icon,
    {
      role: "status",
      "aria-label": "Loading",
      className: cn("size-4 animate-spin", className),
      ...props
    }
  );
}

// src/blocks/data-entry/form-builder/form-builder.tsx
function FormBuilder({
  id,
  sections,
  defaultValues,
  onSubmit,
  onAutoSave,
  autoSaveDelay = 1e3,
  isLoading = false,
  submitLabel = "Submit",
  cancelLabel = "Cancel",
  showCancel = false,
  onCancel,
  showDirtyWarning = false,
  stickyFooter = false,
  submitButton,
  header,
  footer,
  error,
  successMessage,
  renderField,
  className
}) {
  const form = reactHookForm.useForm({
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange"
  });
  const { handleSubmit, watch, formState, reset } = form;
  const { isDirty, isValid } = formState;
  React105__namespace.useEffect(() => {
    if (!onAutoSave || !isDirty) return;
    const timer = setTimeout(() => {
      const values = watch();
      onAutoSave(values);
    }, autoSaveDelay);
    return () => clearTimeout(timer);
  }, [onAutoSave, autoSaveDelay, isDirty, watch]);
  const actionsContent = /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, showCancel && /* @__PURE__ */ React105__namespace.createElement(
    Button,
    {
      type: "button",
      variant: "outline",
      onClick: onCancel || (() => reset(defaultValues)),
      disabled: isLoading
    },
    cancelLabel
  ), submitButton || /* @__PURE__ */ React105__namespace.createElement(Button, { type: "submit", disabled: isLoading || !isValid }, isLoading && /* @__PURE__ */ React105__namespace.createElement(Spinner, { className: "mr-2 h-4 w-4" }), submitLabel));
  return /* @__PURE__ */ React105__namespace.createElement(reactHookForm.FormProvider, { ...form }, /* @__PURE__ */ React105__namespace.createElement("form", { onSubmit: handleSubmit(onSubmit), className: cn("w-full space-y-6", className), id }, header, successMessage && /* @__PURE__ */ React105__namespace.createElement("div", { className: "rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400" }, successMessage), error && /* @__PURE__ */ React105__namespace.createElement("div", { className: "rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400" }, error), /* @__PURE__ */ React105__namespace.createElement(FormBody, { form, sections, renderField }), footer, stickyFooter && /* @__PURE__ */ React105__namespace.createElement(StickyActions, { showDirtyWarning, isDirty }, actionsContent), !stickyFooter && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex justify-end gap-2 pt-4 border-t" }, actionsContent)));
}
function WizardStep({
  sections,
  form,
  renderField,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(FormBody, { form, sections, renderField, className });
}
function AlertDialog({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.AlertDialog.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogPortal({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.AlertDialog.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.AlertDialog.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(AlertDialogPortal, null, /* @__PURE__ */ React105__namespace.default.createElement(AlertDialogOverlay, null), /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.AlertDialog.Content,
    {
      "data-slot": "alert-dialog-content",
      "data-size": size,
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg",
        className
      ),
      ...props
    }
  ));
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      ),
      ...props
    }
  );
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.AlertDialog.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn(
        "text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      ),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.AlertDialog.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(Button, { variant, size, asChild: true }, /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.AlertDialog.Action,
    {
      "data-slot": "alert-dialog-action",
      className: cn(className),
      ...props
    }
  ));
}
function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(Button, { variant, size, asChild: true }, /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.AlertDialog.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: cn(className),
      ...props
    }
  ));
}
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Avatar.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Avatar.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Avatar.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? radixUi.Slot.Root : "a";
  return /* @__PURE__ */ React105__namespace.default.createElement(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({ children, className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props
    },
    children ?? /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.ChevronRight, null)
  );
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.createElement(
    radixUi.Separator.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function Collapsible({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Collapsible.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Collapsible.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...props });
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Collapsible.CollapsibleContent, { "data-slot": "collapsible-content", ...props });
}
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.DropdownMenu.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.DropdownMenu.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.DropdownMenu.Portal, null, /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.DropdownMenu.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ));
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.DropdownMenu.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.DropdownMenu.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.DropdownMenu.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.DropdownMenu.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function ScrollArea({
  className,
  children,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.ScrollArea.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      radixUi.ScrollArea.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      },
      children
    ),
    (orientation === "vertical" || orientation === "both") && /* @__PURE__ */ React105__namespace.default.createElement(ScrollBar, { orientation: "vertical" }),
    (orientation === "horizontal" || orientation === "both") && /* @__PURE__ */ React105__namespace.default.createElement(ScrollBar, { orientation: "horizontal" }),
    /* @__PURE__ */ React105__namespace.default.createElement(radixUi.ScrollArea.Corner, null)
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.ScrollArea.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      radixUi.ScrollArea.ScrollAreaThumb,
      {
        "data-slot": "scroll-area-thumb",
        className: "bg-border relative flex-1 rounded-full"
      }
    )
  );
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React105__namespace.useState(void 0);
  React105__namespace.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Tooltip.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Tooltip.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Tooltip.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Tooltip.Portal, null, /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Tooltip.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React105__namespace.default.createElement(radixUi.Tooltip.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
  ));
}

// src/primitives/sidebar.tsx
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React105__namespace.createContext(null);
function useSidebar() {
  const context = React105__namespace.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React105__namespace.useState(false);
  const [_open, _setOpen] = React105__namespace.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React105__namespace.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React105__namespace.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen]);
  React105__namespace.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React105__namespace.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar]
  );
  return /* @__PURE__ */ React105__namespace.createElement(SidebarContext.Provider, { value: contextValue }, /* @__PURE__ */ React105__namespace.createElement(TooltipProvider, { delayDuration: 0 }, /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props
    },
    children
  )));
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        ),
        ...props
      },
      children
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ React105__namespace.createElement(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props }, /* @__PURE__ */ React105__namespace.createElement(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side
      },
      /* @__PURE__ */ React105__namespace.createElement(SheetHeader, { className: "sr-only" }, /* @__PURE__ */ React105__namespace.createElement(SheetTitle, null, "Sidebar"), /* @__PURE__ */ React105__namespace.createElement(SheetDescription, null, "Displays the mobile sidebar.")),
      /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex h-full w-full flex-col" }, children)
    ));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar"
    },
    /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        "data-slot": "sidebar-gap",
        className: cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )
      }
    ),
    /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        "data-slot": "sidebar-container",
        className: cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        ),
        ...props
      },
      /* @__PURE__ */ React105__namespace.createElement(
        "div",
        {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar-inner",
          className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        },
        children
      )
    )
  );
}
function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ React105__namespace.createElement(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props
    },
    /* @__PURE__ */ React105__namespace.createElement(lucideReact.PanelLeftIcon, null),
    /* @__PURE__ */ React105__namespace.createElement("span", { className: "sr-only" }, "Toggle Sidebar")
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ React105__namespace.createElement(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    }
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? radixUi.Slot.Root : "div";
  return /* @__PURE__ */ React105__namespace.createElement(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
var sidebarMenuButtonVariants = classVarianceAuthority.cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? radixUi.Slot.Root : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ React105__namespace.createElement(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ React105__namespace.createElement(Tooltip, null, /* @__PURE__ */ React105__namespace.createElement(TooltipTrigger, { asChild: true }, button), /* @__PURE__ */ React105__namespace.createElement(
    TooltipContent,
    {
      side: "right",
      align: "center",
      hidden: state !== "collapsed" || isMobile,
      ...tooltip
    }
  ));
}
function SidebarMenuBadge({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSubItem({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.createElement(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    }
  );
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? radixUi.Slot.Root : "a";
  return /* @__PURE__ */ React105__namespace.createElement(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
var Toaster = ({ ...props }) => {
  const { theme = "system" } = nextThemes.useTheme();
  return /* @__PURE__ */ React105__namespace.default.createElement(
    sonner.Toaster,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...props
    }
  );
};
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Tabs.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      orientation,
      className: cn("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className),
      ...props
    }
  );
}
var tabsListVariants = classVarianceAuthority.cva(
  "rounded-lg p-[3px] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Tabs.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Tabs.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 data-[state=active]:text-foreground",
        "after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    radixUi.Tabs.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

// src/blocks/data-entry/form-wizard/wizard-stepper.tsx
function getStepStatus(index, currentStep, completedSteps) {
  if (index === currentStep) return "current";
  if (completedSteps.includes(index)) return "completed";
  return "pending";
}
function StepIndicator({
  step,
  index,
  status,
  showIcon,
  isClickable,
  onClick
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    Button,
    {
      type: "button",
      className: cn(
        "relative flex items-center rounded-full opacity-100!",
        isClickable && "cursor-pointer",
        !isClickable && "cursor-default"
      ),
      variant: status === "pending" ? "outline" : "default",
      size: "icon-lg",
      onClick: isClickable ? onClick : void 0,
      disabled: !isClickable,
      tabIndex: isClickable ? 0 : -1,
      onKeyDown: isClickable ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      } : void 0,
      "aria-current": status === "current" ? "step" : void 0,
      "aria-disabled": !isClickable
    },
    status === "completed" ? /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.CheckIcon, { className: "h-5 w-5" }) : showIcon && step.icon ? step.icon : /* @__PURE__ */ React105__namespace.default.createElement("span", null, index + 1)
  );
}
function WizardStepper({
  steps,
  currentStep,
  completedSteps,
  showIcons = true,
  allowNavigation = false,
  onStepClick,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "nav",
    {
      "aria-label": "Progress",
      className: cn("relative w-full flex justify-between items-center", className)
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      Progress,
      {
        className: "absolute w-full h-0.5",
        value: currentStep / (steps.length - 1) * 100
      }
    ),
    steps.map((step, index) => {
      const status = getStepStatus(index, currentStep, completedSteps);
      const isClickable = allowNavigation && (status === "completed" || status === "current");
      return /* @__PURE__ */ React105__namespace.default.createElement(
        StepIndicator,
        {
          key: step.id,
          step,
          index,
          status,
          showIcon: showIcons,
          isClickable,
          onClick: () => onStepClick?.(index)
        }
      );
    })
  );
}

// src/blocks/data-entry/form-wizard/form-wizard.tsx
function FormWizard({
  id,
  steps,
  defaultValues,
  onSubmit,
  onAutoSave,
  autoSaveDelay = 1e3,
  isLoading = false,
  submitLabel = "Submit",
  cancelLabel = "Cancel",
  showCancel = false,
  onCancel,
  showDirtyWarning = false,
  stickyFooter = false,
  submitButton,
  header,
  footer,
  error,
  successMessage,
  renderField,
  stepperOrientation = "horizontal",
  navigationMode = "free",
  showStepDescriptions = false,
  showStepIcons = true,
  onStepChange,
  className
}) {
  const form = reactHookForm.useForm({
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange"
  });
  const { handleSubmit, watch, formState, reset, trigger } = form;
  const { isDirty, isValid } = formState;
  const [currentStep, setCurrentStep] = React105__namespace.useState(0);
  const [completedSteps, setCompletedSteps] = React105__namespace.useState([]);
  const visibleSteps = React105__namespace.useMemo(() => {
    return steps.filter((step) => {
      if (!step.when) return true;
      const values = watch();
      return step.when(values);
    });
  }, [steps, watch]);
  React105__namespace.useEffect(() => {
    if (!onAutoSave || !isDirty) return;
    const timer = setTimeout(() => {
      const values = watch();
      onAutoSave(values);
    }, autoSaveDelay);
    return () => clearTimeout(timer);
  }, [onAutoSave, autoSaveDelay, isDirty, watch]);
  React105__namespace.useEffect(() => {
    if (onStepChange) {
      const step = visibleSteps[currentStep];
      if (step) {
        onStepChange(currentStep, step.id);
      }
    }
  }, [currentStep, visibleSteps, onStepChange]);
  const navigationState = React105__namespace.useMemo(() => {
    const totalSteps = visibleSteps.length;
    const isFirst = currentStep === 0;
    const isLast = currentStep === totalSteps - 1;
    return {
      currentStep,
      totalSteps,
      isFirst,
      isLast,
      canGoBack: !isFirst,
      canGoNext: !isLast,
      completedSteps: [...completedSteps]
    };
  }, [currentStep, visibleSteps.length, completedSteps]);
  const validateCurrentStep = async () => {
    const currentStepConfig2 = visibleSteps[currentStep];
    if (!currentStepConfig2?.enableValidation) return true;
    if (!currentStepConfig2.sections) return true;
    const fieldNames = currentStepConfig2.sections.flatMap(
      (section) => section.fields.map((field) => field.name)
    );
    const isValid2 = await trigger(fieldNames);
    return isValid2;
  };
  const handleNext = async () => {
    const isValid2 = await validateCurrentStep();
    if (!isValid2) return;
    if (currentStep < visibleSteps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      setCompletedSteps((prev) => prev.includes(currentStep) ? prev : [...prev, currentStep]);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleStepClick = async (stepIndex) => {
    if (navigationMode === "sequential") return;
    if (stepIndex === currentStep || completedSteps.includes(stepIndex)) {
      setCurrentStep(stepIndex);
    }
  };
  const handleFinalSubmit = async (data) => {
    const allFieldNames = visibleSteps.flatMap(
      (step) => (step.sections || []).flatMap((section) => section.fields.map((field) => field.name))
    );
    const allValid = await trigger(allFieldNames);
    if (!allValid) return;
    await onSubmit(data);
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      reset(defaultValues);
      setCurrentStep(0);
      setCompletedSteps([]);
    }
  };
  const currentStepConfig = visibleSteps[currentStep];
  const actionsContent = /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, showCancel && /* @__PURE__ */ React105__namespace.createElement(Button, { type: "button", variant: "outline", onClick: handleCancel, disabled: isLoading }, cancelLabel), !navigationState.isLast && /* @__PURE__ */ React105__namespace.createElement(Button, { type: "button", onClick: handleNext, disabled: isLoading, className: "min-w-[100px]" }, "Next"), navigationState.isLast && (submitButton || /* @__PURE__ */ React105__namespace.createElement(Button, { type: "submit", disabled: isLoading || !isValid }, isLoading && /* @__PURE__ */ React105__namespace.createElement(Spinner, { className: "mr-2 h-4 w-4" }), submitLabel)), !navigationState.isFirst && !navigationState.isLast && /* @__PURE__ */ React105__namespace.createElement(Button, { type: "button", variant: "outline", onClick: handleBack, disabled: isLoading }, "Back"));
  return /* @__PURE__ */ React105__namespace.createElement(reactHookForm.FormProvider, { ...form }, /* @__PURE__ */ React105__namespace.createElement(
    "form",
    {
      onSubmit: handleSubmit((data) => handleFinalSubmit(data)),
      className: cn("w-2xl space-y-6", className),
      id
    },
    header,
    successMessage && /* @__PURE__ */ React105__namespace.createElement("div", { className: "rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400" }, successMessage),
    error && /* @__PURE__ */ React105__namespace.createElement("div", { className: "rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400" }, error),
    /* @__PURE__ */ React105__namespace.createElement(
      WizardStepper,
      {
        steps: visibleSteps,
        currentStep,
        completedSteps,
        orientation: stepperOrientation,
        showDescriptions: showStepDescriptions,
        showIcons: showStepIcons,
        allowNavigation: navigationMode === "free",
        onStepClick: handleStepClick
      }
    ),
    currentStepConfig && (currentStepConfig.render ? /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-6" }, currentStepConfig.render({
      form,
      values: watch(),
      navigation: navigationState
    })) : /* @__PURE__ */ React105__namespace.createElement(
      WizardStep,
      {
        sections: currentStepConfig.sections || [],
        form,
        renderField
      }
    )),
    footer,
    stickyFooter && /* @__PURE__ */ React105__namespace.createElement(StickyActions, { showDirtyWarning, isDirty }, actionsContent),
    !stickyFooter && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex justify-between gap-2 border-t pt-4" }, /* @__PURE__ */ React105__namespace.createElement("div", null), actionsContent)
  ));
}
var variantConfig = {
  danger: {
    icon: lucideReact.AlertTriangleIcon,
    confirmVariant: "destructive"
  },
  warning: {
    icon: lucideReact.AlertTriangleIcon,
    confirmVariant: "default"
  },
  info: {
    icon: lucideReact.InfoIcon,
    confirmVariant: "default"
  },
  question: {
    icon: lucideReact.HelpCircleIcon,
    confirmVariant: "default"
  }
};
function ConfirmationDialog({
  open,
  onOpenChange,
  title,
  description,
  variant = "question",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant,
  onConfirm,
  onCancel,
  disabled,
  loading
}) {
  const config = variantConfig[variant];
  const Icon = config.icon;
  const handleConfirm = () => {
    onConfirm?.();
    onOpenChange?.(false);
  };
  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };
  return /* @__PURE__ */ React.createElement(AlertDialog, { open, onOpenChange }, /* @__PURE__ */ React.createElement(AlertDialogContent, null, /* @__PURE__ */ React.createElement(AlertDialogHeader, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn2(
        "flex h-10 w-10 items-center justify-center rounded-full",
        variant === "danger" && "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        variant === "warning" && "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
        variant === "info" && "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        variant === "question" && "bg-muted text-muted-foreground"
      )
    },
    /* @__PURE__ */ React.createElement(Icon, { className: "h-5 w-5" })
  ), /* @__PURE__ */ React.createElement(AlertDialogTitle, null, title)), description && /* @__PURE__ */ React.createElement(AlertDialogDescription, { className: "ml-13" }, description)), /* @__PURE__ */ React.createElement(AlertDialogFooter, { className: "mt-4" }, /* @__PURE__ */ React.createElement(AlertDialogCancel, { onClick: handleCancel, disabled: loading }, cancelText), /* @__PURE__ */ React.createElement(
    AlertDialogAction,
    {
      onClick: handleConfirm,
      disabled: disabled || loading,
      className: cn2(loading && "opacity-50")
    },
    loading ? "Loading..." : confirmText
  ))));
}
function cn2(...classes) {
  return classes.filter(Boolean).join(" ");
}
var statusConfig2 = {
  connected: {
    variant: "default",
    icon: lucideReact.Wifi
  },
  disconnected: {
    variant: "destructive",
    icon: lucideReact.WifiOff
  },
  connecting: {
    variant: "secondary",
    icon: lucideReact.Loader2
  }
};
function ConnectionStatus({
  status,
  showIcon = true,
  labels = {},
  className
}) {
  const config = statusConfig2[status];
  const Icon = config.icon;
  const label = labels[status] || status.charAt(0).toUpperCase() + status.slice(1);
  return /* @__PURE__ */ React.createElement(Badge, { variant: config.variant, className: cn("gap-1", className) }, showIcon && /* @__PURE__ */ React.createElement(Icon, { className: cn("h-3 w-3", status === "connecting" && "animate-spin") }), label);
}
function EmptyState({
  title,
  description,
  icon: Icon = lucideReact.PackageOpen,
  action,
  secondaryAction,
  compact = false,
  className
}) {
  if (compact) {
    return /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("flex flex-col items-center justify-center p-6 text-center", className) }, /* @__PURE__ */ React105__namespace.default.createElement(Icon, { className: "h-8 w-8 text-muted-foreground/60", strokeWidth: 1.5 }), /* @__PURE__ */ React105__namespace.default.createElement("h3", { className: "mt-3 text-sm font-medium" }, title), description && /* @__PURE__ */ React105__namespace.default.createElement("p", { className: "mt-1 text-xs text-muted-foreground" }, description), action && /* @__PURE__ */ React105__namespace.default.createElement(
      Button,
      {
        size: "sm",
        variant: action.variant || "outline",
        className: "mt-3",
        onClick: action.onClick
      },
      action.icon && /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "mr-2" }, action.icon),
      action.label
    ));
  }
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center",
        className
      )
    },
    /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "rounded-full bg-muted p-3" }, /* @__PURE__ */ React105__namespace.default.createElement(Icon, { className: "h-8 w-8 text-muted-foreground", strokeWidth: 1.5 })),
    /* @__PURE__ */ React105__namespace.default.createElement("h3", { className: "mt-4 text-lg font-semibold" }, title),
    description && /* @__PURE__ */ React105__namespace.default.createElement("p", { className: "mt-2 max-w-sm text-sm text-muted-foreground" }, description),
    (action || secondaryAction) && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "mt-6 flex items-center gap-3" }, action && /* @__PURE__ */ React105__namespace.default.createElement(Button, { variant: action.variant || "default", onClick: action.onClick }, action.icon && /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "mr-2" }, action.icon), action.label), secondaryAction && /* @__PURE__ */ React105__namespace.default.createElement(
      Button,
      {
        variant: secondaryAction.variant || "outline",
        onClick: secondaryAction.onClick
      },
      secondaryAction.icon && /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "mr-2" }, secondaryAction.icon),
      secondaryAction.label
    ))
  );
}
function ErrorFallback({
  error,
  errorId,
  resetError,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
  showDetails = false,
  className
}) {
  const [copied, setCopied] = React105__namespace.useState(false);
  const handleCopyError = () => {
    if (error) {
      navigator.clipboard.writeText(error.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  return /* @__PURE__ */ React105__namespace.createElement(Card, { className: cn3("border-destructive/50", className) }, /* @__PURE__ */ React105__namespace.createElement(CardHeader, { className: "space-y-3" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.AlertTriangleIcon, { className: "h-5 w-5 text-destructive" })), /* @__PURE__ */ React105__namespace.createElement("div", null, /* @__PURE__ */ React105__namespace.createElement(CardTitle, { className: "text-lg" }, title), errorId && /* @__PURE__ */ React105__namespace.createElement(CardDescription, { className: "text-xs font-mono" }, "Error ID: ", errorId)))), /* @__PURE__ */ React105__namespace.createElement(CardContent, { className: "space-y-4" }, /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-sm text-muted-foreground" }, description), showDetails && error && /* @__PURE__ */ React105__namespace.createElement("div", { className: "rounded-md bg-muted p-3" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-xs font-medium" }, "Error Details"), /* @__PURE__ */ React105__namespace.createElement(Button, { variant: "ghost", size: "sm", onClick: handleCopyError, className: "h-6 text-xs" }, copied ? "Copied!" : "Copy")), /* @__PURE__ */ React105__namespace.createElement("pre", { className: "text-xs text-destructive overflow-auto max-h-32" }, error.message)), resetError && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React105__namespace.createElement(Button, { onClick: resetError, variant: "default" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.RefreshCwIcon, { className: "mr-2 h-4 w-4" }), "Try Again"), /* @__PURE__ */ React105__namespace.createElement(Button, { onClick: () => window.location.reload(), variant: "outline" }, "Reload Page"))));
}
function cn3(...classes) {
  return classes.filter(Boolean).join(" ");
}
function LoadingOverlay({
  isLoading,
  message,
  description,
  fullScreen = false,
  className,
  children
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("relative", className) }, children && /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "transition-opacity duration-200",
        isLoading && "opacity-50 pointer-events-none"
      )
    },
    children
  ), isLoading && /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center gap-3",
        fullScreen ? "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" : "absolute inset-0 bg-background/60 backdrop-blur-sm"
      )
    },
    /* @__PURE__ */ React105__namespace.default.createElement(Spinner, { className: "size-8" }),
    message && /* @__PURE__ */ React105__namespace.default.createElement("p", { className: "text-sm font-medium text-foreground" }, message),
    description && /* @__PURE__ */ React105__namespace.default.createElement("p", { className: "text-sm text-muted-foreground" }, description)
  ));
}
function ProgressTracker({
  steps,
  currentStep,
  orientation = "horizontal",
  showDescriptions = true,
  clickable = false,
  className
}) {
  const isHorizontal = orientation === "horizontal";
  return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex", isHorizontal ? "flex-row items-center" : "flex-col", className) }, steps.map((step, index) => {
    const isCompleted = index < currentStep;
    const isCurrent = index === currentStep;
    const isClickable = clickable && step.onClick;
    return /* @__PURE__ */ React105__namespace.createElement(React105__namespace.Fragment, { key: step.id }, index > 0 && /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        className: cn(
          "flex-1",
          isHorizontal ? "h-0.5 mx-2 bg-muted" : "w-0.5 my-2 ml-[11px] bg-muted"
        )
      },
      /* @__PURE__ */ React105__namespace.createElement(
        "div",
        {
          className: cn(
            "h-full bg-primary transition-all",
            isCompleted && "bg-primary",
            !isCompleted && "bg-transparent"
          )
        }
      )
    ), /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex items-center gap-3", !isHorizontal && "min-h-[60px]") }, /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        ...isClickable ? {
          role: "button",
          onClick: step.onClick,
          onKeyDown: (e) => e.key === "Enter" && step.onClick?.(),
          tabIndex: 0
        } : {},
        className: cn(
          "relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-medium transition-colors",
          isCompleted && "border-primary bg-primary text-primary-foreground",
          isCurrent && "border-primary text-primary",
          !isCompleted && !isCurrent && "border-muted-foreground text-muted-foreground",
          isClickable && "cursor-pointer hover:border-primary"
        )
      },
      isCompleted ? /* @__PURE__ */ React105__namespace.createElement(lucideReact.CheckIcon, { className: "h-3 w-3" }) : isCurrent ? /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronRightIcon, { className: "h-3 w-3" }) : /* @__PURE__ */ React105__namespace.createElement(lucideReact.CircleIcon, { className: "h-2 w-2" })
    ), (showDescriptions || isCurrent) && /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex flex-col", isHorizontal && "min-w-0") }, /* @__PURE__ */ React105__namespace.createElement(
      "span",
      {
        className: cn(
          "text-sm font-medium",
          isCurrent && "text-foreground",
          !isCurrent && "text-muted-foreground"
        )
      },
      step.title
    ), showDescriptions && step.description && /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-xs text-muted-foreground" }, step.description))));
  }));
}

// src/blocks/feedback/skeleton-generator.tsx
function SkeletonGenerator({
  variant = "card",
  count = 3,
  className
}) {
  if (variant === "card") {
    return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-3", className) }, Array.from({ length: count }).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "space-y-2" }, /* @__PURE__ */ React.createElement(Skeleton, { className: "h-4 w-3/4" }), /* @__PURE__ */ React.createElement(Skeleton, { className: "h-4 w-1/2" }), /* @__PURE__ */ React.createElement(Skeleton, { className: "h-20 w-full" }))));
  }
  if (variant === "list") {
    return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-2", className) }, Array.from({ length: count }).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(Skeleton, { className: "h-10 w-10 rounded-full" }), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Skeleton, { className: "h-4 w-32" }), /* @__PURE__ */ React.createElement(Skeleton, { className: "h-3 w-24" })))));
  }
  if (variant === "table") {
    return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-2", className) }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ React.createElement(Skeleton, { key: i, className: "h-4 flex-1" }))), Array.from({ length: count }).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex gap-4" }, Array.from({ length: 4 }).map((_2, j) => /* @__PURE__ */ React.createElement(Skeleton, { key: j, className: "h-8 flex-1" })))));
  }
  return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-2", className) }, Array.from({ length: count }).map((_, i) => /* @__PURE__ */ React.createElement(Skeleton, { key: i, className: "h-4 w-full" })));
}

// src/blocks/feedback/toast-manager.tsx
function ToastManager({
  position = "bottom-right",
  theme = "system",
  className
}) {
  return /* @__PURE__ */ React.createElement(Toaster, { position, theme, className: cn(className) });
}
var BoardToolbar = React105__namespace.forwardRef(
  function BoardToolbarBase({
    searchQuery,
    onSearchChange,
    filtersCount,
    onFiltersClick,
    sortDirection,
    onSortToggle,
    showSearch = true,
    showFilters = true,
    showSort = true,
    searchPlaceholder = "Search cards...",
    className,
    ...props
  }, ref) {
    const hasActiveFilters = filtersCount && filtersCount > 0;
    const hasActiveSearch = searchQuery && searchQuery.length > 0;
    return /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        ref,
        className: cn("flex items-center gap-2 p-3 border-b bg-card", className),
        ...props
      },
      showSearch && /* @__PURE__ */ React105__namespace.createElement("div", { className: "relative flex-1 max-w-sm" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.SearchIcon, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ React105__namespace.createElement(
        Input,
        {
          type: "text",
          placeholder: searchPlaceholder,
          value: searchQuery,
          onChange: (e) => onSearchChange?.(e.target.value),
          className: "pl-9 pr-8"
        }
      ), hasActiveSearch && /* @__PURE__ */ React105__namespace.createElement(
        "button",
        {
          onClick: () => onSearchChange?.(""),
          className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
          type: "button"
        },
        /* @__PURE__ */ React105__namespace.createElement(lucideReact.XIcon, { className: "h-4 w-4" })
      )),
      showFilters && /* @__PURE__ */ React105__namespace.createElement(DropdownMenu, null, /* @__PURE__ */ React105__namespace.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement(Button, { variant: "outline", size: "sm", className: "gap-2" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.FilterIcon, { className: "h-4 w-4" }), "Filters", hasActiveFilters && /* @__PURE__ */ React105__namespace.createElement(Badge, { variant: "secondary", className: "h-5 px-1" }, filtersCount))), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuContent, { align: "end", className: "w-56" }, /* @__PURE__ */ React105__namespace.createElement(DropdownMenuLabel, null, "Filter by"), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuSeparator, null), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuGroup, null, /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Assignee"), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Priority"), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Due date"), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Labels")))),
      showSort && /* @__PURE__ */ React105__namespace.createElement(Button, { variant: "outline", size: "sm", className: "gap-2", onClick: onSortToggle }, sortDirection === "desc" ? /* @__PURE__ */ React105__namespace.createElement(lucideReact.SortDescIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ React105__namespace.createElement(lucideReact.SortAscIcon, { className: "h-4 w-4" }), "Sort")
    );
  }
);
var KanbanCardAttachments = React105__namespace.forwardRef(
  ({ count, className, ...props }, ref) => {
    if (count === 0) return null;
    return /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        ref,
        className: cn("flex items-center gap-1.5 text-xs text-muted-foreground", className),
        ...props,
        title: `${count} attachment${count !== 1 ? "s" : ""}`
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.PaperclipIcon, { className: "h-3.5 w-3.5 shrink-0" }),
      /* @__PURE__ */ React105__namespace.createElement("span", { className: "font-medium" }, count)
    );
  }
);
KanbanCardAttachments.displayName = "KanbanCardAttachments";
function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
var KanbanCardAvatar = React105__namespace.forwardRef(
  ({ name, avatarUrl, className, ...props }, ref) => /* @__PURE__ */ React105__namespace.createElement(Avatar, { ref, className: cn("h-6 w-6 ring-2 ring-card", className), ...props }, avatarUrl && /* @__PURE__ */ React105__namespace.createElement(AvatarImage, { src: avatarUrl, alt: name }), /* @__PURE__ */ React105__namespace.createElement(AvatarFallback, { className: "text-[10px] font-medium bg-muted" }, getInitials(name)))
);
KanbanCardAvatar.displayName = "KanbanCardAvatar";
var KanbanCardBadge = React105__namespace.forwardRef(
  ({ priority, className, children, ...props }, ref) => /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      ref,
      className: cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        "shrink-0",
        priority === "urgent" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        priority === "high" && "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
        priority === "medium" && "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        priority === "low" && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        className
      ),
      ...props
    },
    children
  )
);
KanbanCardBadge.displayName = "KanbanCardBadge";
var KanbanCardContent = React105__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React105__namespace.createElement("div", { ref, className: cn("flex flex-col gap-2", className), ...props })
);
KanbanCardContent.displayName = "KanbanCardContent";
var KanbanCardDescription = React105__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React105__namespace.createElement(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground leading-relaxed", "line-clamp-3", className),
    ...props
  }
));
KanbanCardDescription.displayName = "KanbanCardDescription";
function formatRelativeDate(date) {
  const now = /* @__PURE__ */ new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "tomorrow";
  if (diffDays === -1) return "yesterday";
  if (diffDays > 1) return `in ${diffDays} days`;
  if (diffDays < -1) return `${Math.abs(diffDays)} days ago`;
  return date.toLocaleDateString();
}
function isOverdue(date) {
  const dueDate = new Date(date);
  const now = /* @__PURE__ */ new Date();
  dueDate.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return dueDate < now;
}
var KanbanCardDueDate = React105__namespace.forwardRef(
  ({ date, showTime, isOverdue: overdueProp, className, ...props }, ref) => {
    const dueDate = new Date(date);
    const isOver = overdueProp ?? isOverdue(date);
    const formattedDate = showTime ? dueDate.toLocaleString() : dueDate.toLocaleDateString();
    const relativeDate = formatRelativeDate(dueDate);
    return /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        ref,
        className: cn(
          "flex items-center gap-1.5 text-xs",
          isOver ? "text-red-600 dark:text-red-400 font-medium" : "text-muted-foreground",
          className
        ),
        ...props,
        title: formattedDate
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.CalendarIcon, { className: "h-3.5 w-3.5 shrink-0" }),
      /* @__PURE__ */ React105__namespace.createElement("span", null, relativeDate)
    );
  }
);
KanbanCardDueDate.displayName = "KanbanCardDueDate";
var KanbanCardFooter = React105__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React105__namespace.createElement("div", { ref, className: cn("flex items-center gap-2 flex-wrap", className), ...props })
);
KanbanCardFooter.displayName = "KanbanCardFooter";
var KanbanCardHeader = React105__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React105__namespace.createElement("div", { ref, className: cn("flex items-start justify-between gap-2", className), ...props })
);
KanbanCardHeader.displayName = "KanbanCardHeader";
function getColorClasses(color) {
  const colorMap = {
    // Red
    red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    // Orange
    orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
    // Yellow/Amber
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    amber: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    // Green
    green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    // Blue
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    // Indigo
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
    // Purple
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    // Pink
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
    // Gray/Slate
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
    slate: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400",
    // Cyan
    cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
    // Teal
    teal: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400"
  };
  return colorMap[color] || colorMap.gray;
}
var KanbanCardLabel = React105__namespace.forwardRef(
  ({ color, className, children, ...props }, ref) => {
    const isHexColor = /^#[0-9A-Fa-f]{6}$/.test(color);
    return /* @__PURE__ */ React105__namespace.createElement(
      "span",
      {
        ref,
        className: cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
          "shrink-0",
          isHexColor ? className : getColorClasses(color),
          className
        ),
        style: isHexColor ? { backgroundColor: color, color: "#fff" } : void 0,
        ...props
      },
      children
    );
  }
);
KanbanCardLabel.displayName = "KanbanCardLabel";
var KanbanCardLabels = React105__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React105__namespace.createElement("div", { ref, className: cn("flex flex-wrap gap-1.5", className), ...props })
);
KanbanCardLabels.displayName = "KanbanCardLabels";
var KanbanCardSubtasks = React105__namespace.forwardRef(
  ({ completed, total, className, ...props }, ref) => {
    const percentage = total > 0 ? completed / total * 100 : 0;
    const isComplete = completed === total && total > 0;
    return /* @__PURE__ */ React105__namespace.createElement("div", { ref, className: cn("flex items-center gap-2", className), ...props }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1 min-w-[80px]" }, /* @__PURE__ */ React105__namespace.createElement(
      Progress,
      {
        value: percentage,
        className: cn("h-1.5", isComplete && "bg-green-100 dark:bg-green-900/30")
      }
    )), /* @__PURE__ */ React105__namespace.createElement(
      "span",
      {
        className: cn(
          "text-xs font-medium shrink-0",
          isComplete ? "text-green-600 dark:text-green-400" : "text-muted-foreground"
        )
      },
      completed,
      "/",
      total
    ));
  }
);
KanbanCardSubtasks.displayName = "KanbanCardSubtasks";
var KanbanCardTitle = React105__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React105__namespace.createElement(
    "h3",
    {
      ref,
      className: cn("font-semibold text-foreground text-ellipsis", "line-clamp-2", className),
      ...props
    }
  )
);
KanbanCardTitle.displayName = "KanbanCardTitle";

// src/blocks/kanban/card/kanban-card.tsx
function DefaultCard({
  card,
  onClick,
  isDragging,
  isSelected
}) {
  if (!card) return null;
  const hasSubtasks = card.subtasks && card.subtasks.length > 0;
  const hasAttachments = card.attachments && card.attachments.length > 0;
  const hasDueDate = !!card.dueDate;
  const hasAssignee = !!card.assignee;
  const hasTags = card.tags && card.tags.length > 0;
  const completedSubtasks = card.subtasks?.filter((s) => s.completed).length || 0;
  const totalSubtasks = card.subtasks?.length || 0;
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      "data-dragging": isDragging ? "true" : void 0,
      "data-selected": isSelected ? "true" : void 0,
      "data-priority": card.priority,
      className: cn(
        "group relative flex flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm",
        "transition-all duration-200",
        "hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "data-[dragging=true]:opacity-50 data-[dragging=true]:shadow-lg",
        "data-[selected=true]:ring-2 data-[selected=true]:ring-ring data-[selected=true]:ring-offset-2",
        "data-[priority=urgent]:border-l-4 data-[priority=urgent]:border-l-red-500",
        "data-[priority=high]:border-l-4 data-[priority=high]:border-l-orange-500",
        "data-[priority=medium]:border-l-4 data-[priority=medium]:border-l-yellow-500",
        "data-[priority=low]:border-l-4 data-[priority=low]:border-l-blue-500",
        onClick && "cursor-pointer"
      ),
      onClick,
      role: onClick ? "button" : "article",
      tabIndex: onClick ? 0 : void 0,
      onKeyDown: (e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }
    },
    /* @__PURE__ */ React105__namespace.createElement(KanbanCardHeader, null, /* @__PURE__ */ React105__namespace.createElement(KanbanCardTitle, null, card.title, "askdlf lqkwr jelkqjwre oqiwjfoqw jwa askdfj qwoirejqi"), card.priority && /* @__PURE__ */ React105__namespace.createElement(KanbanCardBadge, { priority: card.priority }, card.priority.charAt(0).toUpperCase() + card.priority.slice(1))),
    /* @__PURE__ */ React105__namespace.createElement(KanbanCardContent, null, card.description && /* @__PURE__ */ React105__namespace.createElement(KanbanCardDescription, null, card.description), hasTags && card.tags && /* @__PURE__ */ React105__namespace.createElement(KanbanCardLabels, null, card.tags.map((tag) => /* @__PURE__ */ React105__namespace.createElement(KanbanCardLabel, { key: tag.id, color: tag.color }, tag.label)))),
    (hasAssignee || hasDueDate || hasSubtasks || hasAttachments) && /* @__PURE__ */ React105__namespace.createElement(KanbanCardFooter, null, hasAssignee && card.assignee && /* @__PURE__ */ React105__namespace.createElement(KanbanCardAvatar, { name: card.assignee.name, avatarUrl: card.assignee.avatarUrl }), hasDueDate && card.dueDate && /* @__PURE__ */ React105__namespace.createElement(KanbanCardDueDate, { date: card.dueDate }), hasSubtasks && /* @__PURE__ */ React105__namespace.createElement(KanbanCardSubtasks, { completed: completedSubtasks, total: totalSubtasks }), hasAttachments && card.attachments && /* @__PURE__ */ React105__namespace.createElement(KanbanCardAttachments, { count: card.attachments.length }))
  );
}
var KanbanCard = React105__namespace.forwardRef(function KanbanCardBase({
  card,
  children,
  isDragging,
  isSelected,
  onClick,
  priority,
  className,
  ...props
}, ref) {
  if (children) {
    return /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        ref,
        "data-dragging": isDragging ? "true" : void 0,
        "data-selected": isSelected ? "true" : void 0,
        "data-priority": priority,
        className: cn(
          "group relative flex flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm",
          "transition-all duration-200",
          "hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "data-[dragging=true]:opacity-50 data-[dragging=true]:shadow-lg",
          "data-[selected=true]:ring-2 data-[selected=true]:ring-ring data-[selected=true]:ring-offset-2",
          "data-[priority=urgent]:border-l-4 data-[priority=urgent]:border-l-red-500",
          "data-[priority=high]:border-l-4 data-[priority=high]:border-l-orange-500",
          "data-[priority=medium]:border-l-4 data-[priority=medium]:border-l-yellow-500",
          "data-[priority=low]:border-l-4 data-[priority=low]:border-l-blue-500",
          className
        ),
        onClick,
        role: onClick ? "button" : "article",
        tabIndex: onClick ? 0 : void 0,
        onKeyDown: (e) => {
          if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick();
          }
        },
        ...props
      },
      children
    );
  }
  if (card) {
    return /* @__PURE__ */ React105__namespace.createElement(DefaultCard, { card, isDragging, isSelected, onClick });
  }
  return null;
});
KanbanCard.Header = KanbanCardHeader;
KanbanCard.Content = KanbanCardContent;
KanbanCard.Footer = KanbanCardFooter;
KanbanCard.Title = KanbanCardTitle;
KanbanCard.Description = KanbanCardDescription;
KanbanCard.Badge = KanbanCardBadge;
KanbanCard.Label = KanbanCardLabel;
KanbanCard.Labels = KanbanCardLabels;
KanbanCard.Avatar = KanbanCardAvatar;
KanbanCard.DueDate = KanbanCardDueDate;
KanbanCard.Subtasks = KanbanCardSubtasks;
KanbanCard.Attachments = KanbanCardAttachments;
var ColumnHeader = React105__namespace.forwardRef(
  ({
    title,
    cardCount,
    cardLimit,
    isCollapsed,
    color,
    isDisabled,
    onAddCard,
    onOptionsClick,
    onCollapseToggle,
    showCollapse = false,
    showAdd = true,
    showOptions = true,
    className,
    ...props
  }, ref) => {
    const isOverLimit = cardLimit && cardCount && cardCount > cardLimit;
    return /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-between gap-2 p-3 border-b",
          "bg-card sticky top-0 z-10",
          color && `border-l-4 border-l-${color}-500`,
          isDisabled && "opacity-50 pointer-events-none",
          className
        ),
        ...props
      },
      /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2 flex-1 min-w-0" }, showCollapse && /* @__PURE__ */ React105__namespace.createElement(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-6 w-6 shrink-0",
          onClick: onCollapseToggle,
          title: isCollapsed ? "Expand column" : "Collapse column"
        },
        /* @__PURE__ */ React105__namespace.createElement(
          lucideReact.ChevronDownIcon,
          {
            className: cn("h-4 w-4 transition-transform", isCollapsed && "-rotate-90")
          }
        )
      ), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React105__namespace.createElement("h3", { className: "font-semibold text-sm truncate" }, title), cardCount !== void 0 && /* @__PURE__ */ React105__namespace.createElement(
        "p",
        {
          className: cn(
            "text-xs",
            isOverLimit ? "text-red-600 dark:text-red-400 font-medium" : "text-muted-foreground"
          )
        },
        cardCount,
        " ",
        cardCount === 1 ? "card" : "cards",
        cardLimit && ` / ${cardLimit}`
      ))),
      /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-1 shrink-0" }, showAdd && /* @__PURE__ */ React105__namespace.createElement(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8",
          onClick: onAddCard,
          title: "Add card"
        },
        /* @__PURE__ */ React105__namespace.createElement(lucideReact.PlusIcon, { className: "h-4 w-4" })
      ), showOptions && /* @__PURE__ */ React105__namespace.createElement(DropdownMenu, null, /* @__PURE__ */ React105__namespace.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8",
          onClick: onOptionsClick,
          title: "Column options"
        },
        /* @__PURE__ */ React105__namespace.createElement(lucideReact.MoreHorizontalIcon, { className: "h-4 w-4" })
      )), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuContent, { align: "end" }, showCollapse && /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, { onClick: onCollapseToggle }, isCollapsed ? "Expand column" : "Collapse column"), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuSeparator, null), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Rename column"), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Sort cards"), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuSeparator, null), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, { className: "text-red-600" }, "Delete column"))))
    );
  }
);
ColumnHeader.displayName = "ColumnHeader";
function DraggableCard({
  card,
  id,
  isDragging,
  onClick,
  renderCard
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging
  } = sortable.useSortable({
    id
  });
  const isDraggingState = isDragging || isSortableDragging;
  const style = {
    transform: utilities.CSS.Transform.toString(transform),
    transition,
    opacity: isDraggingState ? 0 : 1,
    // Hide original when dragging
    touchAction: "none",
    cursor: isDraggingState ? "grabbing" : "grab",
    position: "relative"
  };
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { ref: setNodeRef, style, className: "group", ...attributes, ...listeners }, renderCard ? renderCard(card) : /* @__PURE__ */ React105__namespace.default.createElement(KanbanCard, { card, onClick, isDragging: isDraggingState }));
}
function DraggableColumn({
  column,
  id,
  renderCard,
  onAddCard,
  onCardClick,
  onCardMove,
  isDragging,
  showAdd = true,
  maxHeight = "calc(100vh - 200px)",
  className
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging
  } = sortable.useSortable({
    id
  });
  const style = {
    transform: utilities.CSS.Transform.toString(transform),
    transition,
    opacity: isDragging || isSortableDragging ? 0.5 : 1,
    touchAction: "none"
  };
  const isCollapsed = column.isCollapsed ?? false;
  const isOverLimit = column.cardLimit && column.cards.length > column.cardLimit;
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      ref: setNodeRef,
      style,
      "data-dragging": isDragging || isSortableDragging ? "true" : void 0,
      "data-collapsed": isCollapsed ? "true" : void 0,
      className: cn(
        "flex flex-col w-80 shrink-0 rounded-lg border bg-card/50",
        "transition-all duration-200",
        "data-[dragging=true]:opacity-50",
        "data-[collapsed=true]:w-12",
        isOverLimit && "border-red-500 border-2",
        className
      )
    },
    /* @__PURE__ */ React105__namespace.default.createElement(
      "div",
      {
        ...attributes,
        ...listeners,
        className: "cursor-grab active:cursor-grabbing select-none",
        style: { touchAction: "none" }
      },
      /* @__PURE__ */ React105__namespace.default.createElement(
        ColumnHeader,
        {
          title: column.title,
          cardCount: column.cards.length,
          cardLimit: column.cardLimit,
          color: column.color,
          isCollapsed,
          isDisabled: column.isDisabled,
          onAddCard,
          showAdd: showAdd && !isCollapsed,
          showOptions: false
        }
      )
    ),
    !isCollapsed && /* @__PURE__ */ React105__namespace.default.createElement(ScrollArea, { className: "flex-1", style: { maxHeight } }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "p-2 space-y-2" }, /* @__PURE__ */ React105__namespace.default.createElement(
      sortable.SortableContext,
      {
        items: column.cards.map((c) => c.id),
        strategy: sortable.verticalListSortingStrategy
      },
      column.cards.map((card, index) => /* @__PURE__ */ React105__namespace.default.createElement(
        DraggableCard,
        {
          key: card.id || index,
          id: `${id}-card-${card.id}`,
          card,
          isDragging: false,
          onClick: () => onCardClick?.(card),
          renderCard: renderCard ? (c) => renderCard(c, column) : void 0
        }
      ))
    ), showAdd && /* @__PURE__ */ React105__namespace.default.createElement(
      "button",
      {
        type: "button",
        onClick: onAddCard,
        className: "w-full p-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors flex items-center gap-2"
      },
      /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "text-lg leading-none" }, "+"),
      "Add card"
    )))
  );
}
function DraggableKanbanBoard({
  columns: initialColumns,
  onCardMove,
  onCardReorder,
  renderCard,
  onCardClick,
  isLoading,
  emptyStateMessage = "No cards yet",
  className
}) {
  const [columns, setColumns] = React105__namespace.useState(initialColumns);
  const [activeId, setActiveId] = React105__namespace.useState(null);
  const [activeCard, setActiveCard] = React105__namespace.useState(null);
  React105__namespace.useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]);
  const sensors = core.useSensors(
    core.useSensor(core.PointerSensor, {
      activationConstraint: {
        distance: 5
      }
    })
  );
  const findCard = React105__namespace.useCallback(
    (cardId) => {
      for (const column of columns) {
        const card = column.cards.find((c) => c.id === cardId);
        if (card) return { card, column };
      }
      return null;
    },
    [columns]
  );
  React105__namespace.useMemo(() => {
    return columns.flatMap((col) => col.cards.map((c) => `${col.id}-card-${c.id}`));
  }, [columns]);
  const handleDragStart = React105__namespace.useCallback(
    (event) => {
      const { active } = event;
      setActiveId(active.id);
      if (active.id.includes("-card-")) {
        const cardId = active.id.replace(/.*-card-/, "");
        const result = findCard(cardId);
        if (result) {
          setActiveCard(result.card);
        }
      }
    },
    [findCard]
  );
  const handleDragEnd = React105__namespace.useCallback(
    (event) => {
      const { active, over } = event;
      setActiveId(null);
      setActiveCard(null);
      if (!over || active.id === over.id) return;
      if (active.id.includes("-card-") && over.id.includes("-card-")) {
        const activeCardId = active.id.replace(/.*-card-/, "");
        const overCardId = over.id.replace(/.*-card-/, "");
        const activeResult = findCard(activeCardId);
        const overResult = findCard(overCardId);
        if (!activeResult || !overResult) return;
        const { card: activeCard2, column: activeColumn } = activeResult;
        const { card: overCard, column: overColumn } = overResult;
        if (activeColumn.id === overColumn.id) {
          const oldIndex = activeColumn.cards.findIndex((c) => c.id === activeCard2.id);
          const newIndex = overColumn.cards.findIndex((c) => c.id === overCard.id);
          if (oldIndex !== newIndex) {
            setColumns((prev) => {
              return prev.map((col) => {
                if (col.id === activeColumn.id) {
                  const newCards = [...col.cards];
                  newCards.splice(oldIndex, 1);
                  newCards.splice(newIndex, 0, activeCard2);
                  return { ...col, cards: newCards };
                }
                return col;
              });
            });
            onCardReorder?.(activeCard2.id, oldIndex, newIndex, activeColumn.id);
          }
        } else {
          setColumns((prev) => {
            return prev.map((col) => {
              if (col.id === activeColumn.id) {
                return { ...col, cards: col.cards.filter((c) => c.id !== activeCard2.id) };
              }
              if (col.id === overColumn.id) {
                const newIndex = col.cards.findIndex((c) => c.id === overCard.id);
                const newCards = [...col.cards];
                newCards.splice(newIndex, 0, activeCard2);
                return { ...col, cards: newCards };
              }
              return col;
            });
          });
          onCardMove?.(activeCard2.id, activeColumn.id, overColumn.id, 0);
        }
      } else if (active.id.includes("-card-") && !over.id.includes("-card-")) {
        const activeCardId = active.id.replace(/.*-card-/, "");
        const result = findCard(activeCardId);
        if (!result) return;
        const { card, column: fromColumn } = result;
        const toColumn = columns.find((c) => c.id === over.id);
        if (toColumn && fromColumn.id !== toColumn.id) {
          setColumns((prev) => {
            return prev.map((col) => {
              if (col.id === fromColumn.id) {
                return { ...col, cards: col.cards.filter((c) => c.id !== card.id) };
              }
              if (col.id === toColumn.id) {
                return { ...col, cards: [...col.cards, card] };
              }
              return col;
            });
          });
          onCardMove?.(card.id, fromColumn.id, toColumn.id, toColumn.cards.length);
        }
      }
    },
    [columns, findCard, onCardMove, onCardReorder]
  );
  if (isLoading) {
    return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex items-center justify-center h-64", className) }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "text-center text-muted-foreground" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "animate-pulse text-2xl" }, "Loading board...")));
  }
  const hasNoCards = columns.every((col) => col.cards.length === 0);
  return /* @__PURE__ */ React105__namespace.createElement(
    core.DndContext,
    {
      sensors,
      collisionDetection: core.closestCenter,
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd
    },
    /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex h-full w-full", className) }, /* @__PURE__ */ React105__namespace.createElement(ScrollArea, { className: "flex-1", orientation: "horizontal" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex h-full gap-4 p-4 min-w-max" }, /* @__PURE__ */ React105__namespace.createElement(
      sortable.SortableContext,
      {
        items: columns.map((c) => c.id),
        strategy: sortable.horizontalListSortingStrategy
      },
      columns.map((column) => /* @__PURE__ */ React105__namespace.createElement(
        sortable.SortableContext,
        {
          key: column.id,
          items: column.cards.map((c) => `${column.id}-card-${c.id}`),
          strategy: sortable.verticalListSortingStrategy
        },
        /* @__PURE__ */ React105__namespace.createElement(
          DraggableColumn,
          {
            id: column.id,
            column,
            renderCard,
            onCardClick,
            showAdd: true
          }
        )
      ))
    ), hasNoCards && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-center min-h-[200px] px-8 py-12 border-2 border-dashed rounded-lg bg-muted/50" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "text-center text-muted-foreground" }, /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-lg font-medium" }, emptyStateMessage), /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-sm mt-1" }, 'Click "Add card" to create your first card')))))),
    /* @__PURE__ */ React105__namespace.createElement(core.DragOverlay, null, activeCard && /* @__PURE__ */ React105__namespace.createElement("div", { className: "rotate-2 shadow-2xl" }, renderCard ? renderCard(activeCard, {}) : /* @__PURE__ */ React105__namespace.createElement(KanbanCard, { card: activeCard, isDragging: true })))
  );
}
var KanbanColumn = React105__namespace.forwardRef(
  function KanbanColumnBase({
    column,
    renderCard,
    onAddCard,
    onCardClick,
    onOptionsClick,
    onCollapseToggle,
    isDragging,
    showCollapse = false,
    showAdd = true,
    showOptions = true,
    maxHeight = "calc(100vh - 200px)",
    className,
    ...props
  }, ref) {
    const isCollapsed = column.isCollapsed ?? false;
    const isOverLimit = column.cardLimit && column.cards.length > column.cardLimit;
    return /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        ref,
        "data-dragging": isDragging ? "true" : void 0,
        "data-collapsed": isCollapsed ? "true" : void 0,
        className: cn(
          "flex flex-col w-80 shrink-0 rounded-lg border bg-card/50",
          "transition-all duration-200",
          "data-[dragging=true]:opacity-50",
          "data-[collapsed=true]:w-12",
          isOverLimit && "border-red-500 border-2",
          className
        ),
        ...props
      },
      /* @__PURE__ */ React105__namespace.createElement(
        ColumnHeader,
        {
          title: column.title,
          cardCount: column.cards.length,
          cardLimit: column.cardLimit,
          color: column.color,
          isCollapsed,
          isDisabled: column.isDisabled,
          onAddCard,
          onOptionsClick,
          onCollapseToggle,
          showCollapse,
          showAdd: showAdd && !isCollapsed,
          showOptions: showOptions && !isCollapsed
        }
      ),
      !isCollapsed && /* @__PURE__ */ React105__namespace.createElement(ScrollArea, { className: "flex-1", style: { maxHeight } }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "p-2 space-y-2" }, column.cards.map((card, index) => /* @__PURE__ */ React105__namespace.createElement("div", { key: card.id || index }, renderCard ? renderCard(card, column) : /* @__PURE__ */ React105__namespace.createElement("div", { className: "p-4 text-center text-sm text-muted-foreground border border-dashed rounded" }, "Provide renderCard prop"))), showAdd && /* @__PURE__ */ React105__namespace.createElement(
        "button",
        {
          type: "button",
          onClick: onAddCard,
          className: "w-full p-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors flex items-center gap-2"
        },
        /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-lg leading-none" }, "+"),
        "Add card"
      )))
    );
  }
);

// src/blocks/kanban/kanban-board.tsx
var KanbanBoard = React105__namespace.forwardRef(
  function KanbanBoardBase({
    columns,
    cards,
    features,
    onCardMove,
    onCardReorder,
    onCardClick,
    isLoading,
    emptyStateMessage = "No cards yet",
    className,
    ...props
  }, ref) {
    features?.dragDrop ?? true;
    const enableCardCreation = features?.cardCreation ?? true;
    const enableColumnCollapse = features?.columnCollapse ?? false;
    const hasNoCards = columns.every((col) => col.cards.length === 0);
    if (isLoading) {
      return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex items-center justify-center h-64", className) }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "text-center text-muted-foreground" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "animate-pulse text-2xl" }, "Loading board...")));
    }
    return /* @__PURE__ */ React105__namespace.createElement("div", { ref, className: cn("flex h-full w-full", className), ...props }, /* @__PURE__ */ React105__namespace.createElement(ScrollArea, { className: "flex-1", orientation: "horizontal" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex h-full gap-4 p-4 min-w-max" }, columns.map((column) => /* @__PURE__ */ React105__namespace.createElement(
      KanbanColumn,
      {
        key: column.id,
        column,
        onAddCard: enableCardCreation && !column.isDisabled ? () => console.log("Add card to", column.id) : void 0,
        onCardClick,
        onOptionsClick: () => console.log("Column options", column.id),
        onCollapseToggle: enableColumnCollapse ? () => console.log("Toggle collapse", column.id) : void 0,
        showCollapse: enableColumnCollapse,
        showAdd: enableCardCreation && !column.isDisabled,
        showOptions: !column.isDisabled
      }
    )), hasNoCards && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center justify-center min-h-[200px] px-8 py-12 border-2 border-dashed rounded-lg bg-muted/50" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "text-center text-muted-foreground" }, /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-lg font-medium" }, emptyStateMessage), /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-sm mt-1" }, 'Click "Add card" to create your first card'))))));
  }
);
var KanbanBoardContext = React105__namespace.createContext(void 0);
function KanbanBoardProvider({
  columns: initialColumns,
  features = {},
  onMoveCard,
  onReorderCard,
  onReorderColumns,
  onAddCard,
  onUpdateCard,
  onDeleteCard,
  children
}) {
  const [state, setState] = React105__namespace.useState({
    columns: initialColumns,
    features: {
      dragDrop: true,
      cardCreation: true,
      cardEditing: true,
      cardDeletion: true,
      columnCollapse: false,
      subtasks: true,
      attachments: true,
      dueDates: true,
      assignees: true,
      tags: true,
      priority: true,
      search: true,
      filters: true,
      columnSorting: false,
      cardSorting: true,
      ...features
    },
    searchQuery: "",
    filters: {},
    isLoading: false,
    error: null
  });
  const optimisticUpdate = React105__namespace.useCallback(
    async (updateFn, apiCall, rollbackFn) => {
      updateFn();
      try {
        await apiCall();
      } catch (error) {
        rollbackFn();
        setState((prev) => ({
          ...prev,
          error: error instanceof Error ? error.message : "Operation failed"
        }));
      }
    },
    []
  );
  const value = React105__namespace.useMemo(
    () => ({
      ...state,
      setSearchQuery: (query) => setState((prev) => ({ ...prev, searchQuery: query })),
      setFilters: (filters) => setState((prev) => ({ ...prev, filters })),
      moveCard: async (cardId, fromColumnId, toColumnId, newIndex) => {
        const previousColumns = state.columns;
        await optimisticUpdate(
          // Update
          () => {
            setState((prev) => {
              const newColumns = prev.columns.map((col) => {
                if (col.id === fromColumnId) {
                  return {
                    ...col,
                    cards: col.cards.filter((c) => c.id !== cardId)
                  };
                }
                if (col.id === toColumnId) {
                  const card = previousColumns.find((c) => c.id === fromColumnId)?.cards.find((c) => c.id === cardId);
                  if (!card) return col;
                  const newCards = [...col.cards];
                  newCards.splice(newIndex, 0, card);
                  return { ...col, cards: newCards };
                }
                return col;
              });
              return { ...prev, columns: newColumns };
            });
          },
          // API
          async () => {
            await onMoveCard?.(cardId, fromColumnId, toColumnId, newIndex);
          },
          // Rollback
          () => {
            setState((prev) => ({ ...prev, columns: previousColumns }));
          }
        );
      },
      reorderCard: async (cardId, fromIndex, toIndex, columnId) => {
        const previousColumns = state.columns;
        await optimisticUpdate(
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) => {
                if (col.id === columnId) {
                  const newCards = [...col.cards];
                  const [removed] = newCards.splice(fromIndex, 1);
                  newCards.splice(toIndex, 0, removed);
                  return { ...col, cards: newCards };
                }
                return col;
              })
            }));
          },
          async () => {
            await onReorderCard?.(cardId, fromIndex, toIndex, columnId);
          },
          () => {
            setState((prev) => ({ ...prev, columns: previousColumns }));
          }
        );
      },
      reorderColumns: async (columnId, fromIndex, toIndex) => {
        const previousColumns = state.columns;
        await optimisticUpdate(
          () => {
            setState((prev) => {
              const newColumns = [...prev.columns];
              const [removed] = newColumns.splice(fromIndex, 1);
              newColumns.splice(toIndex, 0, removed);
              return { ...prev, columns: newColumns };
            });
          },
          async () => {
            await onReorderColumns?.(columnId, fromIndex, toIndex);
          },
          () => {
            setState((prev) => ({ ...prev, columns: previousColumns }));
          }
        );
      },
      addCard: async (columnId, card) => {
        await optimisticUpdate(
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map(
                (col) => col.id === columnId ? { ...col, cards: [...col.cards, card] } : col
              )
            }));
          },
          async () => {
            await onAddCard?.(columnId, card);
          },
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map(
                (col) => col.id === columnId ? { ...col, cards: col.cards.filter((c) => c.id !== card.id) } : col
              )
            }));
          }
        );
      },
      updateCard: async (cardId, updates) => {
        await optimisticUpdate(
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) => ({
                ...col,
                cards: col.cards.map((c) => c.id === cardId ? { ...c, ...updates } : c)
              }))
            }));
          },
          async () => {
            await onUpdateCard?.(cardId, updates);
          },
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) => ({
                ...col,
                cards: col.cards.map(
                  (c) => c.id === cardId ? { ...c, ...updates } : c
                )
              }))
            }));
          }
        );
      },
      deleteCard: async (cardId) => {
        await optimisticUpdate(
          () => {
            setState((prev) => ({
              ...prev,
              columns: prev.columns.map((col) => ({
                ...col,
                cards: col.cards.filter((c) => c.id !== cardId)
              }))
            }));
          },
          async () => {
            await onDeleteCard?.(cardId);
          },
          () => {
            console.error("Delete rollback not implemented");
          }
        );
      },
      setLoading: (loading) => setState((prev) => ({ ...prev, isLoading: loading })),
      setError: (error) => setState((prev) => ({ ...prev, error }))
    }),
    [
      state,
      optimisticUpdate,
      onMoveCard,
      onReorderCard,
      onReorderColumns,
      onAddCard,
      onUpdateCard,
      onDeleteCard
    ]
  );
  return /* @__PURE__ */ React105__namespace.createElement(KanbanBoardContext.Provider, { value }, children);
}
function useKanbanBoard() {
  const context = React105__namespace.useContext(KanbanBoardContext);
  if (context === void 0) {
    throw new Error("useKanbanBoard must be used within a KanbanBoardProvider");
  }
  return context;
}
var QuickAddCard = React105__namespace.forwardRef(
  function QuickAddCardBase({
    isOpen = false,
    value = "",
    onChange,
    onAdd,
    onCancel,
    isSubmitting = false,
    placeholder = "Enter card title...",
    addButtonText = "Add card",
    cancelButtonText = "Cancel",
    className,
    ...props
  }, ref) {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (value.trim()) {
        onAdd?.(value.trim());
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCancel?.();
      }
    };
    if (!isOpen) return null;
    return /* @__PURE__ */ React105__namespace.createElement("div", { ref, className: cn("p-2", className), ...props }, /* @__PURE__ */ React105__namespace.createElement("form", { onSubmit: handleSubmit, onKeyDown: handleKeyDown }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React105__namespace.createElement(
      Textarea,
      {
        value,
        onChange: (e) => onChange?.(e.target.value),
        placeholder,
        className: "min-h-[80px] resize-none",
        autoFocus: true
      }
    ), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        type: "submit",
        size: "sm",
        disabled: !value.trim() || isSubmitting,
        className: "gap-1"
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.PlusIcon, { className: "h-4 w-4" }),
      addButtonText
    ), /* @__PURE__ */ React105__namespace.createElement(Button, { type: "button", variant: "ghost", size: "sm", onClick: onCancel, className: "gap-1" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.XIcon, { className: "h-4 w-4" }), cancelButtonText)))));
  }
);

// src/blocks/kanban/types.ts
var defaultFeatures = {
  dragDrop: true,
  cardCreation: true,
  cardEditing: true,
  cardDeletion: true,
  columnCollapse: false,
  subtasks: true,
  attachments: true,
  dueDates: true,
  assignees: true,
  tags: true,
  priority: true,
  search: true,
  filters: true,
  columnSorting: false,
  cardSorting: true
};
function AppShellHeader({ children }) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ React105__namespace.default.createElement("header", { className: "flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 lg:px-6" }, isMobile && /* @__PURE__ */ React105__namespace.default.createElement(React105__namespace.default.Fragment, null, /* @__PURE__ */ React105__namespace.default.createElement(SidebarTrigger, { className: "-ml-1" }), /* @__PURE__ */ React105__namespace.default.createElement(Separator, { orientation: "vertical", className: "mr-2 h-4" })), /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex flex-1 items-center justify-between gap-4" }, children));
}
function AppShell({
  sidebar,
  sidebarHeader,
  sidebarFooter,
  header,
  children,
  footer,
  defaultOpen = true,
  variant = "sidebar",
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(SidebarProvider, { defaultOpen }, /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("flex min-h-screen w-full", className) }, (sidebar || sidebarHeader || sidebarFooter) && /* @__PURE__ */ React105__namespace.default.createElement(Sidebar, { variant, className: "border-r" }, sidebarHeader && /* @__PURE__ */ React105__namespace.default.createElement(SidebarHeader, null, sidebarHeader), /* @__PURE__ */ React105__namespace.default.createElement(SidebarContent, null, sidebar), sidebarFooter && /* @__PURE__ */ React105__namespace.default.createElement(SidebarFooter, null, sidebarFooter), /* @__PURE__ */ React105__namespace.default.createElement(SidebarRail, null)), /* @__PURE__ */ React105__namespace.default.createElement(SidebarInset, null, (header || footer) && /* @__PURE__ */ React105__namespace.default.createElement(AppShellHeader, null, header), /* @__PURE__ */ React105__namespace.default.createElement("main", { className: "flex-1 flex flex-col p-4 lg:p-6 min-h-0" }, children), footer && /* @__PURE__ */ React105__namespace.default.createElement("footer", { className: "border-t bg-background py-4 px-6 shrink-0" }, footer))));
}
var ratioValues = {
  square: 1,
  // 1:1
  video: 16 / 9,
  // 16:9
  photo: 4 / 3,
  // 4:3
  wide: 21 / 9,
  // 21:9
  golden: 1.618
  // golden ratio
};
function AspectRatio({ children, ratio = "video", className }) {
  const ratioValue = typeof ratio === "number" ? ratio : ratioValues[ratio] || 16 / 9;
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn("relative w-full overflow-hidden", className),
      style: { paddingBottom: `${1 / ratioValue * 100}%` }
    },
    children && /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "absolute inset-0 flex items-center justify-center" }, children)
  );
}
function Center({
  children,
  horizontal = true,
  vertical = true,
  fullHeight = false,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "flex",
        horizontal && "justify-center",
        vertical && "items-center",
        fullHeight && "min-h-screen",
        className
      )
    },
    children
  );
}
var sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-8xl",
  "3xl": "max-w-9xl",
  full: "max-w-full"
};
var paddingClasses = {
  none: "",
  sm: "p-2",
  md: "p-4 md:p-6",
  lg: "p-4 md:p-8"
};
function Container({
  children,
  size = "xl",
  padding = "md",
  center = false,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "mx-auto w-full",
        sizeClasses[size],
        paddingClasses[padding],
        center && "flex flex-col items-center",
        className
      )
    },
    children
  );
}
function TeamSwitcher({
  teams,
  activeTeam,
  onTeamChange
}) {
  const { isMobile } = useSidebar();
  const [active, setActive] = React105__namespace.useState(activeTeam || teams?.[0]);
  if (!teams || teams.length === 0) return null;
  const handleTeamChange = (team) => {
    setActive(team);
    onTeamChange?.(team);
  };
  return /* @__PURE__ */ React105__namespace.createElement(SidebarMenu, null, /* @__PURE__ */ React105__namespace.createElement(SidebarMenuItem, null, /* @__PURE__ */ React105__namespace.createElement(DropdownMenu, null, /* @__PURE__ */ React105__namespace.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement(
    SidebarMenuButton,
    {
      size: "lg",
      className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    },
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, active?.icon && /* @__PURE__ */ React105__namespace.createElement(active.icon, { className: "size-4" })),
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "grid flex-1 text-left text-sm leading-tight" }, /* @__PURE__ */ React105__namespace.createElement("span", { className: "truncate font-medium" }, active?.name), /* @__PURE__ */ React105__namespace.createElement("span", { className: "truncate text-xs" }, active?.plan))
  )), /* @__PURE__ */ React105__namespace.createElement(
    DropdownMenuContent,
    {
      className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
      align: "start",
      side: isMobile ? "bottom" : "right",
      sideOffset: 4
    },
    /* @__PURE__ */ React105__namespace.createElement(DropdownMenuLabel, { className: "text-xs text-muted-foreground" }, "Teams"),
    teams.map((team) => /* @__PURE__ */ React105__namespace.createElement(
      DropdownMenuItem,
      {
        key: team.name,
        onClick: () => handleTeamChange(team),
        className: "gap-2 p-2"
      },
      /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex size-6 items-center justify-center rounded-md border" }, team.icon && /* @__PURE__ */ React105__namespace.createElement(team.icon, { className: "size-3.5 shrink-0" })),
      team.name
    ))
  ))));
}
function NavItemComponent({ item, isActive }) {
  const hasSubItems = item.items && item.items.length > 0;
  if (hasSubItems) {
    return /* @__PURE__ */ React105__namespace.createElement(Collapsible, { defaultOpen: item.isActive, className: "group/collapsible" }, /* @__PURE__ */ React105__namespace.createElement(CollapsibleTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement(SidebarMenuButton, { tooltip: item.title }, item.icon && /* @__PURE__ */ React105__namespace.createElement(item.icon, null), /* @__PURE__ */ React105__namespace.createElement("span", null, item.title), item.badge !== void 0 && /* @__PURE__ */ React105__namespace.createElement(SidebarMenuBadge, null, item.badge))), /* @__PURE__ */ React105__namespace.createElement(CollapsibleContent, null, /* @__PURE__ */ React105__namespace.createElement(SidebarMenuSub, null, item.items?.map((subItem) => /* @__PURE__ */ React105__namespace.createElement(SidebarMenuSubItem, { key: subItem.id }, /* @__PURE__ */ React105__namespace.createElement(SidebarMenuSubButton, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement("a", { href: subItem.url, className: cn(subItem.disabled && "opacity-50") }, /* @__PURE__ */ React105__namespace.createElement("span", null, subItem.title))))))));
  }
  return /* @__PURE__ */ React105__namespace.createElement(
    SidebarMenuButton,
    {
      asChild: true,
      isActive,
      tooltip: item.title,
      className: cn(item.disabled && "opacity-50")
    },
    /* @__PURE__ */ React105__namespace.createElement("a", { href: item.url }, item.icon && /* @__PURE__ */ React105__namespace.createElement(item.icon, null), /* @__PURE__ */ React105__namespace.createElement("span", null, item.title), item.badge !== void 0 && /* @__PURE__ */ React105__namespace.createElement(SidebarMenuBadge, null, item.badge))
  );
}
function NavGroupComponent({ group, activeUrl }) {
  return /* @__PURE__ */ React105__namespace.createElement(SidebarGroup, null, /* @__PURE__ */ React105__namespace.createElement(SidebarGroupLabel, null, group.title), /* @__PURE__ */ React105__namespace.createElement(SidebarMenu, null, group.items.map((item) => /* @__PURE__ */ React105__namespace.createElement(SidebarMenuItem, { key: item.id }, /* @__PURE__ */ React105__namespace.createElement(NavItemComponent, { item, isActive: item.url === activeUrl || item.isActive })))));
}
function NavUser({ user }) {
  const { isMobile } = useSidebar();
  if (!user) return null;
  return /* @__PURE__ */ React105__namespace.createElement(SidebarMenu, null, /* @__PURE__ */ React105__namespace.createElement(SidebarMenuItem, null, /* @__PURE__ */ React105__namespace.createElement(DropdownMenu, null, /* @__PURE__ */ React105__namespace.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React105__namespace.createElement(
    SidebarMenuButton,
    {
      size: "lg",
      className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    },
    /* @__PURE__ */ React105__namespace.createElement(Avatar, { className: "h-8 w-8 rounded-lg" }, /* @__PURE__ */ React105__namespace.createElement(AvatarImage, { src: user.avatar, alt: user.name }), /* @__PURE__ */ React105__namespace.createElement(AvatarFallback, { className: "rounded-lg" }, user.fallback || user.name.charAt(0).toUpperCase())),
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "grid flex-1 text-left text-sm leading-tight" }, /* @__PURE__ */ React105__namespace.createElement("span", { className: "truncate font-medium" }, user.name), /* @__PURE__ */ React105__namespace.createElement("span", { className: "truncate text-xs" }, user.email))
  )), /* @__PURE__ */ React105__namespace.createElement(
    DropdownMenuContent,
    {
      className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
      side: isMobile ? "bottom" : "right",
      align: "end",
      sideOffset: 4
    },
    /* @__PURE__ */ React105__namespace.createElement(DropdownMenuLabel, { className: "p-0 font-normal" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, /* @__PURE__ */ React105__namespace.createElement(Avatar, { className: "h-8 w-8 rounded-lg" }, /* @__PURE__ */ React105__namespace.createElement(AvatarImage, { src: user.avatar, alt: user.name }), /* @__PURE__ */ React105__namespace.createElement(AvatarFallback, { className: "rounded-lg" }, user.fallback || user.name.charAt(0).toUpperCase())), /* @__PURE__ */ React105__namespace.createElement("div", { className: "grid flex-1 text-left text-sm leading-tight" }, /* @__PURE__ */ React105__namespace.createElement("span", { className: "truncate font-medium" }, user.name), /* @__PURE__ */ React105__namespace.createElement("span", { className: "truncate text-xs" }, user.email)))),
    /* @__PURE__ */ React105__namespace.createElement(DropdownMenuSeparator, null),
    /* @__PURE__ */ React105__namespace.createElement(DropdownMenuGroup, null, /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Account"), /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Settings")),
    /* @__PURE__ */ React105__namespace.createElement(DropdownMenuSeparator, null),
    /* @__PURE__ */ React105__namespace.createElement(DropdownMenuItem, null, "Log out")
  ))));
}
function DefaultSidebarHeader({
  teams,
  activeTeam,
  onTeamChange
}) {
  return /* @__PURE__ */ React105__namespace.createElement(SidebarHeader, null, /* @__PURE__ */ React105__namespace.createElement(TeamSwitcher, { teams, activeTeam, onTeamChange }));
}
function DefaultSidebarFooter({ user }) {
  return /* @__PURE__ */ React105__namespace.createElement(SidebarFooter, null, /* @__PURE__ */ React105__namespace.createElement(NavUser, { user }));
}
function DashboardHeader({ children }) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ React105__namespace.createElement("header", { className: "flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 lg:px-6" }, isMobile && /* @__PURE__ */ React105__namespace.createElement(React105__namespace.Fragment, null, /* @__PURE__ */ React105__namespace.createElement(SidebarTrigger, { className: "-ml-1" }), /* @__PURE__ */ React105__namespace.createElement(Separator, { orientation: "vertical", className: "mr-2 h-4" })), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex flex-1 items-center justify-between gap-4" }, children));
}
function DashboardLayout({
  navGroups,
  activeUrl,
  user,
  teams,
  activeTeam,
  onTeamChange,
  sidebarHeader,
  sidebarFooter,
  header,
  children,
  footer,
  defaultOpen = true,
  variant = "sidebar",
  className
}) {
  return /* @__PURE__ */ React105__namespace.createElement(SidebarProvider, { defaultOpen }, /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex min-h-screen w-full", className) }, /* @__PURE__ */ React105__namespace.createElement(Sidebar, { collapsible: "icon", variant, className: "border-r" }, sidebarHeader ? /* @__PURE__ */ React105__namespace.createElement(SidebarHeader, null, sidebarHeader) : /* @__PURE__ */ React105__namespace.createElement(
    DefaultSidebarHeader,
    {
      teams,
      activeTeam,
      onTeamChange
    }
  ), /* @__PURE__ */ React105__namespace.createElement(SidebarContent, null, navGroups?.map((group) => /* @__PURE__ */ React105__namespace.createElement(NavGroupComponent, { key: group.id, group, activeUrl }))), sidebarFooter ? /* @__PURE__ */ React105__namespace.createElement(SidebarFooter, null, sidebarFooter) : /* @__PURE__ */ React105__namespace.createElement(DefaultSidebarFooter, { user }), /* @__PURE__ */ React105__namespace.createElement(SidebarRail, null)), /* @__PURE__ */ React105__namespace.createElement(SidebarInset, null, (header || footer) && /* @__PURE__ */ React105__namespace.createElement(DashboardHeader, null, header), /* @__PURE__ */ React105__namespace.createElement("main", { className: "flex-1 flex flex-col p-4 lg:p-6 min-h-0" }, children), footer && /* @__PURE__ */ React105__namespace.createElement("footer", { className: "border-t bg-background py-4 px-6 shrink-0" }, footer))));
}
var variantClasses = {
  default: "",
  sticky: "sticky bottom-0",
  fixed: "fixed bottom-0 left-0 right-0"
};
function Footer({ children, variant = "default", center = false, className }) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "footer",
    {
      className: cn(
        "border-t bg-background py-4 px-6",
        variantClasses[variant],
        center && "text-center",
        className
      )
    },
    children
  );
}
function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  actions,
  children,
  className
}) {
  return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("space-y-4", className) }, breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ React105__namespace.createElement(Breadcrumb, null, /* @__PURE__ */ React105__namespace.createElement(BreadcrumbList, null, breadcrumbs.map((crumb, index) => {
    const isLast = index === breadcrumbs.length - 1;
    return /* @__PURE__ */ React105__namespace.createElement(React105__namespace.Fragment, { key: `${crumb.label}-${index}` }, /* @__PURE__ */ React105__namespace.createElement(BreadcrumbItem, null, isLast ? /* @__PURE__ */ React105__namespace.createElement(BreadcrumbPage, null, crumb.label) : crumb.href ? /* @__PURE__ */ React105__namespace.createElement(BreadcrumbLink, { href: crumb.href }, crumb.label) : /* @__PURE__ */ React105__namespace.createElement("span", null, crumb.label)), !isLast && /* @__PURE__ */ React105__namespace.createElement(BreadcrumbSeparator, null));
  }))), /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-start justify-between gap-4" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React105__namespace.createElement("h1", { className: "text-2xl font-semibold tracking-tight" }, title), subtitle && /* @__PURE__ */ React105__namespace.createElement("p", { className: "text-sm text-muted-foreground" }, subtitle)), actions && /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center gap-2" }, actions)), children && /* @__PURE__ */ React105__namespace.createElement("div", { className: "pt-2" }, children), /* @__PURE__ */ React105__namespace.createElement(Separator, null));
}
var defaultColumns = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
  wide: 4
};
function ResponsiveGrid({
  children,
  columns = defaultColumns,
  gap = 4,
  className
}) {
  const mobile = columns.mobile ?? 1;
  const tablet = columns.tablet ?? 2;
  const desktop = columns.desktop ?? 3;
  const wide = columns.wide ?? 4;
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "grid",
        `grid-cols-${mobile}`,
        tablet !== mobile && `sm:grid-cols-${tablet}`,
        desktop !== tablet && `lg:grid-cols-${desktop}`,
        wide !== desktop && `xl:grid-cols-${wide}`,
        className
      ),
      style: { gap: `${gap * 0.25}rem` }
    },
    children
  );
}
var widthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl"
};
function RightDrawer({
  open,
  onOpenChange,
  title,
  description,
  width = "md",
  children,
  showClose = true,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(Sheet, { open, onOpenChange }, /* @__PURE__ */ React105__namespace.default.createElement(SheetContent, { className: cn(widthClasses[width], "overflow-y-auto", className) }, (title || showClose) && /* @__PURE__ */ React105__namespace.default.createElement(SheetHeader, { className: "mb-4" }, title && /* @__PURE__ */ React105__namespace.default.createElement(SheetTitle, null, title), description && /* @__PURE__ */ React105__namespace.default.createElement(SheetDescription, null, description)), children));
}
function SplitPane({
  primary,
  secondary,
  initialRatio = 50,
  minPrimaryWidth = 200,
  minSecondaryWidth = 200,
  orientation = "horizontal",
  className
}) {
  const [ratio, setRatio] = React105__namespace.useState(initialRatio);
  const containerRef = React105__namespace.useRef(null);
  const isDragging = React105__namespace.useRef(false);
  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.cursor = orientation === "horizontal" ? "col-resize" : "row-resize";
    document.body.style.userSelect = "none";
  };
  React105__namespace.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newRatio;
      if (orientation === "horizontal") {
        newRatio = (e.clientX - rect.left) / rect.width * 100;
      } else {
        newRatio = (e.clientY - rect.top) / rect.height * 100;
      }
      const containerSize = orientation === "horizontal" ? rect.width : rect.height;
      const minPrimaryPercent = minPrimaryWidth / containerSize * 100;
      const minSecondaryPercent = minSecondaryWidth / containerSize * 100;
      newRatio = Math.max(minPrimaryPercent, Math.min(100 - minSecondaryPercent, newRatio));
      setRatio(newRatio);
    };
    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [orientation, minPrimaryWidth, minSecondaryWidth]);
  const isHorizontal = orientation === "horizontal";
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      ref: containerRef,
      className: cn("flex", isHorizontal ? "flex-row" : "flex-col", className)
    },
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "overflow-auto", style: { [isHorizontal ? "width" : "height"]: `${ratio}%` } }, primary),
    /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        onMouseDown: handleMouseDown,
        className: cn(
          "flex shrink-0 items-center justify-center bg-muted hover:bg-primary/10 cursor-col-resize",
          isHorizontal ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize"
        )
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.GripVerticalIcon, { className: cn("text-muted-foreground", !isHorizontal && "rotate-90") })
    ),
    /* @__PURE__ */ React105__namespace.createElement(
      "div",
      {
        className: "overflow-auto",
        style: { [isHorizontal ? "width" : "height"]: `${100 - ratio}%` }
      },
      secondary
    )
  );
}
var alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
};
var justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
};
function Stack({
  children,
  direction = "vertical",
  gap = 4,
  align,
  justify,
  wrap = false,
  fullWidth = false,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        align && alignClasses[align],
        justify && justifyClasses[justify],
        wrap && "flex-wrap",
        fullWidth && "w-full",
        className
      ),
      style: { gap: `${gap * 0.25}rem` }
    },
    children
  );
}
function HStack(props) {
  return /* @__PURE__ */ React105__namespace.default.createElement(Stack, { ...props, direction: "horizontal" });
}
function VStack(props) {
  return /* @__PURE__ */ React105__namespace.default.createElement(Stack, { ...props, direction: "vertical" });
}
function StickyHeader({
  children,
  offset = 0,
  showBorder = true,
  className
}) {
  const [isScrolled, setIsScrolled] = React105__namespace.useState(false);
  React105__namespace.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > offset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);
  return /* @__PURE__ */ React105__namespace.createElement(
    "div",
    {
      className: cn(
        "sticky top-0 z-40 w-full bg-background transition-all duration-200",
        isScrolled && showBorder && "border-b shadow-sm",
        className
      )
    },
    children
  );
}
function ThreeColumnLayout({
  sidebar,
  children,
  aside,
  sidebarWidth = 240,
  asideWidth = 320,
  sidebarCollapsible = true,
  asideCollapsible = true,
  defaultSidebarCollapsed = false,
  defaultAsideCollapsed = false,
  className
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = React105__namespace.useState(defaultSidebarCollapsed);
  const [asideCollapsed, setAsideCollapsed] = React105__namespace.useState(defaultAsideCollapsed);
  return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex min-h-screen bg-background", className) }, /* @__PURE__ */ React105__namespace.createElement(
    "aside",
    {
      className: cn(
        "flex flex-col border-r bg-card transition-all duration-300",
        sidebarCollapsed ? "w-16" : ""
      ),
      style: { width: sidebarCollapsed ? 64 : sidebarWidth }
    },
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex h-16 items-center justify-between border-b px-4" }, !sidebarCollapsed && /* @__PURE__ */ React105__namespace.createElement("span", { className: "font-semibold" }, "Nav"), sidebarCollapsible && sidebarCollapsed && /* @__PURE__ */ React105__namespace.createElement(Button, { variant: "ghost", size: "sm", onClick: () => setSidebarCollapsed(false) }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronRight, { className: "h-4 w-4" }))),
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1 overflow-y-auto py-4" }, sidebar),
    sidebarCollapsible && !sidebarCollapsed && /* @__PURE__ */ React105__namespace.createElement("div", { className: "border-t p-2" }, /* @__PURE__ */ React105__namespace.createElement(
      Button,
      {
        variant: "ghost",
        size: "sm",
        className: "w-full",
        onClick: () => setSidebarCollapsed(true)
      },
      /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronLeft, { className: "h-4 w-4" })
    ))
  ), /* @__PURE__ */ React105__namespace.createElement("main", { className: "flex-1 min-w-0 overflow-auto" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "min-h-screen p-6" }, children)), aside && /* @__PURE__ */ React105__namespace.createElement(
    "aside",
    {
      className: cn(
        "flex flex-col border-l bg-card transition-all duration-300",
        asideCollapsed ? "w-0 overflow-hidden" : ""
      ),
      style: { width: asideCollapsed ? 0 : asideWidth }
    },
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex h-16 items-center justify-between border-b px-4" }, /* @__PURE__ */ React105__namespace.createElement("span", { className: "font-semibold" }, "Details"), asideCollapsible && /* @__PURE__ */ React105__namespace.createElement(Button, { variant: "ghost", size: "sm", onClick: () => setAsideCollapsed(true) }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronRight, { className: "h-4 w-4" }))),
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1 overflow-y-auto py-4" }, aside)
  ));
}
function TwoColumnLayout({
  sidebar,
  children,
  sidebarWidth = 280,
  collapsible = true,
  defaultCollapsed = false,
  sidebarPosition = "left",
  className
}) {
  const [collapsed, setCollapsed] = React105__namespace.useState(defaultCollapsed);
  return /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex min-h-screen bg-background", className) }, /* @__PURE__ */ React105__namespace.createElement(
    "aside",
    {
      className: cn(
        "flex flex-col border-r bg-card transition-all duration-300",
        collapsed ? "w-16" : ""
      ),
      style: { width: collapsed ? 64 : sidebarWidth }
    },
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex h-16 items-center justify-between border-b px-4" }, !collapsed && /* @__PURE__ */ React105__namespace.createElement("span", { className: "font-semibold" }, "Sidebar"), collapsible && /* @__PURE__ */ React105__namespace.createElement(Button, { variant: "ghost", size: "sm", onClick: () => setCollapsed(!collapsed) }, collapsed ? /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronRight, { className: "h-4 w-4" }) : /* @__PURE__ */ React105__namespace.createElement(lucideReact.ChevronLeft, { className: "h-4 w-4" }))),
    /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex-1 overflow-y-auto py-4" }, sidebar)
  ), /* @__PURE__ */ React105__namespace.createElement("div", { className: cn("flex-1 min-w-0", sidebarPosition === "right" && "order-first") }, /* @__PURE__ */ React105__namespace.createElement("main", { className: "min-h-screen p-6" }, children)));
}
function BreadcrumbTrail({
  items,
  collapsible = false,
  maxItems = 3,
  className
}) {
  if (!items || items.length === 0) return null;
  const shouldCollapse = collapsible && items.length > maxItems;
  const getDisplayItems = () => {
    if (!shouldCollapse) return items.map((item, i) => ({ ...item, key: `item-${i}` }));
    const first = items[0];
    const last = items[items.length - 1];
    const middle = items.slice(1, items.length - 1);
    return [
      { ...first, key: "first" },
      { label: "...", key: "ellipsis" },
      ...middle.slice(-(maxItems - 2)).map((item, i) => ({ ...item, key: `middle-${i}` })),
      { ...last, key: "last" }
    ];
  };
  const displayItems = getDisplayItems();
  return /* @__PURE__ */ React105__namespace.createElement(Breadcrumb, { className }, /* @__PURE__ */ React105__namespace.createElement(BreadcrumbList, null, displayItems.map((item, index) => /* @__PURE__ */ React105__namespace.createElement(React105__namespace.Fragment, { key: item.key }, /* @__PURE__ */ React105__namespace.createElement(BreadcrumbItem, null, item.isActive || index === displayItems.length - 1 ? /* @__PURE__ */ React105__namespace.createElement(BreadcrumbPage, null, item.label) : item.href ? /* @__PURE__ */ React105__namespace.createElement(BreadcrumbLink, { href: item.href }, item.label) : /* @__PURE__ */ React105__namespace.createElement("span", { className: "text-muted-foreground" }, item.label)), index < displayItems.length - 1 && /* @__PURE__ */ React105__namespace.createElement(BreadcrumbSeparator, null)))));
}
function CommandPalette({
  open,
  onOpenChange,
  items = [],
  placeholder = "Type a command or search...",
  className
}) {
  const [query, setQuery] = React105__namespace.useState("");
  const filteredItems = items.filter(
    (item) => item.label.toLowerCase().includes(query.toLowerCase())
  );
  return /* @__PURE__ */ React105__namespace.createElement(Dialog, { open, onOpenChange }, /* @__PURE__ */ React105__namespace.createElement(DialogContent, { className: "max-w-[600px] p-0 overflow-hidden" }, /* @__PURE__ */ React105__namespace.createElement("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "" }, /* @__PURE__ */ React105__namespace.createElement(lucideReact.SearchIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ React105__namespace.createElement(
    "input",
    {
      "cmdk-input": "",
      className: "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
      placeholder,
      value: query,
      onChange: (e) => setQuery(e.target.value)
    }
  )), /* @__PURE__ */ React105__namespace.createElement("div", { className: "max-h-[300px] overflow-y-auto p-2" }, filteredItems.length === 0 ? /* @__PURE__ */ React105__namespace.createElement("p", { className: "p-4 text-center text-sm text-muted-foreground" }, "No results found.") : /* @__PURE__ */ React105__namespace.createElement("div", { className: "space-y-1" }, filteredItems.map((item) => /* @__PURE__ */ React105__namespace.createElement(
    "button",
    {
      type: "button",
      key: item.id,
      className: "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground w-full text-left",
      onClick: () => {
        item.onSelect?.();
        onOpenChange?.(false);
      }
    },
    item.icon,
    /* @__PURE__ */ React105__namespace.createElement("span", { className: "ml-2" }, item.label)
  ))))));
}
function MobileNav({
  items,
  activeItem,
  showSearch = false,
  onSearch,
  onMenu,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement(
    "div",
    {
      className: cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t bg-background px-4 py-2 safe-area-inset-bottom",
        className
      )
    },
    /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "flex items-center justify-around" }, onMenu && /* @__PURE__ */ React105__namespace.default.createElement(
      "button",
      {
        onClick: onMenu,
        className: "flex flex-col items-center gap-1 p-2 text-muted-foreground"
      },
      /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.MenuIcon, { className: "h-5 w-5" }),
      /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "text-xs" }, "Menu")
    ), showSearch && /* @__PURE__ */ React105__namespace.default.createElement(
      "button",
      {
        onClick: onSearch,
        className: "flex flex-col items-center gap-1 p-2 text-muted-foreground"
      },
      /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.SearchIcon, { className: "h-5 w-5" }),
      /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "text-xs" }, "Search")
    ), items.map((item) => {
      const isActive = activeItem === item.id;
      return /* @__PURE__ */ React105__namespace.default.createElement(
        "button",
        {
          key: item.id,
          onClick: item.onClick,
          className: cn(
            "relative flex flex-col items-center gap-1 p-2",
            isActive ? "text-primary" : "text-muted-foreground"
          )
        },
        /* @__PURE__ */ React105__namespace.default.createElement("div", { className: "relative" }, item.icon, item.badge !== void 0 && item.badge > 0 && /* @__PURE__ */ React105__namespace.default.createElement(
          Badge,
          {
            variant: "destructive",
            className: "absolute -right-1 -top-1 h-4 w-4 p-0 text-[10px]"
          },
          item.badge > 9 ? "9+" : item.badge
        )),
        /* @__PURE__ */ React105__namespace.default.createElement("span", { className: "text-xs" }, item.label)
      );
    }))
  );
}
function SectionJumper({
  sections,
  activeSection,
  onSectionClick,
  showIcons = true,
  className
}) {
  return /* @__PURE__ */ React105__namespace.default.createElement("div", { className: cn("flex flex-wrap gap-1", className) }, sections.map((section) => {
    const isActive = activeSection === section.id;
    return /* @__PURE__ */ React105__namespace.default.createElement(
      Button,
      {
        key: section.id,
        variant: isActive ? "default" : "ghost",
        size: "sm",
        onClick: () => onSectionClick?.(section.id),
        className: cn("gap-1", !isActive && "text-muted-foreground")
      },
      showIcons && section.icon,
      section.label,
      /* @__PURE__ */ React105__namespace.default.createElement(lucideReact.ChevronRightIcon, { className: "h-3 w-3" })
    );
  }));
}
function TabsPanel({
  items,
  defaultTab,
  value,
  onValueChange,
  variant = "default",
  className
}) {
  const defaultValue = defaultTab || items[0]?.id;
  const variantClass = variant === "pills" ? "bg-muted p-1" : variant === "outline" ? "border-b" : "";
  return /* @__PURE__ */ React105__namespace.default.createElement(
    Tabs,
    {
      defaultValue,
      value,
      onValueChange,
      className
    },
    /* @__PURE__ */ React105__namespace.default.createElement(TabsList, { className: cn(variantClass) }, items.map((item) => /* @__PURE__ */ React105__namespace.default.createElement(TabsTrigger, { key: item.id, value: item.id, disabled: item.disabled }, item.label))),
    items.map((item) => /* @__PURE__ */ React105__namespace.default.createElement(TabsContent, { key: item.id, value: item.id }, item.content))
  );
}

exports.ActivityTimeline = ActivityTimeline;
exports.AppShell = AppShell;
exports.AspectRatio = AspectRatio;
exports.Avatar = KanbanCardAvatar;
exports.Badge = KanbanCardBadge;
exports.BoardToolbar = BoardToolbar;
exports.BreadcrumbTrail = BreadcrumbTrail;
exports.Card = KanbanCard;
exports.CardGrid = CardGrid;
exports.Center = Center;
exports.ColumnHeader = ColumnHeader;
exports.CommandPalette = CommandPalette;
exports.ConfirmationDialog = ConfirmationDialog;
exports.ConnectionStatus = ConnectionStatus;
exports.Container = Container;
exports.Content = KanbanCardContent;
exports.DashboardLayout = DashboardLayout;
exports.DataGrid = DataGrid;
exports.Description = KanbanCardDescription;
exports.DraggableCard = DraggableCard;
exports.DraggableColumn = DraggableColumn;
exports.DraggableKanbanBoard = DraggableKanbanBoard;
exports.DueDate = KanbanCardDueDate;
exports.DurationPicker = DurationPicker;
exports.EmptyState = EmptyState;
exports.EntityCard = EntityCard;
exports.ErrorFallback = ErrorFallback;
exports.FilterBar = FilterBar;
exports.FilterChip = FilterChip;
exports.FilterChips = FilterChips;
exports.FilterDialog = FilterDialog;
exports.Footer = Footer;
exports.FormBuilder = FormBuilder;
exports.FormSection = FormSection;
exports.FormWizard = FormWizard;
exports.HStack = HStack;
exports.Header = KanbanCardHeader;
exports.KanbanBoard = KanbanBoard;
exports.KanbanBoardProvider = KanbanBoardProvider;
exports.KanbanCard = KanbanCard;
exports.KanbanCardFooter = KanbanCardFooter;
exports.KanbanColumn = KanbanColumn;
exports.Label = KanbanCardLabel;
exports.Labels = KanbanCardLabels;
exports.LoadingOverlay = LoadingOverlay;
exports.MasonryBoard = MasonryBoard;
exports.MetricCard = MetricCard;
exports.MobileNav = MobileNav;
exports.PageHeader = PageHeader;
exports.Pagination = Pagination2;
exports.ProgressTracker = ProgressTracker;
exports.QuickAddCard = QuickAddCard;
exports.ResponsiveGrid = ResponsiveGrid;
exports.RightDrawer = RightDrawer;
exports.SearchBar = SearchBar;
exports.SectionHeader = SectionHeader;
exports.SectionJumper = SectionJumper;
exports.SkeletonGenerator = SkeletonGenerator;
exports.SmartDataTable = SmartDataTable;
exports.SplitPane = SplitPane;
exports.Stack = Stack;
exports.StatCard = StatCard;
exports.StatusGrid = StatusGrid;
exports.StickyActions = StickyActions;
exports.StickyHeader = StickyHeader;
exports.Subtasks = KanbanCardSubtasks;
exports.TabsPanel = TabsPanel;
exports.ThreeColumnLayout = ThreeColumnLayout;
exports.Title = KanbanCardTitle;
exports.ToastManager = ToastManager;
exports.TwoColumnLayout = TwoColumnLayout;
exports.VStack = VStack;
exports.defaultFeatures = defaultFeatures;
exports.useKanbanBoard = useKanbanBoard;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map