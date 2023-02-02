// Arguments que sustenta todos os argumentos enviados - apenas com funções criadas com a palavra function
/* function funcao(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);
 */

/* function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome,idade);
}
let obj = { nome: 'Valdemar', sobrenome: 'Santana', idade: 34 }
funcao(obj); */

const conta = function(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;
  }

  console.log(acumulador)
}; 
conta('-', 0, 20, 30, 40, 50);
