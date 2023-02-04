// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
/* const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; */

/* function callbackFilter(valor) {
  return valor > 10;
} */

/* const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados); */


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra 'a'

const pessoas = [
  { nome: 'Valdemar', idade: 34 },
  { nome: 'Pedro', idade: 37 },
  { nome: 'Genilda', idade: 58 },
  { nome: 'Fernando', idade: 59 },
  { nome: 'Fernanda', idade: 30 },
  { nome: 'Luiz', idade: 52 }
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomeTerminaComA);
