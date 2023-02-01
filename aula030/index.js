const pessoa = {
    nome: 'Valdemar',
    sobrenome: 'Santana',
    idade: 34,
    endereco: {
        rua: 'Av. Aníbal Ribeiro Varejão',
        numero: 1167
    }
};

// Atribuição via Desestruturação de Objetos
// const { endereco: { rua: r, numero }, endereco } =  pessoa;
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);