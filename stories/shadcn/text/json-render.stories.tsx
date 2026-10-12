import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  catalogInitialState,
  catalogStoryExtras,
} from "@/lib/storybook/catalog-extras";
import { catalogStoryControls } from "@/lib/storybook/catalog-arg-types";
import { ShadcnStoryProviders } from "@/lib/storybook/providers";
import { renderShadcn } from "@/lib/storybook/render-shadcn";

const controls = catalogStoryControls("Text");

const meta = {
  title: "json-render/catalog/text",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          controls.description +
          " Props match the @json-render/shadcn catalog (used by the AI demo).",
      },
    },
  },
  argTypes: controls.argTypes,
  args: controls.defaultArgs,
  decorators: [
    (Story, context) => (
      <ShadcnStoryProviders initialState={catalogInitialState(context.args)}>
        <div className="w-full max-w-2xl p-4">{Story()}</div>
      </ShadcnStoryProviders>
    ),
  ],
  render: (args) => (
    <>
      {renderShadcn(
        "Text",
        args as Record<string, unknown>,
        catalogStoryExtras("Text"),
      )}
    </>
  ),
} satisfies Meta;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
