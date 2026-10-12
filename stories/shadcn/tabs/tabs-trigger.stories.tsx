import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TabsTrigger } from "@/components/ui/tabs";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/tabs/TabsTrigger",
  component: TabsTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TabsTrigger](https://ui.shadcn.com/docs/components/tabs) documentation.",
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
  "children": "Tab 1"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("tabs-trigger", TabsTrigger, args)}</>
  ),
} satisfies Meta<typeof TabsTrigger>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
