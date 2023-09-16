import { c as create_ssr_component, v as validate_component, b as each } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { P as Page } from "../../../chunks/Page.js";
import { T as Title } from "../../../chunks/Title.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".slides.svelte-15ojua1{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--pad);width:100%;padding:0 10vw;box-sizing:border-box}",
  map: null
};
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Title, "Title").$$render(
        $$result,
        {
          title: "Slides",
          subtitle: "Check out the CST slides"
        },
        {},
        {}
      )} <div class="slides svelte-15ojua1">${each(data.slides, (slide) => {
        return `${validate_component(Card, "Card").$$render(
          $$result,
          {
            title: slide.title,
            url: `slides/${slide.url}`
          },
          {},
          {}
        )}`;
      })}</div>`;
    }
  })}`;
});
export {
  Page_1 as default
};
