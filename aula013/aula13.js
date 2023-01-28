//               01234567
let umaString = 'O rato roeu a roupa do rei de roma.';

/*
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
*/
 
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('e', 7));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/));
console.log(umaString.length);
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5));
console.log(umaString.substring(umaString.length -5));


console.log(umaString.split(' ', 3));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
