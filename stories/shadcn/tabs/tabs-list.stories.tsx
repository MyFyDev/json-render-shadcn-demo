import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TabsList } from "@/components/ui/tabs";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/tabs/TabsList",
  component: TabsList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TabsList](https://ui.shadcn.com/docs/components/tabs) documentation.",
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
      "line"
    ]
  }
},
  args: {
  "variant": "default"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("tabs-list", TabsList, args)}</>
  ),
} satisfies Meta<typeof TabsList>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
