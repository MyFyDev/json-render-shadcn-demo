import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CarouselPrevious } from "@/components/ui/carousel";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/carousel/CarouselPrevious",
  component: CarouselPrevious,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CarouselPrevious](https://ui.shadcn.com/docs/components/carousel) documentation.",
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
  }
},
  args: {
  "variant": "outline",
  "size": "icon-sm"
},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("carousel-previous", CarouselPrevious, args)}</>
  ),
} satisfies Meta<typeof CarouselPrevious>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
