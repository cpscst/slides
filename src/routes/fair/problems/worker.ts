/* eslint-disable no-restricted-globals */

import type { Problem, WorkerMessage } from '$lib/types';

self.onmessage = function (message: { data: { problem: Problem; code: string } }) {
	const { data } = message;
	const { problem, code } = data;
	let func: any;
	(function () {
		func = eval(`${code};
    ${problem.testFn}`);
	})();
	let sendMessage: WorkerMessage;
	for (let i = 0; i < problem.ret.tests.length; i++) {
		const result = func(...problem.args.map((arg) => arg.tests[i]));
		if (result !== problem.ret.tests[i]) {
			sendMessage = {
				tag: 'failure',
				reason: {
					tag: 'wrongAnswer',
					testCase: i,
					expected: problem.ret.tests[i],
					actual: result
				}
			};
			postMessage(sendMessage);
			return;
		}
	}
	sendMessage = {
		tag: 'success'
	};
	postMessage(sendMessage);
	return;
};
