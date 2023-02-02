function retornaFuncao(nome) {
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao('Valdemar');
const funcao2 = retornaFuncao('Santana');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
