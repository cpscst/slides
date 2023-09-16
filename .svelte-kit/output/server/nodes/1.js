

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.786d40d3.js","_app/immutable/chunks/scheduler.a5e5241a.js","_app/immutable/chunks/index.b1dbd351.js","_app/immutable/chunks/stores.c6a2a5e0.js","_app/immutable/chunks/singletons.84a07b72.js","_app/immutable/chunks/index.2b2d3a1c.js","_app/immutable/chunks/paths.90bdf6c5.js"];
export const stylesheets = [];
export const fonts = [];
