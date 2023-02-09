/* const { nome, sobrenome, falaNome } = require('./mod1');

console.log(nome, sobrenome);
console.log(falaNome());
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
 */
/* const p1 = new Pessoa('Valdemar');
console.log(p1) */

const path = require('path');
const axios = require('axios');
const { Pessoa } =  require('./mod1');

/* axios('https://www.otaviomiranda.com.br/filex/json/pessoas.json').then(response => console.log(response.data)).catch(e => console.log(e));
 */

const p1 = new Pessoa('Valdemar');
console.log(p1);