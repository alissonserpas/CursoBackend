/*Calcular el mayor de 3 números ingresados por el usuario. */



    
const readline = require('readline');

function ejercicio2() {
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question("Ingrese el primer número: ", (numero1) => {
        r1.question("Ingrese el segundo número: ", (numero2) => {
            r1.question("Ingrese el tercer número: ", (numero3) => {

                if (parseFloat(numero1) >= parseFloat(numero2) && parseFloat(numero1) >= parseFloat(numero3)) {
                    console.log(numero1 + " es mayor");
                } else if (parseFloat(numero2) >= parseFloat(numero1) && parseFloat(numero2) >= parseFloat(numero3)) {
                    console.log(numero2 + " es mayor");
                } else if (parseFloat(numero3) >= parseFloat(numero1) && parseFloat(numero3) >= parseFloat(numero2)) {
                    console.log(numero3 + " es mayor");
                }

                r1.close();
            });
        });
    });
}

module.exports = ejercicio2;
