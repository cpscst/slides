import { c as create_ssr_component, b as each, v as validate_component } from "./ssr.js";
import { C as Card } from "./Card.js";
/* empty css                                          */const css = {
  code: ".options.svelte-1xym93d{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--pad);width:100%;padding:0 10vw;box-sizing:border-box}",
  map: null
};
const Activities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  const allActivities = {
    home: { title: "Home", url: "/", arrowBack: true },
    fair: {
      title: "Club fair activities",
      url: "fair"
    },
    quiz: {
      title: "Controversial quiz",
      url: "fair/quiz"
    },
    problems: {
      title: "Fun coding problems",
      url: "fair/problems"
    },
    stats: { title: "CST stats", url: "fair/stats" },
    signup: {
      title: "Sign up",
      url: "fair/signup",
      special: true
    },
    slides: { title: "Slides", url: "slides" }
  };
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  return `<div class="options svelte-1xym93d">${each(items, (item) => {
    return `${validate_component(Card, "Card").$$render($$result, Object.assign({}, allActivities[item]), {}, {})}`;
  })} </div>`;
});
export {
  Activities as A
};
