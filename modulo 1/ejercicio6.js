const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split('');
    console. log(` Numero de palabras: ${palabras.length}` );
}); 