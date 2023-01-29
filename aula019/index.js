/*
Primitivos (imutáveis) - String, Number, Boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - arrays, object, function - Valores passados por referência
*/

const a = {
    nome: 'Valdemar',
    sobrenome: 'Santana'
};
const b = {...a};

a.nome = 'Pedro';
console.log(a);
console.log(b);