import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PaginationItem } from "@/components/ui/pagination";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/pagination/PaginationItem",
  component: PaginationItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui PaginationItem](https://ui.shadcn.com/docs/components/pagination) documentation.",
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
    <>{renderUiDemo("pagination-item", PaginationItem, args)}</>
  ),
} satisfies Meta<typeof PaginationItem>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
