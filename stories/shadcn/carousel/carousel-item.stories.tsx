import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CarouselItem } from "@/components/ui/carousel";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/carousel/CarouselItem",
  component: CarouselItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CarouselItem](https://ui.shadcn.com/docs/components/carousel) documentation.",
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
    <>{renderUiDemo("carousel-item", CarouselItem, args)}</>
  ),
} satisfies Meta<typeof CarouselItem>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
