//cuantas veces aparece cada palabra

function contarPalabras(arrayCadenas) {
    let contadorPalabras = {};
    arrayCadenas.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra => {
            if (contadorPalabras[palabra]) {
                contadorPalabras[palabra]++;
            } else {
                contadorPalabras[palabra] = 1;
            }
        });
    });

    return contadorPalabras;
}

let arrayCadenas = ["hola mundo", "hola javascript", "mundo mundo javascript"];
let resultado = contarPalabras(arrayCadenas);
console.log(resultado);