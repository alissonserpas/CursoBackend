const readline = require('readline');
const ejercicio1 = require('./ejercicio1');
const ejercicio2 = require('./ejercicio2');
const ejercicio3 = require('./ejercicio3');
const ejercicio4 = require('./ejercicio4');
const ejercicio5 = require('./ejercicio5');
const ejercicio6 = require('./ejercicio6');
const ejercicio7 = require('./ejercicio7');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\nMenú:");
    console.log("1. Ejercicio 1");
    console.log("2. Ejercicio 2");
    console.log("3. Ejercicio 3");
    console.log("4. Ejercicio 4");
    console.log("5. Ejercicio 5");
    console.log("6. Ejercicio 6");
    console.log("7. Ejercicio 7");
    console.log("8. Salir");
}

function ejecutarEjercicio(opcion) {
    switch (opcion) {
        case '1':
            ejercicio1();
            break;
        case '2':
            ejercicio2();
            break;
        case '3':
            ejercicio3();
            break;
        case '4':
            ejercicio4();
            break;
        case '5':
            ejercicio5();
            break;
        case '6':
            ejercicio6();
            break;
        case '7':
            ejercicio7();
            break;
        case '8':
            console.log("¡Hasta luego!");
            rl.close();
            break;
        default:
            console.log("Opción no válida.");
    }
}

function leerOpcion() {
    rl.question("\nSelecciona una opción: ", function(opcion) {
        if (opcion === '8') {
            ejecutarEjercicio(opcion);
        } else {
            ejecutarEjercicio(opcion);
            mostrarMenu();
            leerOpcion();
        }
    });
}

console.log("Bienvenido al programa\n");


mostrarMenu();
leerOpcion();

