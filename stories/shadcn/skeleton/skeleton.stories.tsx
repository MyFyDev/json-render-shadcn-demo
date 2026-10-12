import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "@/components/ui/skeleton";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/skeleton/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Skeleton](https://ui.shadcn.com/docs/components/skeleton) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "className": "h-8 w-48"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Skeleton, args)}</>
  ),
} satisfies Meta<typeof Skeleton>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
