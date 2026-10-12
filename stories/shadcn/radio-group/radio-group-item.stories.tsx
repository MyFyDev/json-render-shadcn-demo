import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/radio-group/RadioGroupItem",
  component: RadioGroupItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui RadioGroupItem](https://ui.shadcn.com/docs/components/radio-group) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "value": {
    "control": "text"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "value": "a"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("radio-group-item", RadioGroupItem, args)}</>
  ),
} satisfies Meta<typeof RadioGroupItem>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
