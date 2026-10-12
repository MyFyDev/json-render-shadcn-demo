import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dropdown-menu/DropdownMenuContent",
  component: DropdownMenuContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DropdownMenuContent](https://ui.shadcn.com/docs/components/dropdown-menu) documentation.",
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
    <>{renderUiDemo("dropdown-menu-content", DropdownMenuContent, args)}</>
  ),
} satisfies Meta<typeof DropdownMenuContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
