

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a3f7d403.js","_app/immutable/chunks/scheduler.a5e5241a.js","_app/immutable/chunks/index.b1dbd351.js","_app/immutable/chunks/Activities.84eaaea0.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Card.2de8a4a2.js","_app/immutable/chunks/paths.f3e34a8e.js","_app/immutable/chunks/Page.fb21337c.js","_app/immutable/chunks/Title.4de7dc55.js"];
export const stylesheets = ["_app/immutable/assets/Activities.350f9cd8.css","_app/immutable/assets/Card.f5167e13.css","_app/immutable/assets/Page.285b647a.css","_app/immutable/assets/Title.728129bd.css"];
export const fonts = [];
