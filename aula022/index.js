/*
FALSY
false - 0 - '' "" `` - null - undefined - NaN
*/

// console.log('Valdemar' && '' && 'Pedro');  
/*
function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'Valdemar';
console.log(vaiExecutar && falaOi());
*/

// console.log(0 || false || null || 'Valdemar' || true);
/*
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false'; // Esse
const d = false;
const e = NaN;

console.log(a || b || c || d || e);