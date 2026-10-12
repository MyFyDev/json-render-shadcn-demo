import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CarouselContent } from "@/components/ui/carousel";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/carousel/CarouselContent",
  component: CarouselContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CarouselContent](https://ui.shadcn.com/docs/components/carousel) documentation.",
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
    <>{renderUiDemo("carousel-content", CarouselContent, args)}</>
  ),
} satisfies Meta<typeof CarouselContent>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
