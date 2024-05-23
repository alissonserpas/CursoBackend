import inquirer from 'inquirer'


const pregunta = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo:',
        validate: function (value){
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if(validacion){
                return true
            }
            return 'porfavor introduce un correo valido'
        }
    }
]

inquirer.prompt(pregunta)
    .then((respuesta) =>{
        console.log(`correo ingresado: ${respuesta.correo}`)
    })
    .catch( (error) =>{
        console.error('Error al ingresar el correo', error)
    })
