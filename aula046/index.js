// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
  
  const sobrenome = 'Santana';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;  
  }
  function falaNome() {
    console.log(criaNome('Valdemar'));
  }

  falaNome();
  console.log(idade, peso, altura);
  
})(34, 150, 1.80);



