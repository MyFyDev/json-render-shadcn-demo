import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TableCell } from "@/components/ui/table";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/table/TableCell",
  component: TableCell,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TableCell](https://ui.shadcn.com/docs/components/table) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  }
},
  args: {
  "children": "Cell"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("table-cell", TableCell, args)}</>
  ),
} satisfies Meta<typeof TableCell>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
