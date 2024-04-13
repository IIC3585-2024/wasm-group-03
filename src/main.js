import {  O2WasmPrimeFactors, O3WasmPrimeFactors } from './wasmPrimeFactors.js';
import jsPrimeFactors from './jsPrimeFactors.js';

document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const methodSelector = document.getElementById('methodSelector');

    calculateButton.addEventListener('click', async () => {
        const input = document.getElementById("input").valueAsNumber;
        let start = performance.now();
        let resultCO2 = await O2WasmPrimeFactors(input);
        const CO2Time = performance.now() - start;

        start = performance.now();
        let resultCO3 = await O3WasmPrimeFactors(input);
        const CO3Time = performance.now() - start;

        start = performance.now();
        let resultJs = await jsPrimeFactors(input);
        const JsTime = performance.now() - start;

        displayResults("resultCO2", resultCO2);
        displayResults("resultCO3", resultCO3);
        displayResults("resultJs", resultJs);

        displayTime("timeCO2", CO2Time);
        displayTime("timeCO3", CO3Time);
        displayTime("timeJs", JsTime);
    });
});


function displayResults(resutlId, factors) {
  document.getElementById(resutlId).innerText = "El resultado es: " + factors.join(", ");
}

function displayTime(timeId, time) {
  document.getElementById(timeId).innerText = "El tiempo de ejecución es: " + time + " ms";
}
