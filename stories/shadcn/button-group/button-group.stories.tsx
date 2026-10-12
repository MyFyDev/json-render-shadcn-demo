import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonGroup } from "@/components/ui/button-group";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/button-group/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui ButtonGroup](https://ui.shadcn.com/docs/components/button-group) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("button-group-root", ButtonGroup, args)}</>
  ),
} satisfies Meta<typeof ButtonGroup>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
