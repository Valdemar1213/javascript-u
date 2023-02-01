const pessoa = {
    nome: 'Valdemar',
    sobrenome: 'Santana'
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

/* const nome = 'Valdemar';
const nomes = ['Valdemar', 'Pedro', 'Fernanda']; */

/* for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
}); */

/* for (let i in nome) {
    console.log(nome[i]);
} */

/* for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
} */