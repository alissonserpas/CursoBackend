const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una palabra: ', (palabra) =>{
    const palabraInvertida = palabra.split('').reverse().join('');
    if(palabra === palabraInvertida){
    console. log(`${palabra} es un palíndromo`)
    } else{
    console.log(`${palabra} no es un palindromo` )
    }
});