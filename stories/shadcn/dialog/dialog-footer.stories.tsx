import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DialogFooter } from "@/components/ui/dialog";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dialog/DialogFooter",
  component: DialogFooter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DialogFooter](https://ui.shadcn.com/docs/components/dialog) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Footer actions"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("dialog-footer", DialogFooter, args)}</>
  ),
} satisfies Meta<typeof DialogFooter>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
