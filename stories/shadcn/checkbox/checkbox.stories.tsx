import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@/components/ui/checkbox";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/checkbox/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Checkbox](https://ui.shadcn.com/docs/components/checkbox) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "checked": {
    "control": "boolean"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "checked": false,
  "disabled": false
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Checkbox, args)}</>
  ),
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
