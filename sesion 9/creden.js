import inquirer from 'inquirer';

const preguntas = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Dígame su nombre:'
    },
    {
        type: 'input',
        name: 'edad',
        message: 'Ingrese su edad:',
        validate: (input) => {
            const edad = parseInt(input);
            if (isNaN(edad) || edad < 18) {
                return 'Por favor, ingrese una edad válida.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
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
    },
    {
        type: 'password',
        name: 'password',
        message: 'Ingrese su contraseña:',
        mask: '*',
        validate: (input) => {
            if (input.length >= 6) {
                return true;
            }
            return 'La contraseña debe tener al menos 6 caracteres.';
        },
        
    },
    {
        type: 'input',
        name: 'emailLogin',
        message: 'Ingrese su correo electrónico para iniciar sesión:',
        
    },
    {
        type: 'password',
        name: 'passwordLogin',
        message: 'Ingrese su contraseña para iniciar sesión:',
        mask: '*',
        
    }
];

inquirer.prompt(preguntas).then((respuesta) => {
    const edad = parseInt(respuesta.edad);

    if (edad >= 18) {
        const { email, password, emailLogin, passwordLogin } = respuesta;

        if (email === emailLogin && password === passwordLogin) {
            console.log('Inicio de sesión exitoso. Bienvenido.');
        } else {
            console.log('Credenciales incorrectas. Verifique e intente nuevamente.');
        }
    } else {
        console.log('Debe ser mayor de 18 años para registrarse.');
    }
});
