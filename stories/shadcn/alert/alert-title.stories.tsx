import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AlertTitle } from "@/components/ui/alert";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/alert/AlertTitle",
  component: AlertTitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui AlertTitle](https://ui.shadcn.com/docs/components/alert) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Alert title"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("alert-title", AlertTitle, args)}</>
  ),
} satisfies Meta<typeof AlertTitle>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
