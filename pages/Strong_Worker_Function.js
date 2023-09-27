function Strong_Worker(mainFunction, codeToRun, callback) {
  const workerCode = `
    function runFunctionInWorker() {
      ${mainFunction + 'return ' + codeToRun}
    }

    self.addEventListener('message', function (event) {
      const result = runFunctionInWorker();
      self.postMessage(result);

      // Send a termination message back to the main thread
      self.postMessage('terminate');
    });
  `;

  const blob = new Blob([workerCode], { type: 'application/javascript' });
  const worker = new Worker(URL.createObjectURL(blob));

  worker.onmessage = function (event) {
    // Check if it's a termination message
    if (event.data === 'terminate') {
      // Terminate the worker when it sends the termination message
      worker.terminate();
      return;
    }

    const result = event.data;
    eval(callback);
  };

  worker.postMessage(null);

  return worker;
}

function exampleFunction(a, b) {
  return a + b;
}

Strong_Worker(exampleFunction, 'exampleFunction(3,4)', 'console.log(result)');
