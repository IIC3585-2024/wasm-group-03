Module.onRuntimeInitialized = function() {
  function primeFactors(n) {
      return Module.ccall('primeFactors', 'number', ['number'], [n]);
  }

  function calculate() {
      let input = document.getElementById("input").valueAsNumber;
      let arrayPointer = primeFactors(input);
      let result = [];
      let i = 0;
      while (Module.HEAP32[arrayPointer >> 2] != 0) {
          result.push(Module.HEAP32[arrayPointer >> 2]);
          arrayPointer += 4;
          i++;
      }
      Module._free(arrayPointer);
      console.log(result);
      document.getElementById("result").innerText = "El resultado es: " + result;
  }

  // Exporta la función calculate para que sea accesible desde el HTML
  window.calculate = calculate;
};
