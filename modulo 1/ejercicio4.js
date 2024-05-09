const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.L.question('Ingresa una frase: ', (frase) => {
    rl.question('Ingrese la palabra que sea reemplazar: ' ,(palabraCambiar) =>{
    rl.question('Ingrese la palabra nueva ', (nuevapalabra) => {
        const frasemodificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevapalabra)
    console. log('Frase modificada: ', frasemodificada)
    })
})
});