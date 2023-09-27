function concatenateArrays(arr) {
  const result = arr.reduce((acc, curr) => acc.concat(curr), []);
  return result;
}

onmessage = function(e) {
  const arr = e.data;
  const result = concatenateArrays(arr);
  postMessage(result);
}
