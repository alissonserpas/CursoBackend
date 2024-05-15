/**Crea una función dividir(callback) que tome dos números como entrada y llame al callback con el resultado de 
la división, manejando el caso de división por cero.  */

const dividir = (a, b, callback) =>  {
    if (b === 0) {
    callback("Error, el divisor es 0");
    } else {
    callback(null, a/b);
    }
}



dividir(10,5, (error, resultado) => {
    if(error){
    console.log(error);
    }else {
    console.log(`El resultado es: ${resultado}`);
    }
})