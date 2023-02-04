//Arrays são valor por referência
/* const nomes = ['Valdemar', 'Pedro', 'Fernanda', 'Fernando', 'Genilda'];
const novo = nomes.slice(1, -1);
console.log(novo); */

/* nomes.unshift('Fernando');
nomes.unshift('Genilda'); */

/* 
push - Adiciona no fim do array
unshift - Adiciona apartir do índice 0
shift - Apaga apartir índice 0
pop - Apaga apartir do último índice
*/

/* const novo = [...nomes]; 
nomes[2] = 'Marai';
// const removido = nomes.shift();

novo.pop();
console.log(nomes); 
console.log(novo); */


// Funciona para objetos, string, funções, números \/
/* const nomes = new Array('Eduardo', 'Maria', 'Joana'); */


// const nome = 'Valdemar Livino Santana';
const nomes = [ 'Valdemar', 'Livino', 'Santana' ];
const nome = nomes.join(' ');
console.log(nome);
