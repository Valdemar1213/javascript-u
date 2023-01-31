/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix
console.log(data.toString());
*/

// const data = new Date(2019, 3); // Formato: ano, mês, dia, hora, minuto, segundo, milésimos - Mês vão de 0 - 11


const data = new Date('2019-04-20 20:15:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0- Dom 6- Sábado
console.log(data.toString());
console.log(Date.now());