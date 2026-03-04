import { Accordion as Accordion$1, AlertDialog as AlertDialog$1, AspectRatio as AspectRatio$1, Avatar as Avatar$1, Separator as Separator$1, Checkbox as Checkbox$1, Collapsible as Collapsible$1, Dialog as Dialog$1, ContextMenu as ContextMenu$1, Direction, DropdownMenu as DropdownMenu$1, Label as Label$1, Slot, HoverCard as HoverCard$1, Menubar as Menubar$1, NavigationMenu as NavigationMenu$1, Popover as Popover$1, Progress as Progress$1, RadioGroup as RadioGroup$1, ScrollArea as ScrollArea$1, Select as Select$1, Tooltip as Tooltip$1, Slider as Slider$1, Switch as Switch$1, Tabs as Tabs$1, Toggle as Toggle$1, ToggleGroup as ToggleGroup$1 } from 'radix-ui';
import * as React$1 from 'react';
import React__default from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { DayPicker, DayButton } from 'react-day-picker';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as RechartsPrimitive from 'recharts';
import { Combobox as Combobox$1 } from '@base-ui/react';
import { Command as Command$1 } from 'cmdk';
import { Drawer as Drawer$1 } from 'vaul';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import { OTPInput } from 'input-otp';
import * as ResizablePrimitive from 'react-resizable-panels';
import { ToasterProps } from 'sonner';

