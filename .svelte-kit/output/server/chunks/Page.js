import { c as create_ssr_component } from "./ssr.js";
const Page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".contentScroll.svelte-1y94j0{position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:auto}.content.svelte-1y94j0{position:absolute;width:min(100%, 60rem);height:100%;display:flex;flex-direction:column;align-items:center;box-sizing:border-box;padding:var(--pad)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="contentScroll svelte-1y94j0"><div class="content svelte-1y94j0">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Page as P
};
