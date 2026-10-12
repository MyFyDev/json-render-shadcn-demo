import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert } from "@/components/ui/alert";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/alert/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Alert](https://ui.shadcn.com/docs/components/alert) documentation.",
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
      "destructive"
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
    <>{renderUiDemo("alert-root", Alert, args)}</>
  ),
} satisfies Meta<typeof Alert>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
