import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tooltip } from "@/components/ui/tooltip";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/tooltip/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Tooltip](https://ui.shadcn.com/docs/components/tooltip) documentation.",
      },
    },
  },
  argTypes: {
  "open": {
    "control": "boolean"
  }
},
  args: {
  "open": true
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("tooltip-root", Tooltip, args)}</>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
