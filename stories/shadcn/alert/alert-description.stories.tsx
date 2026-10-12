import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AlertDescription } from "@/components/ui/alert";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/alert/AlertDescription",
  component: AlertDescription,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui AlertDescription](https://ui.shadcn.com/docs/components/alert) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Alert description"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("alert-description", AlertDescription, args)}</>
  ),
} satisfies Meta<typeof AlertDescription>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
