import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/tooltip/TooltipTrigger",
  component: TooltipTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TooltipTrigger](https://ui.shadcn.com/docs/components/tooltip) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Hover"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("tooltip-trigger", TooltipTrigger, args)}</>
  ),
} satisfies Meta<typeof TooltipTrigger>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
