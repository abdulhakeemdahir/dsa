function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(9));

function timer(func, ...args) {
  const start = performance.now();
  const result = func(...args);
  const end = performance.now();
  console.log(`Execution time: ${end - start} milliseconds`);
  return result;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(10000000);
let t2 = performance.now();
console.log(`Elapsed time: ${(t2 - t1) / 1000}`);

let t3 = performance.now();
addUpTo2(10000000);
let t4 = performance.now();
console.log(`Elapsed time: ${(t4 - t3) / 1000}`);
