import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TableHead } from "@/components/ui/table";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/table/TableHead",
  component: TableHead,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TableHead](https://ui.shadcn.com/docs/components/table) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Column"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("table-head", TableHead, args)}</>
  ),
} satisfies Meta<typeof TableHead>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
