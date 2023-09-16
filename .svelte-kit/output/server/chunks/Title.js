import { c as create_ssr_component, e as escape } from "./ssr.js";
/* empty css                                     */const css = {
  code: ".upper.svelte-13aop2y{display:flex;flex-direction:column;align-items:left;justify-content:center;width:100%;padding:10vh 10vw;box-sizing:border-box;gap:1rem}h2.svelte-13aop2y{margin:0;padding:0;font-size:2em;font-weight:600}h3.svelte-13aop2y{margin:0;padding:0;font-size:1.2em;line-height:1.5em;font-weight:400}.start.svelte-13aop2y{font-size:1.2em}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { start = null } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  $$result.css.add(css);
  return `<div class="upper svelte-13aop2y"><h2 class="svelte-13aop2y">${escape(title)}</h2> <h3 class="svelte-13aop2y">${escape(subtitle)}</h3> ${start != null ? `<button class="start svelte-13aop2y">${escape(start)}</button>` : ``} </div>`;
});
export {
  Title as T
};
