import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "@/components/ui/card";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/card/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Card](https://ui.shadcn.com/docs/components/card) documentation.",
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
  "size": "default",
  "children": "Card content"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Card, args)}</>
  ),
} satisfies Meta<typeof Card>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
