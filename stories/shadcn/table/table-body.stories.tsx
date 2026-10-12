import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TableBody } from "@/components/ui/table";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/table/TableBody",
  component: TableBody,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui TableBody](https://ui.shadcn.com/docs/components/table) documentation.",
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
    <>{renderUiDemo("table-body", TableBody, args)}</>
  ),
} satisfies Meta<typeof TableBody>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
