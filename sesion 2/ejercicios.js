


//ejercicio 1
/*function contarPalabras(arrayCadenas) {
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
console.log(resultado);*/

//EJERCICIO 2
/*class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularPrecioTotal() {
        return this.precio * this.cantidad;
    }
}

const productos = [
    new Producto("Camiseta", 20, 2), // Nombre, Precio, Cantidad
    new Producto("Pantalón", 30, 1)  // Nombre, Precio, Cantidad
];

function calcularPrecioTotal(productos) {
    let precioTotal = 0;
    for (const producto of productos) {
        precioTotal += producto.calcularPrecioTotal();
    }
    return precioTotal;
}

const precioTotal = calcularPrecioTotal(productos);
console.log("El precio total de todos los productos es: $" + precioTotal);*/

//EJERCICI0 3
/*class Persona {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }
  }
  
  const personas = [
    new Persona("Juan", 25, "Ciudad A"),
    new Persona("María", 35, "Ciudad B"),
    new Persona("Carlos", 40, "Ciudad A"),
    new Persona("Luisa", 28, "Ciudad C")
  ];
  
  Persona.prototype.filtrarPorEdadYCiudad = function(ciudad, edadMinima) {
    return this.edad > edadMinima && this.ciudad === ciudad;
  }
  
  const ciudadEspecifica = "Ciudad A";
  const edadMinima = 30;
  
  const personasFiltradas = personas.filter(persona => persona.filtrarPorEdadYCiudad(ciudadEspecifica, edadMinima));
  
  console.log(personasFiltradas);*/
  
//EJERCICIO 4
/*const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);*/

//EJERCICIO 5
/*function sumarNumerosPares(arreglo) {
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
console.log("La suma de los números pares en el arreglo es:", sumaPares);*/

//EJERCICIO 6
/*function buscarPorNombre(personas, nombreABuscar) {
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].nombre === nombreABuscar) {
            return personas[i];
        }
    }
    return null;
}

const personas = [
    { nombre: 'Juan', edad: 30, genero: 'Masculino' },
    { nombre: 'María', edad: 25, genero: 'Femenino' },
    { nombre: 'Carlos', edad: 35, genero: 'Masculino' }
];

const nombreABuscar = 'María';
const personaEncontrada = buscarPorNombre(personas, nombreABuscar);

if (personaEncontrada) {
    console.log('Persona encontrada:', personaEncontrada);
} else {
    console.log('Persona no encontrada');
}*/

//EJERCICIO 7
// Arreglo de objetos
/*let objetos = [
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
console.log(objetos.sort(orderByPrecio));*/

//EJERCICIO 8
/*function validarObjeto(objeto) {
    const propiedadesRequeridas = ['nombre', 'direccion', 'telefono'];

    for (let propiedad of propiedadesRequeridas) {
        if (!(propiedad in objeto)) {
            return false; // La propiedad no está presente en el objeto
        }
    }
    return true; // Todas las propiedades requeridas están presentes en el objeto
}

const objeto1 = {
    nombre: 'Juan',
    direccion: 'Calle 123',
    telefono: '123456789'
};

console.log(validarObjeto(objeto1)); // Devuelve true

const objeto2 = {
    nombre: 'María',
    direccion: 'Avenida Principal'
};

console.log(validarObjeto(objeto2)); // Devuelve false porque falta la propiedad 'telefono'*/

//EJERCICIO 9
/*const listaDeCompras = {
    "manzanas": 5,
    "plátanos": 3,
    "leche": 2,
    "pan": 1
};

function generarListaLegible(lista) {
    let listaLegible = "Lista de compras:\n";
    for (const item in lista) {
        listaLegible += `${item}: ${lista[item]}\n`;
    }
    return listaLegible;
}

const listaLegibleParaUsuario = generarListaLegible(listaDeCompras);
console.log(listaLegibleParaUsuario);*/

//EJERCICIO 10
// Arreglo de estudiantes
/*let estudiantes = [
    { nombre: "Juan", edad: 20, grado: 10 },
    { nombre: "María", edad: 19, grado: 11 },
    { nombre: "Pedro", edad: 18, grado: 12 }
];

// Arreglo de profesores
let profesores = [
    { nombre: "Ana", materia: "Matemáticas" },
    { nombre: "Carlos", materia: "Historia" },
    { nombre: "Laura", materia: "Ciencias" }
];


let comunidadEducativa = estudiantes.concat(profesores);


console.log(comunidadEducativa);*/