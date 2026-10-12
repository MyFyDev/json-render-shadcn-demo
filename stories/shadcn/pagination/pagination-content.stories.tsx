import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PaginationContent } from "@/components/ui/pagination";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/pagination/PaginationContent",
  component: PaginationContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui PaginationContent](https://ui.shadcn.com/docs/components/pagination) documentation.",
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
    <>{renderUiDemo("pagination-content", PaginationContent, args)}</>
  ),
} satisfies Meta<typeof PaginationContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
