export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7b1d56e3.js","app":"_app/immutable/entry/app.9244f2c3.js","imports":["_app/immutable/entry/start.7b1d56e3.js","_app/immutable/chunks/scheduler.a5e5241a.js","_app/immutable/chunks/singletons.ffbe0101.js","_app/immutable/chunks/index.2b2d3a1c.js","_app/immutable/chunks/paths.f3e34a8e.js","_app/immutable/entry/app.9244f2c3.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.a5e5241a.js","_app/immutable/chunks/index.b1dbd351.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
