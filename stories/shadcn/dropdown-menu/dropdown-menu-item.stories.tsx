import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dropdown-menu/DropdownMenuItem",
  component: DropdownMenuItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DropdownMenuItem](https://ui.shadcn.com/docs/components/dropdown-menu) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "inset": {
    "control": "boolean"
  },
  "variant": {
    "control": "select",
    "options": [
      "default",
      "destructive"
    ]
  }
},
  args: {
  "children": "Item"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("dropdown-menu-item", DropdownMenuItem, args)}</>
  ),
} satisfies Meta<typeof DropdownMenuItem>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
