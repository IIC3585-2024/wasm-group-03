GOOS=js GOARCH=wasm go build -o GOprimeFactors.wasm primeFactors.go
emcc GOprimeFactors.wasm -o GOprimeFactors.js
