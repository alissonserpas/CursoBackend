//crea una listta combinada

// Arreglo de estudiantes
let estudiantes = [
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


console.log(comunidadEducativa);