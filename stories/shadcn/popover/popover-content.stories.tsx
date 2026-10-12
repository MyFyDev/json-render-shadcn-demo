import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PopoverContent } from "@/components/ui/popover";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/popover/PopoverContent",
  component: PopoverContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui PopoverContent](https://ui.shadcn.com/docs/components/popover) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Popover body"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("popover-content", PopoverContent, args)}</>
  ),
} satisfies Meta<typeof PopoverContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
