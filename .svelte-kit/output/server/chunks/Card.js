import { c as create_ssr_component, e as escape } from "./ssr.js";
import { b as base } from "./paths.js";
/* empty css                                    */const css = {
  code: ".card.svelte-c97rs9.svelte-c97rs9{display:flex;flex-direction:row;align-items:left;justify-content:space-between;width:100%;background:var(--back-1);border-radius:0.5em;padding:1em;text-decoration:none;color:var(--text-accent);text-align:left;transition:background var(--trans) ease-in-out, color var(--trans) ease-in-out}.arrow.svelte-c97rs9.svelte-c97rs9{opacity:0;transform:translateX(-0.5em);transition:opacity var(--trans) ease-in-out, transform var(--trans) ease-in-out}.arrow.back.svelte-c97rs9.svelte-c97rs9{transform:translateX(0.5em)}.card.svelte-c97rs9:hover .arrow.svelte-c97rs9{opacity:1;transform:translateX(0)}.card.svelte-c97rs9.svelte-c97rs9:hover{background:var(--back-2);color:var(--text-accent-hover)}h2.svelte-c97rs9.svelte-c97rs9{margin:0;padding:0;font-size:1.5em}.card.special.svelte-c97rs9.svelte-c97rs9{color:var(--text)}.card.special.svelte-c97rs9.svelte-c97rs9:hover{color:var(--text-strong)}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { url } = $$props;
  let { special = false } = $$props;
  let { arrowBack = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.special === void 0 && $$bindings.special && special !== void 0)
    $$bindings.special(special);
  if ($$props.arrowBack === void 0 && $$bindings.arrowBack && arrowBack !== void 0)
    $$bindings.arrowBack(arrowBack);
  $$result.css.add(css);
  return `<a class="${["card svelte-c97rs9", special ? "special" : ""].join(" ").trim()}" href="${escape(base, true) + "/" + escape(url, true)}"><h2 class="svelte-c97rs9">${escape(title)}</h2> <h2 class="${["arrow svelte-c97rs9", arrowBack ? "back" : ""].join(" ").trim()}">${escape(arrowBack ? "<-" : "->")}</h2> </a>`;
});
export {
  Card as C
};
