import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SelectContent } from "@/components/ui/select";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/select/SelectContent",
  component: SelectContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui SelectContent](https://ui.shadcn.com/docs/components/select) documentation.",
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
    <>{renderUiDemo("select-content", SelectContent, args)}</>
  ),
} satisfies Meta<typeof SelectContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
