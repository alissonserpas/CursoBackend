/* DESAROLLE UN ALGORITMO QUE LE PERMITA MOSTRAR LA HORA ACTUAL EN 
UN MENSAJE*/


let fechaActual = new Date();

let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

console.log(`La hora actual es: ${hora}:${minutos}:${segundos}`);
