import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/button/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Button](https://ui.shadcn.com/docs/components/button) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "variant": {
    "control": "select",
    "options": [
      "default",
      "outline",
      "secondary",
      "ghost",
      "destructive",
      "link"
    ]
  },
  "size": {
    "control": "select",
    "options": [
      "default",
      "xs",
      "sm",
      "lg",
      "icon",
      "icon-xs",
      "icon-sm",
      "icon-lg"
    ]
  },
  "disabled": {
    "control": "boolean"
  }
},
  args: {
  "variant": "default",
  "size": "default",
  "disabled": false,
  "children": "Button"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("", Button, args)}</>
  ),
} satisfies Meta<typeof Button>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
