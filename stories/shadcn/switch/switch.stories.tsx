import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "@/components/ui/switch";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/switch/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Switch](https://ui.shadcn.com/docs/components/switch) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "checked": {
    "control": "boolean"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "checked": true,
  "disabled": false
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Switch, args)}</>
  ),
} satisfies Meta<typeof Switch>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
