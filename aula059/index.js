// Revisando Objetos

/* const pessoa = {
  nome: 'Valdemar',
  sobrenome: 'Santana'
};

const chave = 'nome';
console.log(pessoa[chave]); */

/* const pessoa2 = {
  nome: 'Fernanda',
  sobrenome: 'Santana'
} */


/* const pessoa1 = new Object();
pessoa1.nome = 'Valdemar';
pessoa1.sobrenome = 'Santana';
pessoa1.idade = 35;
pessoa1.falarNome = function() {
  return(`${this.nome} está falando seu nome`)
};
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}
 */

// Factory Function - Constructor Function - Classes

/* function criaPessoa(nome, sobrenome) {
  return {
    nome, 
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Valdemar', 'Santana');
console.log(p1.nomeCompleto()); */

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
  
  // return this; <- Não precisa
}

// new {Cria objeto vazio} <- atrelando o this ao objeto -> retornando o this
const p1 = new Pessoa('Valdemar', 'Santana');
p1.nome = 'Livino';
const p2 = new Pessoa('Pedro', 'Santana');

console.log(p1);
console.log(p2);

