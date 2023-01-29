/* Criação de objetos com elementos

const pessoa1 = {
    nome: 'Valdemar',
    sobrenome: 'Santana',
    idade: 34
};

const pessoa2 = {
    nome: 'Pedro',
    sobrenome: 'Santana',
    idade: 37
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

/* Funçtion de maneira simples e um pouco mais avançada
//                   Parâmetros
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
//                          Argumento
const pessoa1 = criaPessoa('Valdemar', 'Santana', 34);
const pessoa2 = criaPessoa('Pedro', 'Santana', 37);
const pessoa3 = criaPessoa('Fernando', 'Santana', 59);
const pessoa4 = criaPessoa('Fernanda', 'Santana', 30);
const pessoa5 = criaPessoa('Genilda', 'Santana', 58);

console.log(pessoa1.nome, pessoa2.nome);
*/

const pessoa1 = {
    nome: 'Valdemar',
    sobrenome: 'Santana',
    idade: 34,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;    
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();