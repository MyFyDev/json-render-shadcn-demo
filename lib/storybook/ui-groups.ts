/**
 * Storybook groups: json-render catalog components and matching shadcn/ui
 * primitives ([shadcn/ui docs](https://ui.shadcn.com/docs/components)).
 */

export interface UiExportStoryConfig {
  /** File base name, e.g. `card-header` → card-header.stories.tsx */
  fileBase: string;
  /** Named export from @/components/ui/* */
  exportName: string;
  /** Module path under components/ui (without extension) */
  module: string;
  /** Storybook title segment under shadcn/ui/{group}/ */
  title: string;
  /** Controls for documented props */
  argTypes: Record<string, unknown>;
  /** Default story args */
  args: Record<string, unknown>;
  /**
   * When set, the story uses a composed demo instead of rendering the export
   * alone. Keys match templates in the generator.
   */
  demo?: string;
}

export interface StoryGroupConfig {
  /** Directory name under stories/shadcn/ */
  dir: string;
  /** json-render catalog component in this group, if any */
  catalog?: string;
  /** Extra render hints for catalog story (children template id) */
  catalogDemo?: string;
  ui: UiExportStoryConfig[];
}

const classNameControl = { className: { control: "text" } };

export const storyGroups: StoryGroupConfig[] = [
  {
    dir: "card",
    catalog: "Card",
    catalogDemo: "card-children",
    ui: [
      {
        fileBase: "card",
        exportName: "Card",
        module: "card",
        title: "Card",
        argTypes: {
          ...classNameControl,
          size: { control: "select", options: ["default", "sm"] },
        },
        args: { size: "default", children: "Card content" },
      },
      {
        fileBase: "card-header",
        exportName: "CardHeader",
        module: "card",
        title: "CardHeader",
        argTypes: classNameControl,
        args: { children: "Header region" },
        demo: "card-header",
      },
      {
        fileBase: "card-title",
        exportName: "CardTitle",
        module: "card",
        title: "CardTitle",
        argTypes: classNameControl,
        args: { children: "Card title" },
        demo: "card-title",
      },
      {
        fileBase: "card-description",
        exportName: "CardDescription",
        module: "card",
        title: "CardDescription",
        argTypes: classNameControl,
        args: { children: "Supporting description" },
        demo: "card-description",
      },
      {
        fileBase: "card-action",
        exportName: "CardAction",
        module: "card",
        title: "CardAction",
        argTypes: classNameControl,
        args: { children: "Action" },
        demo: "card-action",
      },
      {
        fileBase: "card-content",
        exportName: "CardContent",
        module: "card",
        title: "CardContent",
        argTypes: classNameControl,
        args: { children: "Main content" },
        demo: "card-content",
      },
      {
        fileBase: "card-footer",
        exportName: "CardFooter",
        module: "card",
        title: "CardFooter",
        argTypes: classNameControl,
        args: { children: "Footer" },
        demo: "card-footer",
      },
    ],
  },
  {
    dir: "button",
    catalog: "Button",
    ui: [
      {
        fileBase: "button",
        exportName: "Button",
        module: "button",
        title: "Button",
        argTypes: {
          ...classNameControl,
          variant: {
            control: "select",
            options: [
              "default",
              "outline",
              "secondary",
              "ghost",
              "destructive",
              "link",
            ],
          },
          size: {
            control: "select",
            options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
          },
          disabled: { control: "boolean" },
        },
        args: { variant: "default", size: "default", disabled: false, children: "Button" },
      },
    ],
  },
  {
    dir: "accordion",
    catalog: "Accordion",
    ui: [
      {
        fileBase: "accordion",
        exportName: "Accordion",
        module: "accordion",
        title: "Accordion",
        argTypes: {
          ...classNameControl,
          type: { control: "select", options: ["single", "multiple"] },
          collapsible: { control: "boolean" },
        },
        args: { type: "single", collapsible: true },
        demo: "accordion-root",
      },
      {
        fileBase: "accordion-item",
        exportName: "AccordionItem",
        module: "accordion",
        title: "AccordionItem",
        argTypes: { ...classNameControl, value: { control: "text" }, disabled: { control: "boolean" } },
        args: { value: "item-1" },
        demo: "accordion-item",
      },
      {
        fileBase: "accordion-trigger",
        exportName: "AccordionTrigger",
        module: "accordion",
        title: "AccordionTrigger",
        argTypes: classNameControl,
        args: { children: "Section" },
        demo: "accordion-trigger",
      },
      {
        fileBase: "accordion-content",
        exportName: "AccordionContent",
        module: "accordion",
        title: "AccordionContent",
        argTypes: classNameControl,
        args: { children: "Section body" },
        demo: "accordion-content",
      },
    ],
  },
  {
    dir: "alert",
    catalog: "Alert",
    ui: [
      {
        fileBase: "alert",
        exportName: "Alert",
        module: "alert",
        title: "Alert",
        argTypes: {
          ...classNameControl,
          variant: { control: "select", options: ["default", "destructive"] },
        },
        args: { variant: "default" },
        demo: "alert-root",
      },
      {
        fileBase: "alert-title",
        exportName: "AlertTitle",
        module: "alert",
        title: "AlertTitle",
        argTypes: classNameControl,
        args: { children: "Alert title" },
        demo: "alert-title",
      },
      {
        fileBase: "alert-description",
        exportName: "AlertDescription",
        module: "alert",
        title: "AlertDescription",
        argTypes: classNameControl,
        args: { children: "Alert description" },
        demo: "alert-description",
      },
    ],
  },
  {
    dir: "avatar",
    catalog: "Avatar",
    ui: [
      {
        fileBase: "avatar",
        exportName: "Avatar",
        module: "avatar",
        title: "Avatar",
        argTypes: { ...classNameControl, size: { control: "select", options: ["default", "sm", "lg"] } },
        args: { size: "default" },
        demo: "avatar-root",
      },
      {
        fileBase: "avatar-image",
        exportName: "AvatarImage",
        module: "avatar",
        title: "AvatarImage",
        argTypes: {
          ...classNameControl,
          src: { control: "text" },
          alt: { control: "text" },
        },
        args: { src: "https://github.com/shadcn.png", alt: "Avatar" },
        demo: "avatar-image",
      },
      {
        fileBase: "avatar-fallback",
        exportName: "AvatarFallback",
        module: "avatar",
        title: "AvatarFallback",
        argTypes: classNameControl,
        args: { children: "CN" },
        demo: "avatar-fallback",
      },
    ],
  },
  {
    dir: "badge",
    catalog: "Badge",
    ui: [
      {
        fileBase: "badge",
        exportName: "Badge",
        module: "badge",
        title: "Badge",
        argTypes: {
          ...classNameControl,
          variant: {
            control: "select",
            options: ["default", "secondary", "destructive", "outline"],
          },
        },
        args: { variant: "default", children: "Badge" },
      },
    ],
  },
  {
    dir: "button-group",
    catalog: "ButtonGroup",
    ui: [
      {
        fileBase: "button-group",
        exportName: "ButtonGroup",
        module: "button-group",
        title: "ButtonGroup",
        argTypes: classNameControl,
        args: {},
        demo: "button-group-root",
      },
    ],
  },
  {
    dir: "carousel",
    catalog: "Carousel",
    ui: [
      {
        fileBase: "carousel",
        exportName: "Carousel",
        module: "carousel",
        title: "Carousel",
        argTypes: {
          ...classNameControl,
          orientation: { control: "select", options: ["horizontal", "vertical"] },
        },
        args: { orientation: "horizontal" },
        demo: "carousel-root",
      },
      {
        fileBase: "carousel-content",
        exportName: "CarouselContent",
        module: "carousel",
        title: "CarouselContent",
        argTypes: classNameControl,
        args: {},
        demo: "carousel-content",
      },
      {
        fileBase: "carousel-item",
        exportName: "CarouselItem",
        module: "carousel",
        title: "CarouselItem",
        argTypes: classNameControl,
        args: {},
        demo: "carousel-item",
      },
      {
        fileBase: "carousel-previous",
        exportName: "CarouselPrevious",
        module: "carousel",
        title: "CarouselPrevious",
        argTypes: {
          ...classNameControl,
          variant: {
            control: "select",
            options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
          },
          size: {
            control: "select",
            options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
          },
        },
        args: { variant: "outline", size: "icon-sm" },
        demo: "carousel-previous",
      },
      {
        fileBase: "carousel-next",
        exportName: "CarouselNext",
        module: "carousel",
        title: "CarouselNext",
        argTypes: {
          ...classNameControl,
          variant: {
            control: "select",
            options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
          },
          size: {
            control: "select",
            options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
          },
        },
        args: { variant: "outline", size: "icon-sm" },
        demo: "carousel-next",
      },
    ],
  },
  {
    dir: "checkbox",
    catalog: "Checkbox",
    ui: [
      {
        fileBase: "checkbox",
        exportName: "Checkbox",
        module: "checkbox",
        title: "Checkbox",
        argTypes: {
          ...classNameControl,
          checked: { control: "boolean" },
          disabled: { control: "boolean" },
        },
        args: { checked: false, disabled: false },
      },
    ],
  },
  {
    dir: "collapsible",
    catalog: "Collapsible",
    ui: [
      {
        fileBase: "collapsible",
        exportName: "Collapsible",
        module: "collapsible",
        title: "Collapsible",
        argTypes: { ...classNameControl, open: { control: "boolean" }, disabled: { control: "boolean" } },
        args: { open: true },
        demo: "collapsible-root",
      },
      {
        fileBase: "collapsible-trigger",
        exportName: "CollapsibleTrigger",
        module: "collapsible",
        title: "CollapsibleTrigger",
        argTypes: classNameControl,
        args: { children: "Toggle" },
        demo: "collapsible-trigger",
      },
      {
        fileBase: "collapsible-content",
        exportName: "CollapsibleContent",
        module: "collapsible",
        title: "CollapsibleContent",
        argTypes: classNameControl,
        args: { children: "Hidden content" },
        demo: "collapsible-content",
      },
    ],
  },
  {
    dir: "dialog",
    catalog: "Dialog",
    ui: [
      { fileBase: "dialog", exportName: "Dialog", module: "dialog", title: "Dialog", argTypes: { open: { control: "boolean" } }, args: { open: true }, demo: "dialog-root" },
      { fileBase: "dialog-trigger", exportName: "DialogTrigger", module: "dialog", title: "DialogTrigger", argTypes: classNameControl, args: { children: "Open" }, demo: "dialog-trigger" },
      { fileBase: "dialog-content", exportName: "DialogContent", module: "dialog", title: "DialogContent", argTypes: classNameControl, args: {}, demo: "dialog-content" },
      { fileBase: "dialog-header", exportName: "DialogHeader", module: "dialog", title: "DialogHeader", argTypes: classNameControl, args: {}, demo: "dialog-header" },
      { fileBase: "dialog-title", exportName: "DialogTitle", module: "dialog", title: "DialogTitle", argTypes: classNameControl, args: { children: "Dialog title" }, demo: "dialog-title" },
      { fileBase: "dialog-description", exportName: "DialogDescription", module: "dialog", title: "DialogDescription", argTypes: classNameControl, args: { children: "Dialog description" }, demo: "dialog-description" },
      { fileBase: "dialog-footer", exportName: "DialogFooter", module: "dialog", title: "DialogFooter", argTypes: classNameControl, args: { children: "Footer actions" }, demo: "dialog-footer" },
    ],
  },
  {
    dir: "drawer",
    catalog: "Drawer",
    ui: [
      { fileBase: "drawer", exportName: "Drawer", module: "drawer", title: "Drawer", argTypes: { open: { control: "boolean" } }, args: { open: true }, demo: "drawer-root" },
      { fileBase: "drawer-content", exportName: "DrawerContent", module: "drawer", title: "DrawerContent", argTypes: classNameControl, args: {}, demo: "drawer-content" },
      { fileBase: "drawer-header", exportName: "DrawerHeader", module: "drawer", title: "DrawerHeader", argTypes: classNameControl, args: {}, demo: "drawer-header" },
      { fileBase: "drawer-title", exportName: "DrawerTitle", module: "drawer", title: "DrawerTitle", argTypes: classNameControl, args: { children: "Drawer title" }, demo: "drawer-title" },
    ],
  },
  {
    dir: "dropdown-menu",
    catalog: "DropdownMenu",
    ui: [
      { fileBase: "dropdown-menu", exportName: "DropdownMenu", module: "dropdown-menu", title: "DropdownMenu", argTypes: {}, args: {}, demo: "dropdown-menu-root" },
      { fileBase: "dropdown-menu-trigger", exportName: "DropdownMenuTrigger", module: "dropdown-menu", title: "DropdownMenuTrigger", argTypes: classNameControl, args: { children: "Menu" }, demo: "dropdown-menu-trigger" },
      { fileBase: "dropdown-menu-content", exportName: "DropdownMenuContent", module: "dropdown-menu", title: "DropdownMenuContent", argTypes: classNameControl, args: {}, demo: "dropdown-menu-content" },
      { fileBase: "dropdown-menu-item", exportName: "DropdownMenuItem", module: "dropdown-menu", title: "DropdownMenuItem", argTypes: { ...classNameControl, inset: { control: "boolean" }, variant: { control: "select", options: ["default", "destructive"] } }, args: { children: "Item" }, demo: "dropdown-menu-item" },
    ],
  },
  {
    dir: "input",
    catalog: "Input",
    ui: [
      {
        fileBase: "input",
        exportName: "Input",
        module: "input",
        title: "Input",
        argTypes: {
          ...classNameControl,
          type: { control: "select", options: ["text", "email", "password", "number", "search", "tel", "url"] },
          placeholder: { control: "text" },
          disabled: { control: "boolean" },
        },
        args: { type: "text", placeholder: "Placeholder", disabled: false },
      },
      {
        fileBase: "label",
        exportName: "Label",
        module: "label",
        title: "Label",
        argTypes: classNameControl,
        args: { children: "Label" },
      },
    ],
  },
  {
    dir: "pagination",
    catalog: "Pagination",
    ui: [
      { fileBase: "pagination", exportName: "Pagination", module: "pagination", title: "Pagination", argTypes: classNameControl, args: {}, demo: "pagination-root" },
      { fileBase: "pagination-content", exportName: "PaginationContent", module: "pagination", title: "PaginationContent", argTypes: classNameControl, args: {}, demo: "pagination-content" },
      { fileBase: "pagination-item", exportName: "PaginationItem", module: "pagination", title: "PaginationItem", argTypes: classNameControl, args: {}, demo: "pagination-item" },
      {
        fileBase: "pagination-link",
        exportName: "PaginationLink",
        module: "pagination",
        title: "PaginationLink",
        argTypes: {
          ...classNameControl,
          isActive: { control: "boolean" },
          size: {
            control: "select",
            options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
          },
          href: { control: "text" },
        },
        args: { isActive: false, size: "icon", href: "#", children: "1" },
        demo: "pagination-link",
      },
      {
        fileBase: "pagination-previous",
        exportName: "PaginationPrevious",
        module: "pagination",
        title: "PaginationPrevious",
        argTypes: { ...classNameControl, text: { control: "text" }, href: { control: "text" } },
        args: { text: "Previous", href: "#" },
        demo: "pagination-previous",
      },
      {
        fileBase: "pagination-next",
        exportName: "PaginationNext",
        module: "pagination",
        title: "PaginationNext",
        argTypes: { ...classNameControl, text: { control: "text" }, href: { control: "text" } },
        args: { text: "Next", href: "#" },
        demo: "pagination-next",
      },
      { fileBase: "pagination-ellipsis", exportName: "PaginationEllipsis", module: "pagination", title: "PaginationEllipsis", argTypes: classNameControl, args: {}, demo: "pagination-ellipsis" },
    ],
  },
  {
    dir: "popover",
    catalog: "Popover",
    ui: [
      { fileBase: "popover", exportName: "Popover", module: "popover", title: "Popover", argTypes: { open: { control: "boolean" } }, args: { open: true }, demo: "popover-root" },
      { fileBase: "popover-trigger", exportName: "PopoverTrigger", module: "popover", title: "PopoverTrigger", argTypes: classNameControl, args: { children: "Open" }, demo: "popover-trigger" },
      { fileBase: "popover-content", exportName: "PopoverContent", module: "popover", title: "PopoverContent", argTypes: classNameControl, args: { children: "Popover body" }, demo: "popover-content" },
    ],
  },
  {
    dir: "progress",
    catalog: "Progress",
    ui: [
      {
        fileBase: "progress",
        exportName: "Progress",
        module: "progress",
        title: "Progress",
        argTypes: { ...classNameControl, value: { control: { type: "number", min: 0, max: 100 } } },
        args: { value: 45 },
      },
    ],
  },
  {
    dir: "radio-group",
    catalog: "Radio",
    ui: [
      { fileBase: "radio-group", exportName: "RadioGroup", module: "radio-group", title: "RadioGroup", argTypes: { ...classNameControl, value: { control: "text" }, disabled: { control: "boolean" } }, args: { value: "a" }, demo: "radio-group-root" },
      { fileBase: "radio-group-item", exportName: "RadioGroupItem", module: "radio-group", title: "RadioGroupItem", argTypes: { ...classNameControl, value: { control: "text" }, disabled: { control: "boolean" } }, args: { value: "a" }, demo: "radio-group-item" },
    ],
  },
  {
    dir: "select",
    catalog: "Select",
    ui: [
      { fileBase: "select", exportName: "Select", module: "select", title: "Select", argTypes: { value: { control: "text" }, disabled: { control: "boolean" } }, args: { value: "apple" }, demo: "select-root" },
      { fileBase: "select-trigger", exportName: "SelectTrigger", module: "select", title: "SelectTrigger", argTypes: { ...classNameControl, size: { control: "select", options: ["default", "sm"] } }, args: { size: "default" }, demo: "select-trigger" },
      { fileBase: "select-content", exportName: "SelectContent", module: "select", title: "SelectContent", argTypes: classNameControl, args: {}, demo: "select-content" },
      { fileBase: "select-item", exportName: "SelectItem", module: "select", title: "SelectItem", argTypes: classNameControl, args: { value: "apple", children: "Apple" }, demo: "select-item" },
    ],
  },
  {
    dir: "separator",
    catalog: "Separator",
    ui: [
      {
        fileBase: "separator",
        exportName: "Separator",
        module: "separator",
        title: "Separator",
        argTypes: {
          ...classNameControl,
          orientation: { control: "select", options: ["horizontal", "vertical"] },
          decorative: { control: "boolean" },
        },
        args: { orientation: "horizontal", decorative: true },
      },
    ],
  },
  {
    dir: "skeleton",
    catalog: "Skeleton",
    ui: [
      { fileBase: "skeleton", exportName: "Skeleton", module: "skeleton", title: "Skeleton", argTypes: classNameControl, args: { className: "h-8 w-48" } },
    ],
  },
  {
    dir: "slider",
    catalog: "Slider",
    ui: [
      {
        fileBase: "slider",
        exportName: "Slider",
        module: "slider",
        title: "Slider",
        argTypes: {
          ...classNameControl,
          min: { control: "number" },
          max: { control: "number" },
          step: { control: "number" },
          disabled: { control: "boolean" },
        },
        args: { min: 0, max: 100, step: 1, disabled: false, defaultValue: [40] },
        demo: "slider-root",
      },
    ],
  },
  {
    dir: "switch",
    catalog: "Switch",
    ui: [
      {
        fileBase: "switch",
        exportName: "Switch",
        module: "switch",
        title: "Switch",
        argTypes: { ...classNameControl, checked: { control: "boolean" }, disabled: { control: "boolean" } },
        args: { checked: true, disabled: false },
      },
    ],
  },
  {
    dir: "table",
    catalog: "Table",
    ui: [
      { fileBase: "table", exportName: "Table", module: "table", title: "Table", argTypes: classNameControl, args: {}, demo: "table-root" },
      { fileBase: "table-header", exportName: "TableHeader", module: "table", title: "TableHeader", argTypes: classNameControl, args: {}, demo: "table-header" },
      { fileBase: "table-body", exportName: "TableBody", module: "table", title: "TableBody", argTypes: classNameControl, args: {}, demo: "table-body" },
      { fileBase: "table-row", exportName: "TableRow", module: "table", title: "TableRow", argTypes: classNameControl, args: {}, demo: "table-row" },
      { fileBase: "table-head", exportName: "TableHead", module: "table", title: "TableHead", argTypes: classNameControl, args: { children: "Column" }, demo: "table-head" },
      { fileBase: "table-cell", exportName: "TableCell", module: "table", title: "TableCell", argTypes: classNameControl, args: { children: "Cell" }, demo: "table-cell" },
    ],
  },
  {
    dir: "tabs",
    catalog: "Tabs",
    ui: [
      { fileBase: "tabs", exportName: "Tabs", module: "tabs", title: "Tabs", argTypes: { ...classNameControl, value: { control: "text" } }, args: { value: "tab1" }, demo: "tabs-root" },
      { fileBase: "tabs-list", exportName: "TabsList", module: "tabs", title: "TabsList", argTypes: { ...classNameControl, variant: { control: "select", options: ["default", "line"] } }, args: { variant: "default" }, demo: "tabs-list" },
      { fileBase: "tabs-trigger", exportName: "TabsTrigger", module: "tabs", title: "TabsTrigger", argTypes: classNameControl, args: { value: "tab1", children: "Tab 1" }, demo: "tabs-trigger" },
      { fileBase: "tabs-content", exportName: "TabsContent", module: "tabs", title: "TabsContent", argTypes: classNameControl, args: { value: "tab1", children: "Tab panel" }, demo: "tabs-content" },
    ],
  },
  {
    dir: "textarea",
    catalog: "Textarea",
    ui: [
      {
        fileBase: "textarea",
        exportName: "Textarea",
        module: "textarea",
        title: "Textarea",
        argTypes: {
          ...classNameControl,
          placeholder: { control: "text" },
          disabled: { control: "boolean" },
          rows: { control: "number" },
        },
        args: { placeholder: "Write here…", disabled: false, rows: 4 },
      },
    ],
  },
  {
    dir: "toggle",
    catalog: "Toggle",
    ui: [
      {
        fileBase: "toggle",
        exportName: "Toggle",
        module: "toggle",
        title: "Toggle",
        argTypes: {
          ...classNameControl,
          variant: { control: "select", options: ["default", "outline"] },
          size: { control: "select", options: ["default", "sm", "lg"] },
          pressed: { control: "boolean" },
          disabled: { control: "boolean" },
        },
        args: { variant: "default", size: "default", pressed: false, disabled: false, children: "Toggle" },
      },
    ],
  },
  {
    dir: "toggle-group",
    catalog: "ToggleGroup",
    ui: [
      { fileBase: "toggle-group", exportName: "ToggleGroup", module: "toggle-group", title: "ToggleGroup", argTypes: { type: { control: "select", options: ["single", "multiple"] }, variant: { control: "select", options: ["default", "outline"] }, size: { control: "select", options: ["default", "sm", "lg"] } }, args: { type: "single", variant: "default", size: "default", value: "a" }, demo: "toggle-group-root" },
      { fileBase: "toggle-group-item", exportName: "ToggleGroupItem", module: "toggle-group", title: "ToggleGroupItem", argTypes: classNameControl, args: { value: "a", children: "A" }, demo: "toggle-group-item" },
    ],
  },
  {
    dir: "tooltip",
    catalog: "Tooltip",
    ui: [
      { fileBase: "tooltip", exportName: "Tooltip", module: "tooltip", title: "Tooltip", argTypes: { open: { control: "boolean" } }, args: { open: true }, demo: "tooltip-root" },
      { fileBase: "tooltip-trigger", exportName: "TooltipTrigger", module: "tooltip", title: "TooltipTrigger", argTypes: classNameControl, args: { children: "Hover" }, demo: "tooltip-trigger" },
      { fileBase: "tooltip-content", exportName: "TooltipContent", module: "tooltip", title: "TooltipContent", argTypes: classNameControl, args: { children: "Tooltip text" }, demo: "tooltip-content" },
    ],
  },
  { dir: "stack", catalog: "Stack", catalogDemo: "stack-children", ui: [] },
  { dir: "grid", catalog: "Grid", catalogDemo: "grid-children", ui: [] },
  { dir: "heading", catalog: "Heading", ui: [] },
  { dir: "text", catalog: "Text", ui: [] },
  { dir: "image", catalog: "Image", ui: [] },
  { dir: "link", catalog: "Link", ui: [] },
  { dir: "spinner", catalog: "Spinner", ui: [] },
];
