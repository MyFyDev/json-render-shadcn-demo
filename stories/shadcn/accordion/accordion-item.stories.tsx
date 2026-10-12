import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AccordionItem } from "@/components/ui/accordion";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/accordion/AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui AccordionItem](https://ui.shadcn.com/docs/components/accordion) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "value": {
    "control": "text"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "value": "item-1"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("accordion-item", AccordionItem, args)}</>
  ),
} satisfies Meta<typeof AccordionItem>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
