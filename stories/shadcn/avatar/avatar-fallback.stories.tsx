import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AvatarFallback } from "@/components/ui/avatar";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/avatar/AvatarFallback",
  component: AvatarFallback,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui AvatarFallback](https://ui.shadcn.com/docs/components/avatar) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "CN"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("avatar-fallback", AvatarFallback, args)}</>
  ),
} satisfies Meta<typeof AvatarFallback>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
