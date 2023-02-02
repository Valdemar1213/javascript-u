// Declaração de função ((Function Hoisting)
function falaOi() {
    console.log('Oi');
}
falaOi();

// First-class objects (Objeto de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.')
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando ...');
    }
};
obj.falar();
