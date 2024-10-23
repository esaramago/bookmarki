import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CZuyNLFT.mjs';
import 'kleur/colors';
import 'clsx';
import { useSSRContext, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { buildClient } from '@xata.io/client';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "W:/www/bookmarki/src/layouts/Layout.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'Bookmarks',
  props: ['folders'],
  setup(__props, { expose: __expose }) {
  __expose();

  const props = __props;


const __returned__ = { props, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
  ssrRenderList($setup.props.folders, (folder) => {
    _push(`<li>${
      ssrInterpolate(folder.description)
    }: ${
      ssrInterpolate(folder.path?.id)
    }</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Bookmarks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Bookmarks = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const tables = [
  {
    name: "files",
    checkConstraints: {
      files_xata_id_length_xata_id: {
        name: "files_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))"
      }
    },
    foreignKeys: {
      path_link: {
        name: "path_link",
        columns: ["path"],
        referencedTable: "folders",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL"
      }
    },
    primaryKey: [],
    uniqueConstraints: {
      _pgroll_new_files_xata_id_key: {
        name: "_pgroll_new_files_xata_id_key",
        columns: ["xata_id"]
      }
    },
    columns: [
      {
        name: "description",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: ""
      },
      {
        name: "href",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: ""
      },
      {
        name: "path",
        type: "link",
        link: { table: "folders" },
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: '{"xata.link":"folders"}'
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: ""
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: ""
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: ""
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: ""
      }
    ]
  },
  {
    name: "folders",
    checkConstraints: {
      folders_xata_id_length_xata_id: {
        name: "folders_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))"
      }
    },
    foreignKeys: {
      path_link: {
        name: "path_link",
        columns: ["path"],
        referencedTable: "folders",
        referencedColumns: ["xata_id"],
        onDelete: "SET NULL"
      }
    },
    primaryKey: [],
    uniqueConstraints: {
      _pgroll_new_folders_xata_id_key: {
        name: "_pgroll_new_folders_xata_id_key",
        columns: ["xata_id"]
      }
    },
    columns: [
      {
        name: "description",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: ""
      },
      {
        name: "level",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: ""
      },
      {
        name: "path",
        type: "link",
        link: { table: "folders" },
        notNull: false,
        unique: false,
        defaultValue: "'root'::text",
        comment: '{"xata.link":"folders"}'
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: ""
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: ""
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: ""
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: ""
      }
    ]
  }
];
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL: "https://Emanuel-Saramago-s-workspace-r8e5qt.eu-central-1.xata.sh/db/bookmarki"
};
class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

const xataClient = new XataClient({
  apiKey: "xau_vTo1wvSbClSfE2XgrXjJSIaKWbNHb8WW0",
  branch: "main"
});
const xata = xataClient.db;

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const folders = await xata.folders.select([
    "id",
    "description",
    "level",
    "path.id"
  ]).sort("level", "asc").getAll();
  await xata.files.select([
    "id",
    "description",
    "href",
    "path.xata_id"
  ]).getAll();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>Bookmarki</h1> ${renderComponent($$result2, "Bookmarks", Bookmarks, { "folders": folders })} </main> ` })}`;
}, "W:/www/bookmarki/src/pages/index.astro", void 0);

const $$file = "W:/www/bookmarki/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
