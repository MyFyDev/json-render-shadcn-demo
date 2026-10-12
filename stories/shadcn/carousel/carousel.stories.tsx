import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Carousel } from "@/components/ui/carousel";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/carousel/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui Carousel](https://ui.shadcn.com/docs/components/carousel) documentation.",
      },
    },
  },
  argTypes: {
  "className": {
    "control": "text"
  },
  "orientation": {
    "control": "select",
    "options": [
      "horizontal",
      "vertical"
    ]
  }
},
  args: {
  "orientation": "horizontal"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("carousel-root", Carousel, args)}</>
  ),
} satisfies Meta<typeof Carousel>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
