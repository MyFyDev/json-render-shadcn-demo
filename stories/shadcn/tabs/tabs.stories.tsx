import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs } from "@/components/ui/tabs";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/tabs/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Tabs](https://ui.shadcn.com/docs/components/tabs) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "value": {
    "control": "text"
  }
},
  args: {
  "value": "tab1"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("tabs-root", Tabs, args)}</>
  ),
} satisfies Meta<typeof Tabs>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
