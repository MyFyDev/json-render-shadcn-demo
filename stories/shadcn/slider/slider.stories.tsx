import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "@/components/ui/slider";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/slider/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Slider](https://ui.shadcn.com/docs/components/slider) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "min": {
    "control": "number"
  },
  "max": {
    "control": "number"
  },
  "step": {
    "control": "number"
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "min": 0,
  "max": 100,
  "step": 1,
  "disabled": false,
  "defaultValue": [
    40
  ]
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("slider-root", Slider, args)}</>
  ),
} satisfies Meta<typeof Slider>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
