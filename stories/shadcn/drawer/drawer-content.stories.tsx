import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DrawerContent } from "@/components/ui/drawer";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/drawer/DrawerContent",
  component: DrawerContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui DrawerContent](https://ui.shadcn.com/docs/components/drawer) documentation.",
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
    <>{renderUiDemo("drawer-content", DrawerContent, args)}</>
  ),
} satisfies Meta<typeof DrawerContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
