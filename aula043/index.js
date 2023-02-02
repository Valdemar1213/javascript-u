const nome = 'Valdemar';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Santana';
  falaNome();
}

usaFalaNome();
