const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//ejercicio 10
rl.question('Ingresa una frase: ', (frase) => {
    const palabras = frase.split(' ');
    const fraseCapitalizada = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
    console.log(`La frase con la primera letra de cada palabra capitalizada es: ${fraseCapitalizada}`);
    rl.close();
});