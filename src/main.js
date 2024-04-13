import {  O2WasmPrimeFactors, O3WasmPrimeFactors } from './wasmPrimeFactors.js';
import jsPrimeFactors from './jsPrimeFactors.js';

document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const methodSelector = document.getElementById('methodSelector');

    calculateButton.addEventListener('click', async () => {
        const input = document.getElementById("input").valueAsNumber;
        const method = methodSelector.value;
        let result;

        switch (method) {
            case 'CO2':
                result = await O2WasmPrimeFactors(input);
                break;
            case 'CO3':
                result = await O3WasmPrimeFactors(input);
                break;
            case 'js':
                result = await jsPrimeFactors(input);
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
