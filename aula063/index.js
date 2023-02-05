// Construtora -> molde (Classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // Prioridade na ativação
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;;
};

// Instância
const pessoa1 = new Pessoa('Valdemar', 'S.');
const pessoa2 = new Pessoa('Pedro', 'S.');
const data = new Date();

console.dir(pessoa1);
console.dir(data);
