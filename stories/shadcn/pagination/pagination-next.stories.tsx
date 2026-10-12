import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PaginationNext } from "@/components/ui/pagination";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/pagination/PaginationNext",
  component: PaginationNext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui PaginationNext](https://ui.shadcn.com/docs/components/pagination) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "text": {
    "control": "text"
  },
  "href": {
    "control": "text"
  }
},
  args: {
  "text": "Next",
  "href": "#"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("pagination-next", PaginationNext, args)}</>
  ),
} satisfies Meta<typeof PaginationNext>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
