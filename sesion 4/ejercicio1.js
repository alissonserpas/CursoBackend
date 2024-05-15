/**Crea una función saludar(callback) que tome un nombre como argumento y llame al callback con un saludo 
usando ese nombre.  */



const saludar = (nombre, callback) => {
    callback(`Hola ${nombre}`);
  }
  
  
  const mostrar = saludo => {
    console.log(saludo);
  }
  
  
  saludar("Alisson", mostrar);