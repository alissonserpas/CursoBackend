const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una cadena: ', (cadena) => {
    const cadenainvertida = cadena.split('').reverse().join('');
    console.log( `Cadena invertida: ${cadenainvertida}` );
});