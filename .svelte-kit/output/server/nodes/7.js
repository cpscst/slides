

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fair/stats/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.a356759b.js","_app/immutable/chunks/scheduler.a5e5241a.js","_app/immutable/chunks/index.b1dbd351.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Page.fb21337c.js","_app/immutable/chunks/Title.4de7dc55.js"];
export const stylesheets = ["_app/immutable/assets/7.daf62901.css","_app/immutable/assets/Page.285b647a.css","_app/immutable/assets/Title.728129bd.css"];
export const fonts = [];
