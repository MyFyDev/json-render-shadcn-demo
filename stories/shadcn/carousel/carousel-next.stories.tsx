import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CarouselNext } from "@/components/ui/carousel";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/carousel/CarouselNext",
  component: CarouselNext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui CarouselNext](https://ui.shadcn.com/docs/components/carousel) documentation.",
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
    <>{renderUiDemo("carousel-next", CarouselNext, args)}</>
  ),
} satisfies Meta<typeof CarouselNext>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
