import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AccordionContent } from "@/components/ui/accordion";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/accordion/AccordionContent",
  component: AccordionContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui AccordionContent](https://ui.shadcn.com/docs/components/accordion) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Section body"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("accordion-content", AccordionContent, args)}</>
  ),
} satisfies Meta<typeof AccordionContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
