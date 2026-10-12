import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storyGroups } from "../lib/storybook/ui-groups";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const storiesRoot = path.join(root, "stories", "shadcn");

function writeFile(relPath: string, content: string) {
  const full = path.join(storiesRoot, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}

function catalogStoryFile(group: (typeof storyGroups)[number]) {
  if (!group.catalog) {
    return;
  }

  writeFile(
    `${group.dir}/json-render.stories.tsx`,
    `import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  catalogInitialState,
  catalogStoryExtras,
} from "@/lib/storybook/catalog-extras";
import { catalogStoryControls } from "@/lib/storybook/catalog-arg-types";
import { ShadcnStoryProviders } from "@/lib/storybook/providers";
import { renderShadcn } from "@/lib/storybook/render-shadcn";

const controls = catalogStoryControls("${group.catalog}");

const meta = {
  title: "json-render/catalog/${group.dir}",
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
        "${group.catalog}",
        args as Record<string, unknown>,
        catalogStoryExtras("${group.catalog}"),
      )}
    </>
  ),
} satisfies Meta;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
`,
  );
}

function uiStoryFile(
  group: (typeof storyGroups)[number],
  ui: (typeof storyGroups)[number]["ui"][number],
) {
  writeFile(
    `${group.dir}/${ui.fileBase}.stories.tsx`,
    `import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ${ui.exportName} } from "@/components/ui/${ui.module}";
import { ShadcnUiProviders } from "@/lib/storybook/ui-providers";
import { renderUiDemo } from "@/lib/storybook/ui-demos";

const meta = {
  title: "shadcn/ui/${group.dir}/${ui.title}",
  component: ${ui.exportName},
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Props mirror the [shadcn/ui ${ui.title}](https://ui.shadcn.com/docs/components/${group.dir}) documentation.",
      },
    },
  },
  argTypes: ${JSON.stringify(ui.argTypes, null, 2)},
  args: ${JSON.stringify(ui.args, null, 2)},
  decorators: [
    (Story) => (
      <ShadcnUiProviders>
        <div className="p-4">{Story()}</div>
      </ShadcnUiProviders>
    ),
  ],
  render: (args) => (
    <>{renderUiDemo("${ui.demo ?? ""}", ${ui.exportName}, args)}</>
  ),
} satisfies Meta<typeof ${ui.exportName}>;

export default meta;

export const Playground: StoryObj<typeof meta> = {};
`,
  );
}

for (const entry of fs.readdirSync(storiesRoot, { withFileTypes: true })) {
  if (entry.isDirectory()) {
    fs.rmSync(path.join(storiesRoot, entry.name), { recursive: true, force: true });
  }
}

for (const entry of fs.readdirSync(storiesRoot, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".stories.tsx")) {
    fs.rmSync(path.join(storiesRoot, entry.name), { force: true });
  }
}

for (const group of storyGroups) {
  catalogStoryFile(group);
  for (const ui of group.ui) {
    uiStoryFile(group, ui);
  }
}

console.log(`Generated stories for ${storyGroups.length} groups.`);
