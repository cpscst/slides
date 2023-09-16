import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.41397e13.js","_app/immutable/chunks/scheduler.a5e5241a.js","_app/immutable/chunks/index.b1dbd351.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.a8a70dcb.js","_app/immutable/chunks/singletons.ffbe0101.js","_app/immutable/chunks/index.2b2d3a1c.js","_app/immutable/chunks/paths.f3e34a8e.js"];
export const stylesheets = ["_app/immutable/assets/0.1fb7c258.css"];
export const fonts = ["_app/immutable/assets/jetbrains-mono-cyrillic-wght-normal.8afc4622.woff2","_app/immutable/assets/jetbrains-mono-greek-wght-normal.0acb1031.woff2","_app/immutable/assets/jetbrains-mono-vietnamese-wght-normal.a9c8d3cc.woff2","_app/immutable/assets/jetbrains-mono-latin-ext-wght-normal.c35e6e07.woff2","_app/immutable/assets/jetbrains-mono-latin-wght-normal.d8188600.woff2"];
