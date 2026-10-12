import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toggle } from "@/components/ui/toggle";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/toggle/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Toggle](https://ui.shadcn.com/docs/components/toggle) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "variant": {
    "control": "select",
    "options": [
      "default",
      "outline"
    ]
  },
  "size": {
    "control": "select",
    "options": [
      "default",
      "sm",
      "lg"
    ]
  },
  "pressed": {
    "control": "boolean"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "variant": "default",
  "size": "default",
  "pressed": false,
  "disabled": false,
  "children": "Toggle"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Toggle, args)}</>
  ),
} satisfies Meta<typeof Toggle>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
