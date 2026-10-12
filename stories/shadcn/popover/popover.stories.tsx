import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Popover } from "@/components/ui/popover";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/popover/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Popover](https://ui.shadcn.com/docs/components/popover) documentation.",
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
    <>{renderUiDemo("popover-root", Popover, args)}</>
  ),
} satisfies Meta<typeof Popover>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
