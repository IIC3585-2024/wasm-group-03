import Module from '../wasm/primeFactors.js';

let wasmModule;

async function loadWasmModule() {
  if (!wasmModule) {
    wasmModule = await Module();
  }
  return wasmModule;
}

export async function wasmPrimeFactors(n) {
  const instance = await loadWasmModule();
  const primeFactorsFunction = instance.cwrap('primeFactors', 'number', ['number']);
  let arrayPointer = primeFactorsFunction(n); 

  let result = [];
  let i = 0;

  while (instance.HEAP32[arrayPointer >> 2] != 0) {
    result.push(instance.HEAP32[arrayPointer >> 2]);
    arrayPointer += 4;
    i++;
  }

  instance._free(arrayPointer); 
  return result; 
}

export async function jsPrimeFactors() {
  return []; 
}
