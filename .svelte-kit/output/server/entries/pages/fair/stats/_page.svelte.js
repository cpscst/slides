import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Page } from "../../../../chunks/Page.js";
import { T as Title } from "../../../../chunks/Title.js";
const Stat_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".stats.svelte-zss4x2{position:relative;gap:var(--pad);width:100%;padding:10vw 0;box-sizing:border-box;display:grid;grid-template-columns:repeat(auto-fit, minmax(15rem, 1fr))}",
  map: null
};
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${`${validate_component(Title, "Title").$$render(
        $$result,
        {
          title: "CST Stats",
          subtitle: "Learn about the Computer Science Team",
          start: "Show me"
        },
        {},
        {}
      )}`}`;
    }
  })}`;
});
export {
  Page_1 as default
};
