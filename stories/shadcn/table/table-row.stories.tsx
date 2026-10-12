import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TableRow } from "@/components/ui/table";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/table/TableRow",
  component: TableRow,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TableRow](https://ui.shadcn.com/docs/components/table) documentation.",
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
    <>{renderUiDemo("table-row", TableRow, args)}</>
  ),
} satisfies Meta<typeof TableRow>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
