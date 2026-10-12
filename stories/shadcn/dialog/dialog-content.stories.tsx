import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DialogContent } from "@/components/ui/dialog";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dialog/DialogContent",
  component: DialogContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DialogContent](https://ui.shadcn.com/docs/components/dialog) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("dialog-content", DialogContent, args)}</>
  ),
} satisfies Meta<typeof DialogContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
