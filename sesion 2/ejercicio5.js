//sumar unicamente los numeros pares

function sumarNumerosPares(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            suma += arreglo[i]; 
        }
    }
    return suma;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumaPares = sumarNumerosPares(numeros);
console.log("La suma de los números pares en el arreglo es:", sumaPares);