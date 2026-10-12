import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  catalogInitialState,
  catalogStoryExtras,
} from "@/lib/storybook/catalog-extras";
import { catalogStoryControls } from "@/lib/storybook/catalog-arg-types";
import { ShadcnStoryProviders } from "@/lib/storybook/providers";
import { renderShadcn } from "@/lib/storybook/render-shadcn";

const controls = catalogStoryControls("Tabs");

const meta = {
  title: "json-render/catalog/tabs",
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
        "Tabs",
        args as Record<string, unknown>,
        catalogStoryExtras("Tabs"),
      )}
    </>
  ),
} satisfies Meta;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
