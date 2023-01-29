// IEEE 754-2008

let num1 = 0.7; //Number
let num2 = 0.1; // Number

// num1 += num2 // num1 =  num1 + num2

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // Resolver problema usando cálculo
// num1 = ((num1 * 100) + (num2 * 100)) / 100;
// num1 = ((num1 * 100) + (num2 * 100)) / 100;

// num1 = Number(num1.toFixed(2)); Resolvendo com programação (melhor jeito)



console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); Transformar em string não altera valor da variável
// num1 = num1.toString(); alterando valor da variável
// console.log(num1.toString(2)); metodo binário

// console.log(num1.toFixed(2));  Fixar casas decimais

// console.log(Number.isInteger(num1)); Verificar se variável é número inteiro

// console.log(Number.isNaN(temp)); Saber se é NaN ou não
// let temp =  num1 * 'Ola';

