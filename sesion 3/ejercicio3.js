const { read } = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question ("digite el numero a realizar el factorial", (n1)=>{
    let resultado = 1
    for (let i = 1 ; i <= parseFloat(n1); i++){
        resultado *= i;
    }
    console.log ("el factorial es:" +resultado)
})