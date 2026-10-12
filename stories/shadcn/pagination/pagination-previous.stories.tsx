import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PaginationPrevious } from "@/components/ui/pagination";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/pagination/PaginationPrevious",
  component: PaginationPrevious,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui PaginationPrevious](https://ui.shadcn.com/docs/components/pagination) documentation.",
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
  "text": "Previous",
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
    <>{renderUiDemo("pagination-previous", PaginationPrevious, args)}</>
  ),
} satisfies Meta<typeof PaginationPrevious>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
