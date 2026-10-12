import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioGroup } from "@/components/ui/radio-group";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/radio-group/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui RadioGroup](https://ui.shadcn.com/docs/components/radio-group) documentation.",
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
  "value": "a"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("radio-group-root", RadioGroup, args)}</>
  ),
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
