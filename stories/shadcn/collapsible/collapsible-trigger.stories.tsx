import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/collapsible/CollapsibleTrigger",
  component: CollapsibleTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CollapsibleTrigger](https://ui.shadcn.com/docs/components/collapsible) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
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
    <>{renderUiDemo("collapsible-trigger", CollapsibleTrigger, args)}</>
  ),
} satisfies Meta<typeof CollapsibleTrigger>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
