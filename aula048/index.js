// Função contrutora retorna objetos
// Função fábrica -> objetos
// Construtora -> inicia-se sempre com primeira letra maiúscula -> (new Pessoa) <- Exemplo

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function() {};
  
  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Valdemar', 'Santana');
const p2 = new Pessoa('Pedro', 'Santana');
console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
p2.metodo();
