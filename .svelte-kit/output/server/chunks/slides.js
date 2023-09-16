const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function getSlideMeta(name) {
  let meta;
  try {
    meta = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../routes/slides/content/0.json": () => import("./02.js") }), `../routes/slides/content/${name}.json`);
  } catch (e) {
    console.error(e);
    meta = {
      title: "Untitled"
    };
  }
  const ret = {
    ...meta,
    index: parseInt(name),
    url: name
  };
  return ret;
}
export {
  getSlideMeta as g
};
