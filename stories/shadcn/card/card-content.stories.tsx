import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardContent } from "@/components/ui/card";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/card/CardContent",
  component: CardContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CardContent](https://ui.shadcn.com/docs/components/card) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Main content"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("card-content", CardContent, args)}</>
  ),
} satisfies Meta<typeof CardContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
