/*LOS COMPORTAMIENTOS DEBEN DE INCLUIR SOLO UN MENSAJE CON LOS 
ATRIBUTOS CORRESPONDIENTES PARA EL BEBE (ANTONIO, DE 3 MESES, 
SONIA DE 5 MESES Y JAVIER DE 8 MESES).*/


class bebe {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    llorar(){
        console.log(`${this.nombre} de ${this.edad} meses Esta llorando!`)
    }

    dormir(){
        console.log(`${this.nombre} de ${this.edad} meses Esta durmiendo!`)
    }

    comer(){
        console.log(`${this.nombre} de ${this.edad} meses Esta comiendo!`)
    }
}

const ANTONIO = new bebe ("Antonio", 3 );
const SONIA = new bebe ("Sonia", 5 );
const JAVIER = new bebe ("Javier", 8 );

ANTONIO.llorar();
ANTONIO.dormir();
ANTONIO.comer(); 

SONIA.llorar();
SONIA.dormir();
SONIA.comer();

JAVIER.llorar();
JAVIER.dormir();
JAVIER.comer();
