// Calculadora de IMC - JavaScript

const peso = Number(prompt("Digite seu peso em kg:"));
const altura = Number(prompt("Digite sua altura em metros:"));

const imc = peso / (altura ** 2);

let classificacao;

if (imc < 18.5) {
    classificacao = "abaixo do peso";
} else if (imc < 25) {
    classificacao = "normal";
} else if (imc < 30) {
    classificacao = "sobrepeso";
} else {
    classificacao = "obesidade";
}

console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
