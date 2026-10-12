import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "@/components/ui/textarea";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/textarea/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Textarea](https://ui.shadcn.com/docs/components/textarea) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "placeholder": {
    "control": "text"
  },
  "disabled": {
    "control": "boolean"
  },
  "rows": {
    "control": "number"
  }
},
  args: {
  "placeholder": "Write here…",
  "disabled": false,
  "rows": 4
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Textarea, args)}</>
  ),
} satisfies Meta<typeof Textarea>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
