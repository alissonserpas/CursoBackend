/*Determinar si un numero es par o es impar.  */


const readline = require('readline');

function ejercicio4() {
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question("Ingrese el número a evaluar: ", (num) => {
        if (parseFloat(num) % 2 === 0) {
            console.log("El número es par");
        } else {
            console.log("El número no es par");
        }

        r1.close(); 
    });
}

module.exports = ejercicio4;
