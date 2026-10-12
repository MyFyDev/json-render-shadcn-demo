import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DialogTrigger } from "@/components/ui/dialog";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dialog/DialogTrigger",
  component: DialogTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DialogTrigger](https://ui.shadcn.com/docs/components/dialog) documentation.",
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
    <>{renderUiDemo("dialog-trigger", DialogTrigger, args)}</>
  ),
} satisfies Meta<typeof DialogTrigger>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
