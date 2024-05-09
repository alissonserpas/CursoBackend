const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Ingrese su nombre', (nombre)=>{
    r1.question('Ingrese su aperllido', (apellido)=>{
        console.log(`hola mi nombre es ${nombre} ${apellido}`)
    })
});