import { wasmPrimeFactors, jsPrimeFactors } from './primeFactors.js';

document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const methodSelector = document.getElementById('methodSelector');

    calculateButton.addEventListener('click', async () => {
        const input = document.getElementById("input").valueAsNumber;
        const method = methodSelector.value;
        let result;

        switch (method) {
            case 'wasm':
                result = await wasmPrimeFactors(input);
                break;
            case 'js':
                result = jsPrimeFactors(input);
                break;
            default:
                console.error('Metodo invalido.');
                return;
        }

        displayResults(result);
    });
});


function displayResults(factors) {
  document.getElementById("result").innerText = "El resultado es: " + factors.join(", ");
}
