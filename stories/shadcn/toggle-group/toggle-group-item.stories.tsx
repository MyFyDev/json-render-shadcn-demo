import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ToggleGroupItem } from "@/components/ui/toggle-group";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/toggle-group/ToggleGroupItem",
  component: ToggleGroupItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui ToggleGroupItem](https://ui.shadcn.com/docs/components/toggle-group) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "value": "a",
  "children": "A"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("toggle-group-item", ToggleGroupItem, args)}</>
  ),
} satisfies Meta<typeof ToggleGroupItem>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
