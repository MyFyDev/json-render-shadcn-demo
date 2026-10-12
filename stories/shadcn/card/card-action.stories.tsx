import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardAction } from "@/components/ui/card";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/card/CardAction",
  component: CardAction,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CardAction](https://ui.shadcn.com/docs/components/card) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Action"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("card-action", CardAction, args)}</>
  ),
} satisfies Meta<typeof CardAction>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
