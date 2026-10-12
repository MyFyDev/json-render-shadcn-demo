import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/components/ui/badge";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/badge/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Badge](https://ui.shadcn.com/docs/components/badge) documentation.",
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
      "secondary",
      "destructive",
      "outline"
    ]
  }
},
  args: {
  "variant": "default",
  "children": "Badge"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Badge, args)}</>
  ),
} satisfies Meta<typeof Badge>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
