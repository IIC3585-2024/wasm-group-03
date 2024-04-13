# WASM: E2 2024-1

## Integrantes
- Benjamin Gonzalez
- Alejandro Plaza
- Juan Pablo Vergara Lobos

## Para insalar WASM
```
# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes .emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh
```

## Para compilar:
```
emcc src/primeFactors.c -O2 -s EXPORTED_FUNCTIONS=_primeFactors,_free -s EXPORTED_RUNTIME_METHODS=cwrap -s EXPORT_ES6=1 -o wasm/primeFactors.js
```

## Para correrlo:
Correr el html con Live Server. En caso de no querer aproximarse con esto tambien se puede correr
```
python3 -m http.server
```