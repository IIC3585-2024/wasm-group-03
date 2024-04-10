async function calcular(n) {
    await fetch('./auxiliar.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes))
    .then(results => {
        const exports = results.instance.exports;
        const resultado = exports.primeFactors(n);
        console.log("Resultado:", resultado);
        return resultado;
    })
    .catch(console.error);
}

export { calcular };