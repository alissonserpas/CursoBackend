const { read } = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("ingrese el primer numero", (numero1)=>{
    r1.question ("ingrese el segundo numero",(numero2) =>{
        r1.question("ingrese el tercer numero", (numero3)=>{

            if(parseFloat(numero1) >= parseFloat(numero2) && parseFloat(numero1) >= parseFloat(numero3)){
                return console.log(numero1+ "es mayor")
            
            }else if (parseFloat(numero2) >= parseFloat(numero1) && parseFloat(numero2) >= parseFloat(numero3)){
                return console.log(numero2+ "es mayor")
            
            }else if (parseFloat(numero3) >= parseFloat(numero1) && parseFloat(numero3) >= parseFloat(numero2)){
                return console.log(numero3+ "es mayor")
            }

        })
    } )
})