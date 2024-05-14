

const { read } = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


//ejercicio1
/*r1.question("ingrese un numero", (numero)=>{
    if (numero >= 1){
            return(numero + "el numero es positivo")
    }else if (numero <= -1){
            return console.log(numero + "el numero negativo")
    }else {
        return console.log("el numero es 0")
    }


r1.question ("ingrese un numero", (numero)=>{
    const num = evaluar (numero)
})
})*/

//ejercicio2
/*r1.question("ingrese el primer numero", (numero1)=>{
    r1.question ("ingrese el segundo numero",(numero2) =>{
        r1.question("ingrese el tercer numero", (numero3)=>{
            if(numero1 >= numero2 && numero1 >= numero3){
                return console.log(numero1+ "es mayor")
            }else if (numero2 >= numero1 && numero2 >= numero3){
                return console.log(numero2+ "es mayor")
            }else if (numero3 >= numero1 && numero3 >= numero2){
                return console.log(numero3+ "es mayor")
            }

        })
    } )
})*/


//ejercicio3
/*r1.question ("digite el numero a realizar el factorial", (n1)=>{
    let resultado = 1
    for (let i = 1 ; i <= parseFloat(n1); i++){
        resultado *= i;
    }
    console.log ("el factorial es:" +resultado)
})*/


//ejercicio4
/*r1.question("ingrese el numero a evaluar", (num)=>{
    if (parseFloat(num)% 2 === 0){
        console.log ("el numero es par")
    }else {
        console.log("el numero no es par")
    }
})*/

//ejercicio5
/*r1.question("Ingrese el primer color (rojo, amarillo o azul): ", function(color1){
    r1.question("Ingrese el segundo color (rojo, amarillo o azul): ", function(color2){
        

        if ((color1 === 'azul' && color2 === 'amarillo') || (color1 === 'amarillo' && color2 === 'azul')) {
            console.log("El resultado de mezclar azul y amarillo es: verde");
        } else if ((color1 === 'azul' && color2 === 'rojo') || (color1 === 'rojo' && color2 === 'azul')) {
            console.log("El resultado de mezclar azul y rojo es: morado");
        } else if ((color1 === 'rojo' && color2 === 'amarillo') || (color1 === 'amarillo' && color2 === 'rojo')) {
            console.log("El resultado de mezclar rojo y amarillo es: naranja");
        } else {
            console.log("Error: La combinación de colores no es válida.");
        }

    }) 
}) */