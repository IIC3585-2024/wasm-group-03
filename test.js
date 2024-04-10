import { calcular } from "./calcular.js";

const n = 100;
const resultado = calcular(n).then(resultado => console.log("Resultado:", resultado));