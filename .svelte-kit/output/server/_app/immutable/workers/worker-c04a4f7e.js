(function() {
  "use strict";
  self.onmessage = function(message) {
    const { data } = message;
    const { problem, code } = data;
    let func;
    (function() {
      func = eval(`${code};
    ${problem.testFn}`);
    })();
    let sendMessage;
    for (let i = 0; i < problem.ret.tests.length; i++) {
      const result = func(...problem.args.map((arg) => arg.tests[i]));
      if (result !== problem.ret.tests[i]) {
        sendMessage = {
          tag: "failure",
          reason: {
            tag: "wrongAnswer",
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
      tag: "success"
    };
    postMessage(sendMessage);
    return;
  };
})();
