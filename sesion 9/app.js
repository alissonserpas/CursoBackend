import inquirer from 'inquirer'



const pregunta = [
    {
        type: 'input',
        name: 'nombre',
        message: 'digame su nombre'
    },
    {
        type: 'confirm',
        name: 'confirmacion',
        message: 'seguro ese es el nombre'
        
    },
    {
        type: 'list',
        name: 'colores',
        message: 'cual es tu color favorito',
        choices:['rojo','morado','verde','amarillo']
    },
    {
        type: 'checkbox',
        name: 'intereses',
        message: 'seleccione una opcion de interes',
        choices: ['programacion','diseño','base de datos']
    },
    {
        type: 'password',
        name: 'password',
        message: 'Ingrese su password',
        mask: '*'
    }
]


inquirer.prompt(pregunta).then((respuesta) =>{ 

    
    if(respuesta.confirmacion){
        console.log('comfirmacion exitosa')
        console.log(`hola ${respuesta.nombre}`)
        console.log(`tu color favorito es: ${respuesta.colores}`)
        console.log(`tus intereses son: ${respuesta.intereses.join('')}`)
        console.log(`tu password es: ${respuesta.password}`)
    }else {
        console.log('no se confirmo el nombre')
    }
    

})


