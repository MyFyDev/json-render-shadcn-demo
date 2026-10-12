import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pagination } from "@/components/ui/pagination";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/pagination/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Pagination](https://ui.shadcn.com/docs/components/pagination) documentation.",
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
    <>{renderUiDemo("pagination-root", Pagination, args)}</>
  ),
} satisfies Meta<typeof Pagination>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
