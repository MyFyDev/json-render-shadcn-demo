import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "@/components/ui/select";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/select/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Select](https://ui.shadcn.com/docs/components/select) documentation.",
      },
    },
  },
  argTypes: {
  "value": {
    "control": "text"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "value": "apple"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("select-root", Select, args)}</>
  ),
} satisfies Meta<typeof Select>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
