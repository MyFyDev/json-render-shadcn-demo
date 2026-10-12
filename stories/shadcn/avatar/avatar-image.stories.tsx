import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AvatarImage } from "@/components/ui/avatar";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/avatar/AvatarImage",
  component: AvatarImage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui AvatarImage](https://ui.shadcn.com/docs/components/avatar) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "src": {
    "control": "text"
  },
  "alt": {
    "control": "text"
  }
},
  args: {
  "src": "https://github.com/shadcn.png",
  "alt": "Avatar"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("avatar-image", AvatarImage, args)}</>
  ),
} satisfies Meta<typeof AvatarImage>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
