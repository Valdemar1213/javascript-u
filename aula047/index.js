// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome, 
    sobrenome,
    
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    
    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} esta ${assunto}.`;
    },
    
    altura: altura,
    peso: peso,
    
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Valdemar', 'Santana', 1.80, 140);
p1.nomeCompleto = 'Pedro Rodrigues Santana';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());



/* const p2 = criaPessoa('Pedro', 'Santana', 1.78, 108);
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc());
 */
// Tag GETTER (get) faz com que método seja visto como atributo dentro de uma função.
// função construtora (constructor function)