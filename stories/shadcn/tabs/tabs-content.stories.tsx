import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TabsContent } from "@/components/ui/tabs";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/tabs/TabsContent",
  component: TabsContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TabsContent](https://ui.shadcn.com/docs/components/tabs) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "value": "tab1",
  "children": "Tab panel"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("tabs-content", TabsContent, args)}</>
  ),
} satisfies Meta<typeof TabsContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
