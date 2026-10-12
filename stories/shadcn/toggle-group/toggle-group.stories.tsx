import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/toggle-group/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui ToggleGroup](https://ui.shadcn.com/docs/components/toggle-group) documentation.",
      },
    },
  },
  argTypes: {
  "type": {
    "control": "select",
    "options": [
      "single",
      "multiple"
    ]
  },
  "variant": {
    "control": "select",
    "options": [
      "default",
      "outline"
    ]
  },
  "size": {
    "control": "select",
    "options": [
      "default",
      "sm",
      "lg"
    ]
  }
},
  args: {
  "type": "single",
  "variant": "default",
  "size": "default",
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
    <>{renderUiDemo("toggle-group-root", ToggleGroup, args)}</>
  ),
} satisfies Meta<typeof ToggleGroup>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
