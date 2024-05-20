import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import inquirer from 'inquirer';
import { agregarNota, eliminarNota, listarNotas, leerNota, editarNota } from './utiles/notas.js';

const showMenu = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Selecciona una opción',
            choices: [
                'Agregar nota',
                'Eliminar nota',
                'Listar notas',
                'Leer nota',
                'Editar nota',
                'Salir'
            ]
        }
    ]);

    switch (answers.action) {
        case 'Agregar nota':
            const addAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Título de la nota'
                },
                {
                    type: 'input',
                    name: 'body',
                    message: 'Cuerpo de la nota'
                }
            ]);
            agregarNota(addAnswers.title, addAnswers.body);
            break;

        case 'Eliminar nota':
            const deleteAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Título de la nota a eliminar'
                }
            ]);
            eliminarNota(deleteAnswers.title);
            break;

        case 'Listar notas':
            listarNotas();
            break;

        case 'Leer nota':
            const readAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Título de la nota a leer'
                }
            ]);
            leerNota(readAnswers.title);
            break;

        case 'Editar nota':
            const editAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Título de la nota a editar'
                },
                {
                    type: 'input',
                    name: 'body',
                    message: 'Nuevo cuerpo de la nota'
                }
            ]);
            editarNota(editAnswers.title, editAnswers.body);
            break;

        case 'Salir':
            console.log('Saliendo...');
            return;
    }

    showMenu(); 
};

// Inicializa yargs 
yargs(hideBin(process.argv))
    .command({
        command: 'agregar',
        describe: 'Agregar una nueva nota',
        builder: {
            title: {
                describe: 'Título de la nota',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Cuerpo de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            agregarNota(argv.title, argv.body);
        }
    })
    .command({
        command: 'eliminar',
        describe: 'Eliminar una nota',
        builder: {
            title: {
                describe: 'Título de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            eliminarNota(argv.title);
        }
    })
    .command({
        command: 'ver',
        describe: 'Lista de notas',
        handler() {
            listarNotas();
        }
    })
    .command({
        command: 'leer',
        describe: 'Leer una nota',
        builder: {
            title: {
                describe: 'Título de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            leerNota(argv.title);
        }
    })
    .command({
        command: 'editar',
        describe: 'Editar una nota existente',
        builder: {
            title: {
                describe: 'Título de la nota a editar',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Nuevo cuerpo de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            editarNota(argv.title, argv.body);
        }
    })
    .help()
    .parse();


showMenu();
