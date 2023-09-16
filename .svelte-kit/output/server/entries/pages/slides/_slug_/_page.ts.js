import { g as getSlideMeta } from "../../../../chunks/slides.js";
async function load({ params }) {
  return getSlideMeta(params.slug);
}
export {
  load
};
