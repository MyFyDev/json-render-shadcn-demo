import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PopoverTrigger } from "@/components/ui/popover";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/popover/PopoverTrigger",
  component: PopoverTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui PopoverTrigger](https://ui.shadcn.com/docs/components/popover) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Open"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("popover-trigger", PopoverTrigger, args)}</>
  ),
} satisfies Meta<typeof PopoverTrigger>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
