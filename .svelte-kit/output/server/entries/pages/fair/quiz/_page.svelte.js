import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Page } from "../../../../chunks/Page.js";
import { w as writable } from "../../../../chunks/index2.js";
import { T as Title } from "../../../../chunks/Title.js";
/* empty css                                                     *//* empty css                                                           */const questions = [
  {
    question: "Tabs or spaces?",
    answers: ["Tabs", "Spaces"]
  },
  {
    question: "Dark theme or light theme?",
    answers: ["Dark", "Light"]
  },
  {
    question: "Is AI good or bad for society?",
    answers: ["Good", "Bad"]
  },
  {
    question: "What is the best OS?",
    answers: ["Windows", "MacOS", "Linux"]
  },
  {
    question: "What is best editor?",
    answers: [
      "VSCode",
      "Vim",
      "Emacs",
      "Sublime Text",
      "Repl.it",
      "Atom",
      "Notepad++",
      "IntelliJ IDEA",
      "Eclipse",
      "NetBeans",
      "Android Studio",
      "Xcode",
      "Visual Studio",
      "PyCharm",
      "WebStorm",
      "PhpStorm",
      "RubyMine",
      "CLion",
      "GoLand",
      "Rider",
      "AppCode",
      "DataGrip",
      "ReSharper"
    ]
  },
  {
    question: "What is the best programming language?",
    answers: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Rust",
      "Go",
      "C++",
      "C#",
      "Java",
      "PHP",
      "Ruby",
      "Kotlin",
      "Swift",
      "Scala",
      "Perl",
      "Haskell",
      "Lua",
      "Erlang",
      "Clojure",
      "Groovy",
      "Dart",
      "Julia",
      "R",
      "Objective-C",
      "F#",
      "Assembly",
      "PowerShell",
      "Visual Basic",
      "Matlab",
      "Scheme",
      "Delphi",
      "Wolfram Language"
    ]
  }
];
const Question_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1jn6kuz{display:flex;flex-direction:column;align-items:left;justify-content:space-between;height:100%;width:100%;box-sizing:border-box;gap:var(--pad);padding:10vh 10vw}.buttons.svelte-1jn6kuz{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:var(--pad);width:100%}",
  map: null
};
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_answerStats;
  function emptyAnswerStats() {
    let ret = [];
    for (let question of questions) {
      let stat = [];
      for (let _ of question.answers) {
        stat.push(0);
      }
      ret.push(stat);
    }
    return ret;
  }
  const answerStats = writable(emptyAnswerStats());
  $$unsubscribe_answerStats = subscribe(answerStats, (value) => value);
  for (let _ of questions) {
  }
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
            title: "Controversial Quiz",
            subtitle: "Answer these questions to settle these coding dilemmas",
            start: "Start"
          },
          {},
          {}
        )}`}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_answerStats();
  return $$rendered;
});
export {
  Page_1 as default
};
