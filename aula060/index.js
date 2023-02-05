// defineProperty (Uma) - defineProperties (Varias)
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
    enumerable: true, // true mostra a chave
    value: estoque, // Valor da chave
    writable: false, // Se pode alterar ou não valor
    configurable: false // Pode reconfigura a chave ou não
  });

   Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    }, 
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
