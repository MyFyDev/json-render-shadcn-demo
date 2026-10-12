import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Progress } from "@/components/ui/progress";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/progress/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Progress](https://ui.shadcn.com/docs/components/progress) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "value": {
    "control": {
      "type": "number",
      "min": 0,
      "max": 100
    }
  }
},
  args: {
  "value": 45
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Progress, args)}</>
  ),
} satisfies Meta<typeof Progress>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
