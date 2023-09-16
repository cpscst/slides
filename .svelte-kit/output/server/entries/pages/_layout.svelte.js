import { c as create_ssr_component, a as subscribe, e as escape, b as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { b as base } from "../../chunks/paths.js";
const global = "";
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1cc9lz2{display:flex;justify-content:space-between;align-items:center;padding:var(--pad);background:var(--back-1)}h1.svelte-1cc9lz2{margin:0}main.svelte-1cc9lz2{height:100%;display:flex;flex-direction:column;align-items:center}.links.svelte-1cc9lz2{display:flex;flex-direction:row;align-items:center;gap:var(--pad)}.page.svelte-1cc9lz2{color:var(--text);font-weight:400}.page.svelte-1cc9lz2:hover{color:var(--text-strong)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let prettyPage = [];
  $$result.css.add(css);
  {
    {
      let path = $page.url.pathname;
      if (path == "/" || path == base) {
        prettyPage = [];
      } else {
        let split = path.replace(base, "").slice(1).split("/");
        prettyPage = split.map((name, i) => {
          return {
            name,
            url: "/" + split.slice(0, i + 1).join("/")
          };
        });
      }
    }
  }
  $$unsubscribe_page();
  return `<head><title>${escape("⇒CST")}</title></head> <header class="svelte-1cc9lz2"><h1 class="svelte-1cc9lz2"><a href="${escape(base, true) + "/"}">${escape("=>CST")}</a> ${each(prettyPage, (page2) => {
    return `<a class="page svelte-1cc9lz2" href="${escape(base, true) + "/" + escape(page2.url, true)}">/${escape(page2.name)}</a>`;
  })}</h1> <div class="links svelte-1cc9lz2" data-svelte-h="svelte-rvp5e4"><a href="${escape(base, true) + "/fair/signup"}"><button>Sign Up</button></a> <a href="https://github.com/Ashwagandhae/cst-demo" target="_blank" rel="noopener noreferrer">Code on Github</a> </div></header> <main class="svelte-1cc9lz2">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
