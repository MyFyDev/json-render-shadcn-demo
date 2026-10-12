import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardFooter } from "@/components/ui/card";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/card/CardFooter",
  component: CardFooter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CardFooter](https://ui.shadcn.com/docs/components/card) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Footer"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("card-footer", CardFooter, args)}</>
  ),
} satisfies Meta<typeof CardFooter>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
