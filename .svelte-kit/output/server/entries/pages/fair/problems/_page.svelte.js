import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Page } from "../../../../chunks/Page.js";
import { T as Title } from "../../../../chunks/Title.js";
/* empty css                                                     *//* empty css                                                           */import javascript from "highlight.js/lib/languages/javascript";
import hljs from "highlight.js/lib/core";
const atomOneDark = "";
const CodeEditor_svelte_svelte_type_style_lang = "";
hljs.registerLanguage("javascript", javascript);
const problems = [
  {
    name: "Add Numbers",
    problem: "Make a function called `add` that takes two numbers and returns their sum.",
    testFn: "add",
    args: [
      {
        tag: "number",
        tests: [1, 14]
      },
      {
        tag: "number",
        tests: [2, 23]
      }
    ],
    ret: {
      tag: "number",
      tests: [3, 37]
    }
  },
  {
    name: "Sum Array",
    problem: "Make a function called `sumArray` that takes an array of numbers and returns their sum.",
    testFn: "sumArray",
    args: [
      {
        tag: "numberArray",
        tests: [
          [1, 2, 3],
          [3, 4],
          [5, 6, 7, 89]
        ],
        name: "a"
      }
    ],
    ret: {
      tag: "number",
      tests: [6, 7, 107]
    }
  },
  {
    name: "Find the Maximum",
    problem: "Create a function called `findMax` that takes an array of numbers and returns the largest number in the array.",
    testFn: "findMax",
    args: [
      {
        tag: "numberArray",
        tests: [
          [1, 2, 3, 4],
          [10, 20, 30],
          [-5, 0, 5, 10]
        ],
        name: "arr"
      }
    ],
    ret: {
      tag: "number",
      tests: [4, 30, 10]
    }
  },
  {
    name: "Calculate Factorial",
    problem: "Implement a function called `calculateFactorial` that calculates the factorial of a given non-negative integer `n`.",
    testFn: "calculateFactorial",
    args: [
      {
        tag: "number",
        tests: [0, 1, 5, 10],
        name: "n"
      }
    ],
    ret: {
      tag: "number",
      tests: [1, 1, 120, 3628800]
    }
  },
  {
    name: "Reverse a String",
    problem: "Write a function called `reverseString` that takes a string as input and returns the reverse of that string.",
    testFn: "reverseString",
    args: [
      {
        tag: "string",
        tests: ["hello", "world", "12345"],
        name: "str"
      }
    ],
    ret: {
      tag: "string",
      tests: ["olleh", "dlrow", "54321"]
    }
  },
  {
    name: "Fibonacci Sequence",
    problem: "Create a function called `generateFibonacci` that generates the first `n` numbers of the Fibonacci sequence and returns them as an array.",
    testFn: "generateFibonacci",
    args: [
      {
        tag: "number",
        tests: [1, 5, 10],
        name: "n"
      }
    ],
    ret: {
      tag: "numberArray",
      tests: [[0], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]]
    }
  },
  {
    name: "Count Vowels",
    problem: "Write a function called `countVowels` that counts the number of vowels (a, e, i, o, u) in a given string.",
    testFn: "countVowels",
    args: [
      {
        tag: "string",
        tests: ["hello", "world", "programming"],
        name: "str"
      }
    ],
    ret: {
      tag: "number",
      tests: [2, 1, 3]
    }
  },
  {
    name: "Validate Email Address",
    problem: "Implement a function called `validateEmail` that checks whether a given string is a valid email address according to a simple pattern.",
    testFn: "validateEmail",
    args: [
      {
        tag: "string",
        tests: ["test@example.com", "invalid-email", "another@example", "12345"],
        name: "email"
      }
    ],
    ret: {
      tag: "boolean",
      tests: [true, false, false, false]
    }
  },
  {
    name: "Palindrome Check",
    problem: "Implement a function called `isPalindrome` that checks if a given string is a palindrome (reads the same forwards and backwards).",
    testFn: "isPalindrome",
    args: [
      {
        tag: "string",
        tests: ["racecar", "hello", "level", "12321"],
        name: "str"
      }
    ],
    ret: {
      tag: "boolean",
      tests: [true, false, true, true]
    }
  },
  {
    name: "Prime Number Check",
    problem: "Write a function called `isPrime` that checks if a given positive integer is a prime number.",
    testFn: "isPrime",
    args: [
      {
        tag: "number",
        tests: [1, 2, 7, 12],
        name: "n"
      }
    ],
    ret: {
      tag: "boolean",
      tests: [false, true, true, false]
    }
  },
  {
    name: "Subarray with Maximum Sum",
    problem: "Create a function called `findMaxSubarray` that takes an array of integers and finds the contiguous subarray with the maximum sum.",
    testFn: "findMaxSubarray",
    args: [
      {
        tag: "numberArray",
        tests: [
          [-2, 1, -3, 4, -1, 2, 1, -5, 4],
          [1, 2, 3, 4, 5],
          [-1, -2, -3, -4, -5]
        ],
        name: "arr"
      }
    ],
    ret: {
      tag: "numberArray",
      tests: [[4, -1, 2, 1], [1, 2, 3, 4, 5], [-1]]
    }
  }
];
function argName(index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let name = "";
  let i = index;
  while (i >= 0) {
    name = alphabet[i % alphabet.length] + name;
    i = Math.floor(i / alphabet.length) - 1;
  }
  return name;
}
function getStartingCode(problem) {
  const argsString = problem.args.map((arg, index) => arg.name ?? argName(index)).join(", ");
  return (
    /*javascript*/
    `function ${problem.testFn}(${argsString}) {
	// your code here
}`
  );
}
const Problem_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1gdob3y.svelte-1gdob3y{display:flex;flex-direction:row;align-items:center;gap:var(--pad);height:100%;width:100%;box-sizing:border-box;position:relative}.problemListScroll.svelte-1gdob3y.svelte-1gdob3y{height:100%;overflow:scroll;position:relative;width:15rem;height:100%}.problemList.svelte-1gdob3y.svelte-1gdob3y{position:absolute;display:flex;flex-direction:column;height:100%;gap:var(--pad);box-sizing:border-box;flex-shrink:0;flex-grow:0;flex-basis:15rem;box-sizing:border-box}.problemList.svelte-1gdob3y button.svelte-1gdob3y{width:100%;text-align:left}.problemList.svelte-1gdob3y button.selected.svelte-1gdob3y{background-color:var(--back-3);color:var(--bg)}.problemTab.svelte-1gdob3y.svelte-1gdob3y{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:var(--pad);padding:var(--pad);border-radius:var(--rad);background-color:var(--back-1);color:var(--text)}.problemTab.svelte-1gdob3y.svelte-1gdob3y:hover{background-color:var(--back-2)}.problemTab.svelte-1gdob3y.svelte-1gdob3y:active{background-color:var(--back-3)}",
  map: null
};
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  problems.map((problem) => getStartingCode(problem));
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Page, "Page").$$render($$result, {}, {}, {
      default: () => {
        return `${`${validate_component(Title, "Title").$$render(
          $$result,
          {
            title: "Fun Coding Problems",
            subtitle: "Solve these fun coding problems to test your skills",
            start: "Start"
          },
          {},
          {}
        )}`}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page_1 as default
};
