//busque un objeto especifico por nombre

function buscarPorNombre(personas, nombreABuscar) {
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
};