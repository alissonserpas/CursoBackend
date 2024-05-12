//validar si un objeto tiene todas las propiedades requeridas

function validarObjeto(objeto) {
    const propiedadesRequeridas = ['nombre', 'direccion', 'telefono'];

    for (let propiedad of propiedadesRequeridas) {
        if (!(propiedad in objeto)) {
            return false; 
        }
    }
    return true; 
}

const objeto1 = {
    nombre: 'Juan',
    direccion: 'Calle 123',
    telefono: '123456789'
};

console.log(validarObjeto(objeto1)); 

const objeto2 = {
    nombre: 'María',
    direccion: 'Avenida Principal'
};

console.log(validarObjeto(objeto2)); 