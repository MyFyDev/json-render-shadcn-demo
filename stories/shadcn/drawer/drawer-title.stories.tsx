import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DrawerTitle } from "@/components/ui/drawer";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/drawer/DrawerTitle",
  component: DrawerTitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DrawerTitle](https://ui.shadcn.com/docs/components/drawer) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Drawer title"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("drawer-title", DrawerTitle, args)}</>
  ),
} satisfies Meta<typeof DrawerTitle>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
