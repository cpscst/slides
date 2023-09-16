import * as universal from '../entries/pages/slides/_slug_/_page.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slides/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/slides/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/9.6aa535da.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.a5e5241a.js","_app/immutable/chunks/index.b1dbd351.js","_app/immutable/chunks/Page.fb21337c.js"];
export const stylesheets = ["_app/immutable/assets/9.038cee61.css","_app/immutable/assets/Title.728129bd.css","_app/immutable/assets/Page.285b647a.css"];
export const fonts = [];
