

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5f5a10a3.js","_app/immutable/chunks/scheduler.a5e5241a.js","_app/immutable/chunks/index.b1dbd351.js","_app/immutable/chunks/stores.a8a70dcb.js","_app/immutable/chunks/singletons.ffbe0101.js","_app/immutable/chunks/index.2b2d3a1c.js","_app/immutable/chunks/paths.f3e34a8e.js"];
export const stylesheets = [];
export const fonts = [];
