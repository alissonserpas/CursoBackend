

/*const shuffle = require('lodash/shuffle')

const array = [9,5,6,7,1]

const arraycomodado = shuffle(array)

console.log(arraycomodado)*/


const express = require('express')
const app = express()

const PORT = 4000

app.get('/',(req,res)=>{
    res.send('este es un servidor basico')
})

app.listen(PORT, ()=>{
    console.log(`server iniciado http://localhost:${PORT}`)
})