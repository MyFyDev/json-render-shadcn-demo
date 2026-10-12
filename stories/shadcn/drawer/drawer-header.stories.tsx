import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DrawerHeader } from "@/components/ui/drawer";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/drawer/DrawerHeader",
  component: DrawerHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DrawerHeader](https://ui.shadcn.com/docs/components/drawer) documentation.",
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
    <>{renderUiDemo("drawer-header", DrawerHeader, args)}</>
  ),
} satisfies Meta<typeof DrawerHeader>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
