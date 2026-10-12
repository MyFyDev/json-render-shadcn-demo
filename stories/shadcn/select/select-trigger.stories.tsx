import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SelectTrigger } from "@/components/ui/select";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/select/SelectTrigger",
  component: SelectTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui SelectTrigger](https://ui.shadcn.com/docs/components/select) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "size": {
    "control": "select",
    "options": [
      "default",
      "sm"
    ]
  }
},
  args: {
  "size": "default"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("select-trigger", SelectTrigger, args)}</>
  ),
} satisfies Meta<typeof SelectTrigger>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
