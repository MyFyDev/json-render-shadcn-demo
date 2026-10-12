import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AccordionTrigger } from "@/components/ui/accordion";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/accordion/AccordionTrigger",
  component: AccordionTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui AccordionTrigger](https://ui.shadcn.com/docs/components/accordion) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Section"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("accordion-trigger", AccordionTrigger, args)}</>
  ),
} satisfies Meta<typeof AccordionTrigger>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
