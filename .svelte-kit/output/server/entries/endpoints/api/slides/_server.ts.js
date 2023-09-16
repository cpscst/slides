import { g as getSlideMeta } from "../../../../chunks/slides.js";
import { j as json } from "../../../../chunks/index.js";
const GET = async () => {
  const slideFiles = Object.entries(/* @__PURE__ */ Object.assign({ "/src/routes/slides/content/0.pdf": () => import("../../../../chunks/0.js") }));
  const slides = await Promise.all(
    slideFiles.map(async ([path, _]) => {
      const name = (path.split("/").pop() ?? "").split(".")[0];
      return getSlideMeta(name);
    })
  );
  slides.sort((a, b) => a.index - b.index);
  return json(slides);
};
export {
  GET
};
