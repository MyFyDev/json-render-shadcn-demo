import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "@/components/ui/avatar";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/avatar/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Avatar](https://ui.shadcn.com/docs/components/avatar) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "size": {
    "control": "select",
    "options": [
      "default",
      "sm",
      "lg"
    ]
  }
},
  args: {
  "size": "default"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("avatar-root", Avatar, args)}</>
  ),
} satisfies Meta<typeof Avatar>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
