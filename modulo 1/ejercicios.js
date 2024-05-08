const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//ejercicio 10
rl.question('Ingresa una frase: ', (frase) => {
    const palabras = frase.split(' ');
    const fraseCapitalizada = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
    console.log(`La frase con la primera letra de cada palabra capitalizada es: ${fraseCapitalizada}`);
    rl.close();
});


//ejercicio 9
/*rl.question('Ingresa una palabra: ', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numVocales = vocales ? vocales.length : 0;
    console.log(`El número de vocales en la palabra es: ${numVocales}`);
    rl.close();
});*/


//ejercicio 8
/*rl.question('Ingresa una palabra: ', (palabra) =>{
    const palabraInvertida = palabra.split('').reverse().join('');
    if(palabra === palabraInvertida){
    console. log(`${palabra} es un palíndromo`)
    } else{
    console.log(`${palabra} no es un palindromo` )
    }
})*/


//ejercicio 7
/*rl.question('Ingrese una cadena: ', (cadena) => {
    const cadenainvertida = cadena.split('').reverse().join('');
    console.log( `Cadena invertida: ${cadenainvertida}` );
})*/


//ejercicio 6
/*rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split('');
    console. log(` Numero de palabras: ${palabras.length}` );
});  */  



//ejercicio 5
/*rl.question('Ingrese una cadena: ', (cadena) =>{
    const inicio =2;
    const longitud= 5;
    const subcadena= cadena.substring(inicio, inicio + longitud);
    console.log(`Subcadena es: ${subcadena}` )

})*/


//ejercicio 4
/*r1.L.question('Ingresa una frase: ', (frase) => {
    rl.question('Ingrese la palabra que sea reemplazar: ' ,(palabraCambiar) =>{
    rl.question('Ingrese la palabra nueva ', (nuevapalabra) => {
        const frasemodificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevapalabra)
    console. log('Frase modificada: ', frasemodificada)
    })
})
});*/


//ejercicio 3
/*r1.question('Ingrese una palabra', (palabra)=>{
    console.log(palabra.toUpperCase())
})*/


//ejercicio 2
/*r1.question('Ingrese una cadena de texto', (cadena)=>{
    console.log(`Numero de caracteres: ${cadena.length}`)
});*/


//ejercicio 1
/* r1.question('Ingrese su nombre', (nombre)=>{
    r1.question('Ingrese su aperllido', (apellido)=>{
        console.log(`hola mi nombre es ${nombre} ${apellido}`)
    })
})*/