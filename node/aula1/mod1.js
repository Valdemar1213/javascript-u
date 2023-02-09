/* const nome = 'Valdemar';
const sobrenome = 'Santana';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquercoisa = 'O que eu quiser exportar.';
 */

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = 'Valdemar';
const sobrenome = 'Santana';

module.exports = {
  nome, sobrenome, Pessoa
};
