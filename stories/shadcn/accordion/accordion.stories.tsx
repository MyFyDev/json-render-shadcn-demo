import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion } from "@/components/ui/accordion";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/accordion/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Accordion](https://ui.shadcn.com/docs/components/accordion) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "type": {
    "control": "select",
    "options": [
      "single",
      "multiple"
    ]
  },
  "collapsible": {
    "control": "boolean"
  }
},
  args: {
  "type": "single",
  "collapsible": true
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("accordion-root", Accordion, args)}</>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
