import {  O2WasmPrimeFactors, O3WasmPrimeFactors } from './wasmPrimeFactors.js';
import jsPrimeFactors from './jsPrimeFactors.js';

document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const methodSelector = document.getElementById('methodSelector');

    calculateButton.addEventListener('click', async () => {
        const input = document.getElementById("input").valueAsNumber;
        let resultCO2 = await O2WasmPrimeFactors(input);
        let resultCO3 = await O3WasmPrimeFactors(input);
        let resultJs = await jsPrimeFactors(input);
        displayResults("resultCO2", resultCO2);
        displayResults("resultCO3", resultCO3);
        displayResults("resultJs", resultJs);
    });
});


function displayResults(resutlId, factors) {
  document.getElementById(resutlId).innerText = "El resultado es: " + factors.join(", ");
}
