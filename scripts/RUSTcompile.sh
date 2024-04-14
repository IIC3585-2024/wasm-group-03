rustc --target=wasm32-unknown-emscripten -O src/primeFactors.rs -o src/primeFactors.bc
emcc primeFactors.bc -O2 -s EXPORTED_FUNCTIONS='["_prime_factors", "_free"]' -s EXPORTED_RUNTIME_METHODS=cwrap -s EXPORT_ES6=1 -o primeFactors.js
