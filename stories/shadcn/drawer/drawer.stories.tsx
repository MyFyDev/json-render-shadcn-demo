import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Drawer } from "@/components/ui/drawer";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/drawer/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Drawer](https://ui.shadcn.com/docs/components/drawer) documentation.",
      },
    },
  },
  argTypes: {
  "open": {
    "control": "boolean"
  }
},
  args: {
  "open": true
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("drawer-root", Drawer, args)}</>
  ),
} satisfies Meta<typeof Drawer>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
