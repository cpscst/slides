import type { WorkerMessage, Problem, ResultFailureState, ResultSuccessState } from '$lib/types';
import Worker from './worker.ts?worker';

export const problems: Problem[] = [
	{
		name: 'Add Numbers',
		problem: 'Make a function called `add` that takes two numbers and returns their sum.',
		testFn: 'add',
		args: [
			{
				tag: 'number',
				tests: [1, 14]
			},
			{
				tag: 'number',
				tests: [2, 23]
			}
		],
		ret: {
			tag: 'number',
			tests: [3, 37]
		}
	},
	{
		name: 'Sum Array',
		problem:
			'Make a function called `sumArray` that takes an array of numbers and returns their sum.',
		testFn: 'sumArray',
		args: [
			{
				tag: 'numberArray',
				tests: [
					[1, 2, 3],
					[3, 4],
					[5, 6, 7, 89]
				],
				name: 'a'
			}
		],
		ret: {
			tag: 'number',
			tests: [6, 7, 107]
		}
	},
	{
		name: 'Find the Maximum',
		problem:
			'Create a function called `findMax` that takes an array of numbers and returns the largest number in the array.',
		testFn: 'findMax',
		args: [
			{
				tag: 'numberArray',
				tests: [
					[1, 2, 3, 4],
					[10, 20, 30],
					[-5, 0, 5, 10]
				],
				name: 'arr'
			}
		],
		ret: {
			tag: 'number',
			tests: [4, 30, 10]
		}
	},
	{
		name: 'Calculate Factorial',
		problem:
			'Implement a function called `calculateFactorial` that calculates the factorial of a given non-negative integer `n`.',
		testFn: 'calculateFactorial',
		args: [
			{
				tag: 'number',
				tests: [0, 1, 5, 10],
				name: 'n'
			}
		],
		ret: {
			tag: 'number',
			tests: [1, 1, 120, 3628800]
		}
	},
	{
		name: 'Reverse a String',
		problem:
			'Write a function called `reverseString` that takes a string as input and returns the reverse of that string.',
		testFn: 'reverseString',
		args: [
			{
				tag: 'string',
				tests: ['hello', 'world', '12345'],
				name: 'str'
			}
		],
		ret: {
			tag: 'string',
			tests: ['olleh', 'dlrow', '54321']
		}
	},
	{
		name: 'Fibonacci Sequence',
		problem:
			'Create a function called `generateFibonacci` that generates the first `n` numbers of the Fibonacci sequence and returns them as an array.',
		testFn: 'generateFibonacci',
		args: [
			{
				tag: 'number',
				tests: [1, 5, 10],
				name: 'n'
			}
		],
		ret: {
			tag: 'numberArray',
			tests: [[0], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]]
		}
	},
	{
		name: 'Count Vowels',
		problem:
			'Write a function called `countVowels` that counts the number of vowels (a, e, i, o, u) in a given string.',
		testFn: 'countVowels',
		args: [
			{
				tag: 'string',
				tests: ['hello', 'world', 'programming'],
				name: 'str'
			}
		],
		ret: {
			tag: 'number',
			tests: [2, 1, 3]
		}
	},
	{
		name: 'Validate Email Address',
		problem:
			'Implement a function called `validateEmail` that checks whether a given string is a valid email address according to a simple pattern.',
		testFn: 'validateEmail',
		args: [
			{
				tag: 'string',
				tests: ['test@example.com', 'invalid-email', 'another@example', '12345'],
				name: 'email'
			}
		],
		ret: {
			tag: 'boolean',
			tests: [true, false, false, false]
		}
	},
	{
		name: 'Palindrome Check',
		problem:
			'Implement a function called `isPalindrome` that checks if a given string is a palindrome (reads the same forwards and backwards).',
		testFn: 'isPalindrome',
		args: [
			{
				tag: 'string',
				tests: ['racecar', 'hello', 'level', '12321'],
				name: 'str'
			}
		],
		ret: {
			tag: 'boolean',
			tests: [true, false, true, true]
		}
	},
	{
		name: 'Prime Number Check',
		problem:
			'Write a function called `isPrime` that checks if a given positive integer is a prime number.',
		testFn: 'isPrime',
		args: [
			{
				tag: 'number',
				tests: [1, 2, 7, 12],
				name: 'n'
			}
		],
		ret: {
			tag: 'boolean',
			tests: [false, true, true, false]
		}
	},
	{
		name: 'Subarray with Maximum Sum',
		problem:
			'Create a function called `findMaxSubarray` that takes an array of integers and finds the contiguous subarray with the maximum sum.',
		testFn: 'findMaxSubarray',
		args: [
			{
				tag: 'numberArray',
				tests: [
					[-2, 1, -3, 4, -1, 2, 1, -5, 4],
					[1, 2, 3, 4, 5],
					[-1, -2, -3, -4, -5]
				],
				name: 'arr'
			}
		],
		ret: {
			tag: 'numberArray',
			tests: [[4, -1, 2, 1], [1, 2, 3, 4, 5], [-1]]
		}
	}
];
function argName(index: number): string {
	// do abcdefghijklmnopqrstuvwxyz
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let name = '';
	let i = index;
	while (i >= 0) {
		name = alphabet[i % alphabet.length] + name;
		i = Math.floor(i / alphabet.length) - 1;
	}
	return name;
}
export function getStartingCode(problem: Problem): string {
	const argsString = problem.args.map((arg, index) => arg.name ?? argName(index)).join(', ');
	return /*javascript*/ `function ${problem.testFn}(${argsString}) {
	// your code here
}`;
}

