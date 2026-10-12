import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Collapsible } from "@/components/ui/collapsible";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/collapsible/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Collapsible](https://ui.shadcn.com/docs/components/collapsible) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "open": {
    "control": "boolean"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "open": true
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("collapsible-root", Collapsible, args)}</>
  ),
} satisfies Meta<typeof Collapsible>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
