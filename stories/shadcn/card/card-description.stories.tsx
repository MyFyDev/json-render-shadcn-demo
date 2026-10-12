import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardDescription } from "@/components/ui/card";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/card/CardDescription",
  component: CardDescription,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CardDescription](https://ui.shadcn.com/docs/components/card) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Supporting description"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("card-description", CardDescription, args)}</>
  ),
} satisfies Meta<typeof CardDescription>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
