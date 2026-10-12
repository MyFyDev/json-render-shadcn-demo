import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dropdown-menu/DropdownMenuTrigger",
  component: DropdownMenuTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DropdownMenuTrigger](https://ui.shadcn.com/docs/components/dropdown-menu) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Menu"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("dropdown-menu-trigger", DropdownMenuTrigger, args)}</>
  ),
} satisfies Meta<typeof DropdownMenuTrigger>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
