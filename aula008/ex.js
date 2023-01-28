const nome = 'Valdemar';
const sobrenome = 'Santana';
const idade = 34;
const peso = 150;
const alturaEmM = 1.80;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);


