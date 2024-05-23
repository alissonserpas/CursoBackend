import inquirer from 'inquirer'


inquirer.prompt([
{
    type: 'checkbox',
    name: 'frutas',
    message: 'cual es tu fruta favorita',
    choices:['manzana','sandia','uvas','mandarina']
}

])

.then((respuesta) =>{
    console.log('frutas seleccionada:', respuesta.frutas.join(', '))
})


