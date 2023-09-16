import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import { P as Page } from "../../../../chunks/Page.js";
/* empty css                                                      */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-3b5s5l{margin:0;padding:0}object.svelte-3b5s5l{width:100%;height:100%}.meta.svelte-3b5s5l{display:flex;justify-content:space-between;align-items:center;width:100%}",
  map: null
};
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pdfUrl;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="meta svelte-3b5s5l"><h1 class="svelte-3b5s5l">${escape(data.title)}</h1> <a${add_attribute("href", pdfUrl, 0)} target="_blank" rel="noopener noreferrer">Open in new tab ${escape("->")}</a></div> <object title="pdf"${add_attribute("data", pdfUrl, 0)} type="application/pdf" width="100%" height="100%" class="svelte-3b5s5l"></object>`;
    }
  })}`;
});
export {
  Page_1 as default
};
