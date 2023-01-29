// Array = lista de coisas e coleções = Objeto
// Boa prática de programação usam listas unitárias por elemento inicial - Nomes de alunos com nomes de alunos, notas com notas e cia
// Array são indexados por elemento, ao invez de por letra como strings

//               01234567
// const nome = 'Valdemar';
// console.log(nome[0]);


//                  0         1         2
const alunos = ['Valdemar', 'Pedro', "Fernanda"];

console.log(typeof alunos);
console.log(alunos instanceof Array)

// alunos.push('Marcos');
// alunos.push('Eduardo');

// console.log(alunos.slice(0, 6)); // Fatiar array


// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);

// alunos[0] = 'Livino'; // Modificando elemento existe no array
// alunos[3] = 'Maria'; //Adicionando específico elementos na array

// alunos[alunos.length] = 'Marcos'; // Adicionando elementos no fim do array
// alunos[alunos.length] = 'Eduardo';
// alunos[alunos.length] = 'Mariana';

// alunos.push('Marcos'); Adicionando elementos no fim do array (Avançado)
// alunos.push('Lucas'); 

// alunos.unshift('Fernando'); // Adicionando elementos no começo do array

// const removido = alunos.pop(); // Removendo elemento do final do array e fixando em uma variável
// const remov = alunos.shift(); // Removendo elemento do começo do array e fixando em uma variável

// delete alunos[1]; deletar elemento na array, deixando indice vazio

// console.log(alunos[50]);

// console.log(alunos);