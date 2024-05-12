//la edad o el precio

// Arreglo de objetos
let objetos = [
    { nombre: 'Objeto 1', edad: 25, precio: 50 },
    { nombre: 'Objeto 2', edad: 30, precio: 20 },
    { nombre: 'Objeto 3', edad: 20, precio: 100 }
];

// Función para ordenar por edad
function orderByEdad(a, b) {
    return a.edad - b.edad;
}

// Función para ordenar por precio
function orderByPrecio(a, b) {
    return a.precio - b.precio;
}

// Ordenar por edad
console.log("Ordenado por edad:");
console.log(objetos.sort(orderByEdad));

// Ordenar por precio
console.log("Ordenado por precio:");
console.log(objetos.sort(orderByPrecio));