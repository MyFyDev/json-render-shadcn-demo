import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SelectItem } from "@/components/ui/select";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/select/SelectItem",
  component: SelectItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui SelectItem](https://ui.shadcn.com/docs/components/select) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "value": "apple",
  "children": "Apple"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("select-item", SelectItem, args)}</>
  ),
} satisfies Meta<typeof SelectItem>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
