import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { A as Activities } from "../../chunks/Activities.js";
import { P as Page } from "../../chunks/Page.js";
import { T as Title } from "../../chunks/Title.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Title, "Title").$$render(
        $$result,
        {
          title: "Welcome to Computer Science Team",
          subtitle: "Check out some fun things to do"
        },
        {},
        {}
      )} ${validate_component(Activities, "Activities").$$render($$result, { items: ["slides", "fair"] }, {}, {})}`;
    }
  })}`;
});
export {
  Page_1 as default
};
