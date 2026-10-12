import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "@/components/ui/separator";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/separator/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Separator](https://ui.shadcn.com/docs/components/separator) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "orientation": {
    "control": "select",
    "options": [
      "horizontal",
      "vertical"
    ]
  },
  "decorative": {
    "control": "boolean"
  }
},
  args: {
  "orientation": "horizontal",
  "decorative": true
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Separator, args)}</>
  ),
} satisfies Meta<typeof Separator>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
