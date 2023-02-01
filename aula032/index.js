// for in -> Lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Valdemar',
    sobrenome: 'Santana',
    idade: 34
};

/* console.log(pessoa.nome);
console.log(pessoa['nome']); */

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

/* for (let i in frutas) {
    console.log(frutas[i]);
} */

/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}  */