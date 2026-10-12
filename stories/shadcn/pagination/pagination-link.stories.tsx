import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PaginationLink } from "@/components/ui/pagination";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/pagination/PaginationLink",
  component: PaginationLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui PaginationLink](https://ui.shadcn.com/docs/components/pagination) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "isActive": {
    "control": "boolean"
  },
  "size": {
    "control": "select",
    "options": [
      "default",
      "xs",
      "sm",
      "lg",
      "icon",
      "icon-xs",
      "icon-sm",
      "icon-lg"
    ]
  },
  "href": {
    "control": "text"
  }
},
  args: {
  "isActive": false,
  "size": "icon",
  "href": "#",
  "children": "1"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("pagination-link", PaginationLink, args)}</>
  ),
} satisfies Meta<typeof PaginationLink>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
