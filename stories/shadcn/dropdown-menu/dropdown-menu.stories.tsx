import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/dropdown-menu/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DropdownMenu](https://ui.shadcn.com/docs/components/dropdown-menu) documentation.",
      },
    },
  },
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("dropdown-menu-root", DropdownMenu, args)}</>
  ),
} satisfies Meta<typeof DropdownMenu>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