export const TIMEOUT = 3000;
export async function testProblem(
	problem: Problem,
	code: string
): Promise<ResultFailureState | ResultSuccessState> {
	const worker = new Worker();

	worker.postMessage({
		problem,
		code
	});

	const ret = await new Promise<ResultFailureState | ResultSuccessState>((resolve) => {
		const startTime = Date.now();
		const listen = (event_1: MessageEvent<WorkerMessage>) => {
			if (event_1.data.tag === 'success') {
				resolve({
					tag: 'success',
					time: Date.now() - startTime
				});
			} else if (event_1.data.tag === 'failure') {
				resolve({
					tag: 'failure',
					reason: event_1.data.reason
				});
			}
		};
		worker.addEventListener('message', listen);
		worker.onerror = (event) => {
			worker.removeEventListener('message', listen);
			resolve({
				tag: 'failure',
				reason: {
					tag: 'error',
					message: event.message
				}
			});
			worker.terminate();
			return true;
		};

		setTimeout(() => {
			worker.removeEventListener('message', listen);
			resolve({
				tag: 'failure',
				reason: {
					tag: 'timeout'
				}
			});
		}, TIMEOUT);
	});
	worker.terminate();
	return ret;
}

// function newTestScriptString(problem: Problem): string {
// 	return /*javascript*/ `
// 		${problem.testFn}
// 		(function () {
// 			let testCases = ${JSON.stringify(problem.testCases)};
// 			for (let i = 0; i < testCases.length; i++) {
// 				let testCase = testCases[i];
// 				let result = window._TEST(...testCase.input.map((arg) => arg.value));
// 				if (result !== testCase.output.value) {
// 					window.top.postMessage({
// 						tag: 'failure',
// 						reason: {
// 							tag: 'wrongAnswer',
// 							testCase: i,
// 							expected: testCase.output.value,
// 							actual: result,
// 						},
// 					}, '*');
// 					return;
// 				}
// 			}
// 			window.top.postMessage({
// 				tag: 'success',
// 			}, '*');
// 			return;
// 		})();
// 		`;
// }

// export async function testProblem(
// 	problem: Problem,
// 	code: string
// ): Promise<ResultFailureState | ResultSuccessState> {
// 	const errorScript = document.createElement('script');
// 	errorScript.textContent = /*javascript*/ `
// 		window.onerror = function (event) {
// 			window.top.postMessage({
// 				tag: 'failure',
// 				reason: {
// 					tag: 'error',
// 					message: event,
// 				},
// 			}, '*');
// 			return true;
// 		};`;
// 	const codeScript = document.createElement('script');
// 	codeScript.textContent = code;
// 	const testScript = document.createElement('script');
// 	testScript.textContent = newTestScriptString(problem);

// 	const iframeBody = document.createElement('body');
// 	iframeBody.appendChild(errorScript);
// 	iframeBody.appendChild(codeScript);
// 	iframeBody.appendChild(testScript);

// 	const iframe = document.createElement('iframe');
// 	iframe.style.display = 'none';
// 	iframe.setAttribute('sandbox', 'allow-scripts');
// 	iframe.srcdoc = iframeBody.outerHTML;
// 	document.body.appendChild(iframe);

// 	const result_2 = await new Promise<ResultFailureState | ResultSuccessState>((resolve) => {
// 		const startTime = Date.now();
// 		const listen = (event_1: MessageEvent<IframeMessage>) => {
// 			if (event_1.data.tag === 'success') {
// 				resolve({
// 					tag: 'success',
// 					time: Date.now() - startTime
// 				});
// 			} else if (event_1.data.tag === 'failure') {
// 				resolve({
// 					tag: 'failure',
// 					reason: event_1.data.reason
// 				});
// 			}
// 		};
// 		window.addEventListener('message', listen);
// 		setTimeout(() => {
// 			window.removeEventListener('message', listen);
// 			resolve({
// 				tag: 'failure',
// 				reason: {
// 					tag: 'timeout'
// 				}
// 			});
// 		}, TIMEOUT);
// 	});
// 	iframe.remove();
// 	return result_2;
// }
