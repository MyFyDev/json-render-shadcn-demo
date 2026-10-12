import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dialog } from "@/components/ui/dialog";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dialog/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Dialog](https://ui.shadcn.com/docs/components/dialog) documentation.",
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
    <>{renderUiDemo("dialog-root", Dialog, args)}</>
  ),
} satisfies Meta<typeof Dialog>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
