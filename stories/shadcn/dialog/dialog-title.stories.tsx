import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DialogTitle } from "@/components/ui/dialog";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dialog/DialogTitle",
  component: DialogTitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DialogTitle](https://ui.shadcn.com/docs/components/dialog) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Dialog title"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("dialog-title", DialogTitle, args)}</>
  ),
} satisfies Meta<typeof DialogTitle>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
