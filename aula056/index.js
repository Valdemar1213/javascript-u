// Reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/* const total = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0); */

/* const total = numeros.reduce(function(acumulador, valor, indice, array) {
  if(valor % 2 !== 0) acumulador.push(valor);
  return acumulador;
}, []); */

const total = numeros.reduce(function(acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, []);

// console.log(total);


const pessoas = [
  { nome: 'Valdemar', idade: 34 },
  { nome: 'Pedro', idade: 37 },
  { nome: 'Genilda', idade: 58 },
  { nome: 'Fernando', idade: 59 },
  { nome: 'Fernanda', idade: 30 },
  { nome: 'Luiz', idade: 52 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);

