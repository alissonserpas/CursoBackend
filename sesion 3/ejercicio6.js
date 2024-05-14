/*Determinar el nombre del mes según el número ingresado por el usuario, 
tomar en cuenta que los números va 1= Enero, 2=Febrero… etc.  */



const readline = require('readline')
function ejercicio6() {
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("digitar el numero de mes a conocer:", (nmes)=>{
    let nombreMes
    switch(parseInt(nmes)){
        case 1:
            nombreMes= "Enero";
            break;
        case 2:
            nombreMes= "Febrero";
            break;
        case 3:
            nombreMes= "Marzo";
            break;
        case 4:
            nombreMes= "Abril";
            break;
        case 5:
            nombreMes= "Mayo";
            break;
        case 6:
            nombreMes= "Junio";
            break;
        case 7:
            nombreMes= "Julio";
            break;
        case 8:
            nombreMes= "Agosto";
            break;
        case 9:
            nombreMes= "Septiembre";
            break;
        case 10:
            nombreMes= "Octubre";
            break;
        case 11:
            nombreMes= "Noviembre";
            break;
        case 12:
            nombreMes= "Diciembre";
            break;
        default:
            nombreMes= "No existe";
            break;
    }
    console.log(nombreMes)
})

}

module.exports = ejercicio6;