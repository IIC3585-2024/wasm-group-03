emcc src/primeFactors.c -O2 -s EXPORTED_FUNCTIONS=_primeFactors,_free -s EXPORTED_RUNTIME_METHODS=cwrap -s EXPORT_ES6=1 -o wasm/O2primeFactors.js
