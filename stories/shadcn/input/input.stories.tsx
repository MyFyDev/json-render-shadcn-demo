import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/ui/input";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/input/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Input](https://ui.shadcn.com/docs/components/input) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "type": {
    "control": "select",
    "options": [
      "text",
      "email",
      "password",
      "number",
      "search",
      "tel",
      "url"
    ]
  },
  "placeholder": {
    "control": "text"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "type": "text",
  "placeholder": "Placeholder",
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
    <>{renderUiDemo("", Input, args)}</>
  ),
} satisfies Meta<typeof Input>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
