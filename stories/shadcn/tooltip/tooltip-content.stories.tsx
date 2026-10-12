import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TooltipContent } from "@/components/ui/tooltip";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/tooltip/TooltipContent",
  component: TooltipContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TooltipContent](https://ui.shadcn.com/docs/components/tooltip) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Tooltip text"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("tooltip-content", TooltipContent, args)}</>
  ),
} satisfies Meta<typeof TooltipContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
