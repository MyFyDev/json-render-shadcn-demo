import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CollapsibleContent } from "@/components/ui/collapsible";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/collapsible/CollapsibleContent",
  component: CollapsibleContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CollapsibleContent](https://ui.shadcn.com/docs/components/collapsible) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Hidden content"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("collapsible-content", CollapsibleContent, args)}</>
  ),
} satisfies Meta<typeof CollapsibleContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
