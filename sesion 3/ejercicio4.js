const { read } = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("ingrese el numero a evaluar", (num)=>{
    if (parseFloat(num)% 2 === 0){
        console.log ("el numero es par")
    }else {
        console.log("el numero no es par")
    }
})