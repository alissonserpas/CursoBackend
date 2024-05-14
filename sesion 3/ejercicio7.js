/*Determinar el tipo de vehículo seleccionado según la categoría que se ingrese, 
las categorías son las siguientes: Moto, Auto, Camion y Bicicleta.  */


const readline = require('readline')
function ejercicio7() {
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("digitar el numero de mes a conocer:", (categoría)=>{
    let tipovehiculo
    switch((categoría)){
        case 'moto':
            tipovehiculo= "Super moto";
            break;
        case 'auto':
            tipovehiculo= "Super auto";
            break;
        case 'camion':
            tipovehiculo= "Super camion";
            break;
        case 'bicicleta':
            tipovehiculo= "Super bicicleta";
            break;
        default:
            tipovehiculo= "no existe";
            break;
        
    }
    console.log(tipovehiculo)
})

}

module.exports = ejercicio7;