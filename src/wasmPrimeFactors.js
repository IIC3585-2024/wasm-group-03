import O2Module from '../wasm/O2primeFactors.js';
import O3Module from '../wasm/O3primeFactors.js';

let wasmModule;

async function loadWasmModule(Module) {
  if (!wasmModule) {
    wasmModule = await Module();
  }
  return wasmModule;
}

async function loadO2WasmModule() {
  return loadWasmModule(O2Module);
}

async function loadO3WasmModule() {
  return loadWasmModule(O3Module);
}

async function wasmPrimeFactors(n, loadWasmModuleFunction) {
  const instance = await loadWasmModuleFunction();
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

export async function O2WasmPrimeFactors(n) {
  return wasmPrimeFactors(n, loadO2WasmModule);
}

export async function O3WasmPrimeFactors(n) {
  return wasmPrimeFactors(n, loadO3WasmModule);
}
