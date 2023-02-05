/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
*/

/* Já visto 
Object.keys (Retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (Define varias propriedades)
Object.defineProperty (Define uma propriedade)
*/


/* const caneca = Object.assign({}, produto, { material: 'porcelana' }); */

/* const caneca = { 
  ...produto ,
  material: 'porcelana'
}; */

/* caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca); */

/* Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa'
}) */
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

const produto = { nome: 'Produto', preco: 1.8, material: 'procelana' };

for(let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

/* console.log(Object.values(produto));
console.log(Object.entries(produto)); */