declare function Accordion({ ...props }: React__default.ComponentProps<typeof Accordion$1.Root>): React__default.JSX.Element;
declare function AccordionItem({ className, ...props }: React__default.ComponentProps<typeof Accordion$1.Item>): React__default.JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: React__default.ComponentProps<typeof Accordion$1.Trigger>): React__default.JSX.Element;
declare function AccordionContent({ className, children, ...props }: React__default.ComponentProps<typeof Accordion$1.Content>): React__default.JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React__default.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React__default.JSX.Element;
declare function AlertTitle({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function AlertDescription({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function AlertDialog({ ...props }: React__default.ComponentProps<typeof AlertDialog$1.Root>): React__default.JSX.Element;
declare function AlertDialogTrigger({ ...props }: React__default.ComponentProps<typeof AlertDialog$1.Trigger>): React__default.JSX.Element;
declare function AlertDialogPortal({ ...props }: React__default.ComponentProps<typeof AlertDialog$1.Portal>): React__default.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: React__default.ComponentProps<typeof AlertDialog$1.Overlay>): React__default.JSX.Element;
declare function AlertDialogContent({ className, size, ...props }: React__default.ComponentProps<typeof AlertDialog$1.Content> & {
    size?: "default" | "sm";
}): React__default.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React__default.ComponentProps<typeof AlertDialog$1.Title>): React__default.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React__default.ComponentProps<typeof AlertDialog$1.Description>): React__default.JSX.Element;
declare function AlertDialogMedia({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function AlertDialogAction({ className, variant, size, ...props }: React__default.ComponentProps<typeof AlertDialog$1.Action> & Pick<React__default.ComponentProps<typeof Button>, "variant" | "size">): React__default.JSX.Element;
declare function AlertDialogCancel({ className, variant, size, ...props }: React__default.ComponentProps<typeof AlertDialog$1.Cancel> & Pick<React__default.ComponentProps<typeof Button>, "variant" | "size">): React__default.JSX.Element;

declare function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatio$1.Root>): React$1.JSX.Element;

declare function Avatar({ className, size, ...props }: React__default.ComponentProps<typeof Avatar$1.Root> & {
    size?: "default" | "sm" | "lg";
}): React__default.JSX.Element;
declare function AvatarImage({ className, ...props }: React__default.ComponentProps<typeof Avatar$1.Image>): React__default.JSX.Element;
declare function AvatarFallback({ className, ...props }: React__default.ComponentProps<typeof Avatar$1.Fallback>): React__default.JSX.Element;
declare function AvatarBadge({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;
declare function AvatarGroup({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React__default.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React__default.JSX.Element;

declare function Breadcrumb({ ...props }: React__default.ComponentProps<"nav">): React__default.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React__default.ComponentProps<"ol">): React__default.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React__default.ComponentProps<"li">): React__default.JSX.Element;
declare function BreadcrumbLink({ asChild, className, ...props }: React__default.ComponentProps<"a"> & {
    asChild?: boolean;
}): React__default.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;
declare function BreadcrumbSeparator({ children, className, ...props }: React__default.ComponentProps<"li">): React__default.JSX.Element;
declare function BreadcrumbEllipsis({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof Separator$1.Root>): React$1.JSX.Element;

declare const buttonGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>): React$1.JSX.Element;
declare function ButtonGroupText({ className, asChild, ...props }: React.ComponentProps<"div"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function ButtonGroupSeparator({ className, orientation, ...props }: React.ComponentProps<typeof Separator>): React$1.JSX.Element;

declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React$1.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React$1.ComponentProps<typeof Button>["variant"];
}): React$1.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React$1.ComponentProps<typeof DayButton>): React$1.JSX.Element;

declare function Card({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function CardHeader({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function CardTitle({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function CardDescription({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function CardAction({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function CardContent({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function CardFooter({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React$1.ComponentProps<"div"> & CarouselProps): React$1.JSX.Element;
declare function CarouselContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CarouselItem({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CarouselPrevious({ className, variant, size, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function CarouselNext({ className, variant, size, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type ChartConfig = {
    [k in string]: {
        label?: React$1.ReactNode;
        icon?: React$1.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare function ChartContainer({ id, className, children, config, ...props }: React$1.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React$1.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}): React$1.JSX.Element;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React$1.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React$1.ComponentProps<typeof RechartsPrimitive.Tooltip> & React$1.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
}): React$1.JSX.Element | null;
declare const ChartLegend: typeof RechartsPrimitive.Legend;
declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React$1.ComponentProps<"div"> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
}): React$1.JSX.Element | null;

declare function Checkbox({ className, ...props }: React__default.ComponentProps<typeof Checkbox$1.Root>): React__default.JSX.Element;

declare function Collapsible({ ...props }: React__default.ComponentProps<typeof Collapsible$1.Root>): React__default.JSX.Element;
declare function CollapsibleTrigger({ ...props }: React__default.ComponentProps<typeof Collapsible$1.CollapsibleTrigger>): React__default.JSX.Element;
declare function CollapsibleContent({ ...props }: React__default.ComponentProps<typeof Collapsible$1.CollapsibleContent>): React__default.JSX.Element;

declare const Combobox: typeof Combobox$1.Root;
declare function ComboboxValue({ ...props }: Combobox$1.Value.Props): React$1.JSX.Element;
declare function ComboboxTrigger({ className, children, ...props }: Combobox$1.Trigger.Props): React$1.JSX.Element;
declare function ComboboxInput({ className, children, disabled, showTrigger, showClear, ...props }: Combobox$1.Input.Props & {
    showTrigger?: boolean;
    showClear?: boolean;
}): React$1.JSX.Element;
declare function ComboboxContent({ className, side, sideOffset, align, alignOffset, anchor, ...props }: Combobox$1.Popup.Props & Pick<Combobox$1.Positioner.Props, "side" | "align" | "sideOffset" | "alignOffset" | "anchor">): React$1.JSX.Element;
declare function ComboboxList({ className, ...props }: Combobox$1.List.Props): React$1.JSX.Element;
declare function ComboboxItem({ className, children, ...props }: Combobox$1.Item.Props): React$1.JSX.Element;
declare function ComboboxGroup({ className, ...props }: Combobox$1.Group.Props): React$1.JSX.Element;
declare function ComboboxLabel({ className, ...props }: Combobox$1.GroupLabel.Props): React$1.JSX.Element;
declare function ComboboxCollection({ ...props }: Combobox$1.Collection.Props): React$1.JSX.Element;
declare function ComboboxEmpty({ className, ...props }: Combobox$1.Empty.Props): React$1.JSX.Element;
declare function ComboboxSeparator({ className, ...props }: Combobox$1.Separator.Props): React$1.JSX.Element;
declare function ComboboxChips({ className, ...props }: React$1.ComponentPropsWithRef<typeof Combobox$1.Chips> & Combobox$1.Chips.Props): React$1.JSX.Element;
declare function ComboboxChip({ className, children, showRemove, ...props }: Combobox$1.Chip.Props & {
    showRemove?: boolean;
}): React$1.JSX.Element;
declare function ComboboxChipsInput({ className, children, ...props }: Combobox$1.Input.Props): React$1.JSX.Element;
declare function useComboboxAnchor(): React$1.RefObject<HTMLDivElement | null>;

declare function Dialog({ ...props }: React__default.ComponentProps<typeof Dialog$1.Root>): React__default.JSX.Element;
declare function DialogTrigger({ ...props }: React__default.ComponentProps<typeof Dialog$1.Trigger>): React__default.JSX.Element;
declare function DialogPortal({ ...props }: React__default.ComponentProps<typeof Dialog$1.Portal>): React__default.JSX.Element;
declare function DialogClose({ ...props }: React__default.ComponentProps<typeof Dialog$1.Close>): React__default.JSX.Element;
declare function DialogOverlay({ className, ...props }: React__default.ComponentProps<typeof Dialog$1.Overlay>): React__default.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React__default.ComponentProps<typeof Dialog$1.Content> & {
    showCloseButton?: boolean;
}): React__default.JSX.Element;
declare function DialogHeader({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React__default.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): React__default.JSX.Element;
declare function DialogTitle({ className, ...props }: React__default.ComponentProps<typeof Dialog$1.Title>): React__default.JSX.Element;
declare function DialogDescription({ className, ...props }: React__default.ComponentProps<typeof Dialog$1.Description>): React__default.JSX.Element;

declare function Command({ className, ...props }: React__default.ComponentProps<typeof Command$1>): React__default.JSX.Element;
declare function CommandDialog({ title, description, children, className, showCloseButton, ...props }: React__default.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}): React__default.JSX.Element;
declare function CommandInput({ className, ...props }: React__default.ComponentProps<typeof Command$1.Input>): React__default.JSX.Element;
declare function CommandList({ className, ...props }: React__default.ComponentProps<typeof Command$1.List>): React__default.JSX.Element;
declare function CommandEmpty({ ...props }: React__default.ComponentProps<typeof Command$1.Empty>): React__default.JSX.Element;
declare function CommandGroup({ className, ...props }: React__default.ComponentProps<typeof Command$1.Group>): React__default.JSX.Element;
declare function CommandSeparator({ className, ...props }: React__default.ComponentProps<typeof Command$1.Separator>): React__default.JSX.Element;
declare function CommandItem({ className, ...props }: React__default.ComponentProps<typeof Command$1.Item>): React__default.JSX.Element;
declare function CommandShortcut({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;

declare function ContextMenu({ ...props }: React__default.ComponentProps<typeof ContextMenu$1.Root>): React__default.JSX.Element;
declare function ContextMenuTrigger({ ...props }: React__default.ComponentProps<typeof ContextMenu$1.Trigger>): React__default.JSX.Element;
declare function ContextMenuGroup({ ...props }: React__default.ComponentProps<typeof ContextMenu$1.Group>): React__default.JSX.Element;
declare function ContextMenuPortal({ ...props }: React__default.ComponentProps<typeof ContextMenu$1.Portal>): React__default.JSX.Element;
declare function ContextMenuSub({ ...props }: React__default.ComponentProps<typeof ContextMenu$1.Sub>): React__default.JSX.Element;
declare function ContextMenuRadioGroup({ ...props }: React__default.ComponentProps<typeof ContextMenu$1.RadioGroup>): React__default.JSX.Element;
declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React__default.ComponentProps<typeof ContextMenu$1.SubTrigger> & {
    inset?: boolean;
}): React__default.JSX.Element;
declare function ContextMenuSubContent({ className, ...props }: React__default.ComponentProps<typeof ContextMenu$1.SubContent>): React__default.JSX.Element;
declare function ContextMenuContent({ className, ...props }: React__default.ComponentProps<typeof ContextMenu$1.Content>): React__default.JSX.Element;
declare function ContextMenuItem({ className, inset, variant, ...props }: React__default.ComponentProps<typeof ContextMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React__default.JSX.Element;
declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: React__default.ComponentProps<typeof ContextMenu$1.CheckboxItem>): React__default.JSX.Element;
declare function ContextMenuRadioItem({ className, children, ...props }: React__default.ComponentProps<typeof ContextMenu$1.RadioItem>): React__default.JSX.Element;
declare function ContextMenuLabel({ className, inset, ...props }: React__default.ComponentProps<typeof ContextMenu$1.Label> & {
    inset?: boolean;
}): React__default.JSX.Element;
declare function ContextMenuSeparator({ className, ...props }: React__default.ComponentProps<typeof ContextMenu$1.Separator>): React__default.JSX.Element;
declare function ContextMenuShortcut({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;

declare function DirectionProvider({ dir, direction, children, }: React__default.ComponentProps<typeof Direction.DirectionProvider> & {
    direction?: React__default.ComponentProps<typeof Direction.DirectionProvider>["dir"];
}): React__default.JSX.Element;
declare const useDirection: typeof Direction.useDirection;

declare function Drawer({ ...props }: React__default.ComponentProps<typeof Drawer$1.Root>): React__default.JSX.Element;
declare function DrawerTrigger({ ...props }: React__default.ComponentProps<typeof Drawer$1.Trigger>): React__default.JSX.Element;
declare function DrawerPortal({ ...props }: React__default.ComponentProps<typeof Drawer$1.Portal>): React__default.JSX.Element;
declare function DrawerClose({ ...props }: React__default.ComponentProps<typeof Drawer$1.Close>): React__default.JSX.Element;
declare function DrawerOverlay({ className, ...props }: React__default.ComponentProps<typeof Drawer$1.Overlay>): React__default.JSX.Element;
declare function DrawerContent({ className, children, ...props }: React__default.ComponentProps<typeof Drawer$1.Content>): React__default.JSX.Element;
declare function DrawerHeader({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function DrawerFooter({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function DrawerTitle({ className, ...props }: React__default.ComponentProps<typeof Drawer$1.Title>): React__default.JSX.Element;
declare function DrawerDescription({ className, ...props }: React__default.ComponentProps<typeof Drawer$1.Description>): React__default.JSX.Element;

declare function DropdownMenu({ ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Root>): React__default.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Portal>): React__default.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Trigger>): React__default.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Content>): React__default.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Group>): React__default.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React__default.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React__default.ComponentProps<typeof DropdownMenu$1.CheckboxItem>): React__default.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React__default.ComponentProps<typeof DropdownMenu$1.RadioGroup>): React__default.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React__default.ComponentProps<typeof DropdownMenu$1.RadioItem>): React__default.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Label> & {
    inset?: boolean;
}): React__default.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Separator>): React__default.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;
declare function DropdownMenuSub({ ...props }: React__default.ComponentProps<typeof DropdownMenu$1.Sub>): React__default.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React__default.ComponentProps<typeof DropdownMenu$1.SubTrigger> & {
    inset?: boolean;
}): React__default.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React__default.ComponentProps<typeof DropdownMenu$1.SubContent>): React__default.JSX.Element;

declare function Empty({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare function EmptyHeader({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare const emptyMediaVariants: (props?: ({
    variant?: "default" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function EmptyMedia({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>): React$1.JSX.Element;
declare function EmptyTitle({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare function EmptyDescription({ className, ...props }: React.ComponentProps<"p">): React$1.JSX.Element;
declare function EmptyContent({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare function Label({ className, ...props }: React__default.ComponentProps<typeof Label$1.Root>): React__default.JSX.Element;

declare function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">): React$1.JSX.Element;
declare function FieldLegend({ className, variant, ...props }: React.ComponentProps<"legend"> & {
    variant?: "legend" | "label";
}): React$1.JSX.Element;
declare function FieldGroup({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare const fieldVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | "responsive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Field({ className, orientation, ...props }: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>): React$1.JSX.Element;
declare function FieldContent({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldLabel({ className, ...props }: React.ComponentProps<typeof Label>): React$1.JSX.Element;
declare function FieldTitle({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldDescription({ className, ...props }: React.ComponentProps<"p">): React$1.JSX.Element;
declare function FieldSeparator({ children, className, ...props }: React.ComponentProps<"div"> & {
    children?: React.ReactNode;
}): React$1.JSX.Element;
declare function FieldError({ className, children, errors, ...props }: React.ComponentProps<"div"> & {
    errors?: Array<{
        message?: string;
    } | undefined>;
}): React$1.JSX.Element | null;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => React$1.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare function FormItem({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function FormLabel({ className, ...props }: React$1.ComponentProps<typeof Label$1.Root>): React$1.JSX.Element;
declare function FormControl({ ...props }: React$1.ComponentProps<typeof Slot.Root>): React$1.JSX.Element;
declare function FormDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function FormMessage({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element | null;

declare function HoverCard({ ...props }: React__default.ComponentProps<typeof HoverCard$1.Root>): React__default.JSX.Element;
declare function HoverCardTrigger({ ...props }: React__default.ComponentProps<typeof HoverCard$1.Trigger>): React__default.JSX.Element;
declare function HoverCardContent({ className, align, sideOffset, ...props }: React__default.ComponentProps<typeof HoverCard$1.Content>): React__default.JSX.Element;

declare function Input({ className, type, ...props }: React__default.ComponentProps<"input">): React__default.JSX.Element;

declare function InputGroup({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function InputGroupAddon({ className, align, ...props }: React__default.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>): React__default.JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React__default.ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>): React__default.JSX.Element;
declare function InputGroupText({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;
declare function InputGroupInput({ className, ...props }: React__default.ComponentProps<"input">): React__default.JSX.Element;
declare function InputGroupTextarea({ className, ...props }: React__default.ComponentProps<"textarea">): React__default.JSX.Element;

declare function InputOTP({ className, containerClassName, ...props }: React$1.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): React$1.JSX.Element;
declare function InputOTPGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function InputOTPSlot({ index, className, ...props }: React$1.ComponentProps<"div"> & {
    index: number;
}): React$1.JSX.Element;
declare function InputOTPSeparator({ ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function ItemGroup({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function ItemSeparator({ className, ...props }: React__default.ComponentProps<typeof Separator>): React__default.JSX.Element;
declare const itemVariants: (props?: ({
    variant?: "default" | "outline" | "muted" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Item({ className, variant, size, asChild, ...props }: React__default.ComponentProps<"div"> & VariantProps<typeof itemVariants> & {
    asChild?: boolean;
}): React__default.JSX.Element;
declare const itemMediaVariants: (props?: ({
    variant?: "image" | "default" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function ItemMedia({ className, variant, ...props }: React__default.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>): React__default.JSX.Element;
declare function ItemContent({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function ItemTitle({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function ItemDescription({ className, ...props }: React__default.ComponentProps<"p">): React__default.JSX.Element;
declare function ItemActions({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function ItemHeader({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function ItemFooter({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;

declare function Kbd({ className, ...props }: React.ComponentProps<"kbd">): React$1.JSX.Element;
declare function KbdGroup({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare function Menubar({ className, ...props }: React__default.ComponentProps<typeof Menubar$1.Root>): React__default.JSX.Element;
declare function MenubarMenu({ ...props }: React__default.ComponentProps<typeof Menubar$1.Menu>): React__default.JSX.Element;
declare function MenubarGroup({ ...props }: React__default.ComponentProps<typeof Menubar$1.Group>): React__default.JSX.Element;
declare function MenubarPortal({ ...props }: React__default.ComponentProps<typeof Menubar$1.Portal>): React__default.JSX.Element;
declare function MenubarRadioGroup({ ...props }: React__default.ComponentProps<typeof Menubar$1.RadioGroup>): React__default.JSX.Element;
declare function MenubarTrigger({ className, ...props }: React__default.ComponentProps<typeof Menubar$1.Trigger>): React__default.JSX.Element;
declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React__default.ComponentProps<typeof Menubar$1.Content>): React__default.JSX.Element;
declare function MenubarItem({ className, inset, variant, ...props }: React__default.ComponentProps<typeof Menubar$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React__default.JSX.Element;
declare function MenubarCheckboxItem({ className, children, checked, ...props }: React__default.ComponentProps<typeof Menubar$1.CheckboxItem>): React__default.JSX.Element;
declare function MenubarRadioItem({ className, children, ...props }: React__default.ComponentProps<typeof Menubar$1.RadioItem>): React__default.JSX.Element;
declare function MenubarLabel({ className, inset, ...props }: React__default.ComponentProps<typeof Menubar$1.Label> & {
    inset?: boolean;
}): React__default.JSX.Element;
declare function MenubarSeparator({ className, ...props }: React__default.ComponentProps<typeof Menubar$1.Separator>): React__default.JSX.Element;
declare function MenubarShortcut({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;
declare function MenubarSub({ ...props }: React__default.ComponentProps<typeof Menubar$1.Sub>): React__default.JSX.Element;
declare function MenubarSubTrigger({ className, inset, children, ...props }: React__default.ComponentProps<typeof Menubar$1.SubTrigger> & {
    inset?: boolean;
}): React__default.JSX.Element;
declare function MenubarSubContent({ className, ...props }: React__default.ComponentProps<typeof Menubar$1.SubContent>): React__default.JSX.Element;

declare function NativeSelect({ className, size, ...props }: Omit<React__default.ComponentProps<"select">, "size"> & {
    size?: "sm" | "default";
}): React__default.JSX.Element;
declare function NativeSelectOption({ ...props }: React__default.ComponentProps<"option">): React__default.JSX.Element;
declare function NativeSelectOptGroup({ className, ...props }: React__default.ComponentProps<"optgroup">): React__default.JSX.Element;

declare function NavigationMenu({ className, children, viewport, ...props }: React__default.ComponentProps<typeof NavigationMenu$1.Root> & {
    viewport?: boolean;
}): React__default.JSX.Element;
declare function NavigationMenuList({ className, ...props }: React__default.ComponentProps<typeof NavigationMenu$1.List>): React__default.JSX.Element;
declare function NavigationMenuItem({ className, ...props }: React__default.ComponentProps<typeof NavigationMenu$1.Item>): React__default.JSX.Element;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare function NavigationMenuTrigger({ className, children, ...props }: React__default.ComponentProps<typeof NavigationMenu$1.Trigger>): React__default.JSX.Element;
declare function NavigationMenuContent({ className, ...props }: React__default.ComponentProps<typeof NavigationMenu$1.Content>): React__default.JSX.Element;
declare function NavigationMenuViewport({ className, ...props }: React__default.ComponentProps<typeof NavigationMenu$1.Viewport>): React__default.JSX.Element;
declare function NavigationMenuLink({ className, ...props }: React__default.ComponentProps<typeof NavigationMenu$1.Link>): React__default.JSX.Element;
declare function NavigationMenuIndicator({ className, ...props }: React__default.ComponentProps<typeof NavigationMenu$1.Indicator>): React__default.JSX.Element;

declare function Pagination({ className, ...props }: React__default.ComponentProps<"nav">): React__default.JSX.Element;
declare function PaginationContent({ className, ...props }: React__default.ComponentProps<"ul">): React__default.JSX.Element;
declare function PaginationItem({ ...props }: React__default.ComponentProps<"li">): React__default.JSX.Element;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React__default.ComponentProps<typeof Button>, "size"> & React__default.ComponentProps<"a">;
declare function PaginationLink({ className, isActive, size, ...props }: PaginationLinkProps): React__default.JSX.Element;
declare function PaginationPrevious({ className, ...props }: React__default.ComponentProps<typeof PaginationLink>): React__default.JSX.Element;
declare function PaginationNext({ className, ...props }: React__default.ComponentProps<typeof PaginationLink>): React__default.JSX.Element;
declare function PaginationEllipsis({ className, ...props }: React__default.ComponentProps<"span">): React__default.JSX.Element;

declare function Popover({ ...props }: React__default.ComponentProps<typeof Popover$1.Root>): React__default.JSX.Element;
declare function PopoverTrigger({ ...props }: React__default.ComponentProps<typeof Popover$1.Trigger>): React__default.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React__default.ComponentProps<typeof Popover$1.Content>): React__default.JSX.Element;
declare function PopoverAnchor({ ...props }: React__default.ComponentProps<typeof Popover$1.Anchor>): React__default.JSX.Element;
declare function PopoverHeader({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function PopoverTitle({ className, ...props }: React__default.ComponentProps<"h2">): React__default.JSX.Element;
declare function PopoverDescription({ className, ...props }: React__default.ComponentProps<"p">): React__default.JSX.Element;

declare function Progress({ className, value, ...props }: React__default.ComponentProps<typeof Progress$1.Root>): React__default.JSX.Element;

declare function RadioGroup({ className, ...props }: React__default.ComponentProps<typeof RadioGroup$1.Root>): React__default.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React__default.ComponentProps<typeof RadioGroup$1.Item>): React__default.JSX.Element;

declare function ResizablePanelGroup({ className, ...props }: ResizablePrimitive.GroupProps): React$1.JSX.Element;
declare function ResizablePanel({ ...props }: ResizablePrimitive.PanelProps): React$1.JSX.Element;
declare function ResizableHandle({ withHandle, className, ...props }: ResizablePrimitive.SeparatorProps & {
    withHandle?: boolean;
}): React$1.JSX.Element;

declare function ScrollArea({ className, children, orientation, ...props }: React__default.ComponentProps<typeof ScrollArea$1.Root> & {
    orientation?: "vertical" | "horizontal" | "both";
}): React__default.JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React__default.ComponentProps<typeof ScrollArea$1.ScrollAreaScrollbar>): React__default.JSX.Element;

declare function Select({ ...props }: React__default.ComponentProps<typeof Select$1.Root>): React__default.JSX.Element;
declare function SelectGroup({ ...props }: React__default.ComponentProps<typeof Select$1.Group>): React__default.JSX.Element;
declare function SelectValue({ ...props }: React__default.ComponentProps<typeof Select$1.Value>): React__default.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React__default.ComponentProps<typeof Select$1.Trigger> & {
    size?: "sm" | "default";
}): React__default.JSX.Element;
declare function SelectContent({ className, children, position, align, ...props }: React__default.ComponentProps<typeof Select$1.Content>): React__default.JSX.Element;
declare function SelectLabel({ className, ...props }: React__default.ComponentProps<typeof Select$1.Label>): React__default.JSX.Element;
declare function SelectItem({ className, children, ...props }: React__default.ComponentProps<typeof Select$1.Item>): React__default.JSX.Element;
declare function SelectSeparator({ className, ...props }: React__default.ComponentProps<typeof Select$1.Separator>): React__default.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React__default.ComponentProps<typeof Select$1.ScrollUpButton>): React__default.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React__default.ComponentProps<typeof Select$1.ScrollDownButton>): React__default.JSX.Element;

declare function Sheet({ ...props }: React__default.ComponentProps<typeof Dialog$1.Root>): React__default.JSX.Element;
declare function SheetTrigger({ ...props }: React__default.ComponentProps<typeof Dialog$1.Trigger>): React__default.JSX.Element;
declare function SheetClose({ ...props }: React__default.ComponentProps<typeof Dialog$1.Close>): React__default.JSX.Element;
declare function SheetContent({ className, children, side, showCloseButton, ...props }: React__default.ComponentProps<typeof Dialog$1.Content> & {
    side?: "top" | "right" | "bottom" | "left";
    showCloseButton?: boolean;
}): React__default.JSX.Element;
declare function SheetHeader({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function SheetFooter({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;
declare function SheetTitle({ className, ...props }: React__default.ComponentProps<typeof Dialog$1.Title>): React__default.JSX.Element;
declare function SheetDescription({ className, ...props }: React__default.ComponentProps<typeof Dialog$1.Description>): React__default.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React__default.ComponentProps<typeof Tooltip$1.Provider>): React__default.JSX.Element;
declare function Tooltip({ ...props }: React__default.ComponentProps<typeof Tooltip$1.Root>): React__default.JSX.Element;
declare function TooltipTrigger({ ...props }: React__default.ComponentProps<typeof Tooltip$1.Trigger>): React__default.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React__default.ComponentProps<typeof Tooltip$1.Content>): React__default.JSX.Element;

type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React$1.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): React$1.JSX.Element;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React$1.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}): React$1.JSX.Element;
declare function SidebarTrigger({ className, onClick, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function SidebarRail({ className, ...props }: React$1.ComponentProps<"button">): React$1.JSX.Element;
declare function SidebarInset({ className, ...props }: React$1.ComponentProps<"main">): React$1.JSX.Element;
declare function SidebarInput({ className, ...props }: React$1.ComponentProps<typeof Input>): React$1.JSX.Element;
declare function SidebarHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarSeparator({ className, ...props }: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;
declare function SidebarContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarGroupLabel({ className, asChild, ...props }: React$1.ComponentProps<"div"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarMenu({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): React$1.JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React$1.ComponentProps<"div"> & {
    showIcon?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React$1.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}): React$1.JSX.Element;

declare function Skeleton({ className, ...props }: React__default.ComponentProps<"div">): React__default.JSX.Element;

declare function Slider({ className, defaultValue, value, min, max, ...props }: React$1.ComponentProps<typeof Slider$1.Root>): React$1.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React__default.JSX.Element;

declare function Spinner({ className, ...props }: React__default.ComponentProps<"svg">): React__default.JSX.Element;

declare function Switch({ className, size, ...props }: React__default.ComponentProps<typeof Switch$1.Root> & {
    size?: "sm" | "default";
}): React__default.JSX.Element;

declare function Table({ className, ...props }: React__default.ComponentProps<"table">): React__default.JSX.Element;
declare function TableHeader({ className, ...props }: React__default.ComponentProps<"thead">): React__default.JSX.Element;
declare function TableBody({ className, ...props }: React__default.ComponentProps<"tbody">): React__default.JSX.Element;
declare function TableFooter({ className, ...props }: React__default.ComponentProps<"tfoot">): React__default.JSX.Element;
declare function TableRow({ className, ...props }: React__default.ComponentProps<"tr">): React__default.JSX.Element;
declare function TableHead({ className, ...props }: React__default.ComponentProps<"th">): React__default.JSX.Element;
declare function TableCell({ className, ...props }: React__default.ComponentProps<"td">): React__default.JSX.Element;
declare function TableCaption({ className, ...props }: React__default.ComponentProps<"caption">): React__default.JSX.Element;

declare function Tabs({ className, orientation, ...props }: React__default.ComponentProps<typeof Tabs$1.Root>): React__default.JSX.Element;
declare const tabsListVariants: (props?: ({
    variant?: "line" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function TabsList({ className, variant, ...props }: React__default.ComponentProps<typeof Tabs$1.List> & VariantProps<typeof tabsListVariants>): React__default.JSX.Element;
declare function TabsTrigger({ className, ...props }: React__default.ComponentProps<typeof Tabs$1.Trigger>): React__default.JSX.Element;
declare function TabsContent({ className, ...props }: React__default.ComponentProps<typeof Tabs$1.Content>): React__default.JSX.Element;

declare function Textarea({ className, ...props }: React__default.ComponentProps<"textarea">): React__default.JSX.Element;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: React__default.ComponentProps<typeof Toggle$1.Root> & VariantProps<typeof toggleVariants>): React__default.JSX.Element;

declare function ToggleGroup({ className, variant, size, spacing, children, ...props }: React$1.ComponentProps<typeof ToggleGroup$1.Root> & VariantProps<typeof toggleVariants> & {
    spacing?: number;
}): React$1.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React$1.ComponentProps<typeof ToggleGroup$1.Item> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText, Calendar, CalendarDayButton, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxCollection, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSeparator, ComboboxTrigger, ComboboxValue, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DirectionProvider, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle, Kbd, KbdGroup, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NativeSelect, NativeSelectOptGroup, NativeSelectOption, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverAnchor, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, Slider, Spinner, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonGroupVariants, buttonVariants, navigationMenuTriggerStyle, tabsListVariants, toggleVariants, useComboboxAnchor, useDirection, useFormField, useSidebar };
