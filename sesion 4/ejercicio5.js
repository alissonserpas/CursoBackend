/**Crea una función retrasarPromesa(ms) que devuelva una promesa que se resuelva después de un cierto tiempo 
especificado en milisegundos. */


const operacionAsincrona = callback => {
    setTimeout(() => {
    callback("Operación asíncrona completada");
    }, 2000)
}

operacionAsincrona(mensaje => {
    console.log(mensaje);
})