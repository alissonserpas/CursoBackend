const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una palabra: ', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numVocales = vocales ? vocales.length : 0;
    console.log(`El número de vocales en la palabra es: ${numVocales}`);
    rl.close();
});