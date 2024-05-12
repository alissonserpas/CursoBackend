/* DESARROLLAR UN LOGARITOMO QUE PERMITA MOSTRAR EL IMC DE UNA 
PERSONA*/

class CalcularIMC {
    constructor(nombre, edad, altura, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    mostrarIMC() {
        let imc = this.calcularIMC();
        console.log(`${this.nombre} tiene ${this.edad} años, mide ${this.altura} m, pesa ${this.peso} kg. Su índice de masa corporal (IMC) es ${imc.toFixed(2)}.`);
    }
}

let persona = new CalcularIMC("Ariel", 25, 1.75, 65); 
persona.mostrarIMC();
