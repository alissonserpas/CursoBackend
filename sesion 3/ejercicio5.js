/*Crear un algoritmo donde se evalúa el tipo de color que saldrá de una mezcla 
de colores primarios. */




const readline = require('readline')
function ejercicio5() {
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("Ingrese el primer color (rojo, amarillo o azul): ",(color1)=>{
    r1.question("Ingrese el segundo color (rojo, amarillo o azul): ", (color2)=>{
        
        
        if ((color1 === 'azul' && color2 === 'amarillo') || (color1 === 'amarillo' && color2 === 'azul')) {
            console.log("El resultado de mezclar azul y amarillo es: verde");
        } else if ((color1 === 'azul' && color2 === 'rojo') || (color1 === 'rojo' && color2 === 'azul')) {
            console.log("El resultado de mezclar azul y rojo es: morado");
        } else if ((color1 === 'rojo' && color2 === 'amarillo') || (color1 === 'amarillo' && color2 === 'rojo')) {
            console.log("El resultado de mezclar rojo y amarillo es: naranja");
        } else {
            console.log("Error: La combinación de colores no es válida.");
        }

    }) 
})

}

module.exports = ejercicio5;