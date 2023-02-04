// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

const pessoas = [
  { nome: 'Valdemar', idade: 34 },
  { nome: 'Pedro', idade: 37 },
  { nome: 'Genilda', idade: 58 },
  { nome: 'Fernando', idade: 59 },
  { nome: 'Fernanda', idade: 30 },
  { nome: 'Luiz', idade: 52 }
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map(function(obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice; 
  return newObj;
});
console.log(pessoas);
console.log('###########################');
console.log(comIds);
