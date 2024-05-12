const { num } = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

/*r1.question("ingrese un numero", (numero)=>{
    if (numero >= 1){
            return console.log(numero + "el numero es positivo")
    }else if (numero <= -1){
            return console.log(numero + "el numero negativo")
    }else {
        return console.log("el numero es 0")
    }

})*/


// cambiar a funcion
function evaluar (numero){
    if (numero >= 1){
        return console.log(numero + "el numero es positivo")
    }else if (numero <= -1){
        return console.log(numero + "el numero negativo")
    }else{
        return console.log("el numero es 0")
        }   
}

r1.question("ingrese un numero", (numero)=>{
    const num = evaluar(numero)
})