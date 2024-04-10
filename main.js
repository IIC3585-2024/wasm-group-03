const Module = require("./func/primeFactors");

function getPrimeFactors(n) {
  result = Module._primeFactors(n);
  return result;
}

console.log(getPrimeFactors(10));