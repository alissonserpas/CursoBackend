//filtra las personas mayores

class Persona {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }
  }
  
  const personas = [
    new Persona("Juan", 25, "Ciudad A"),
    new Persona("María", 35, "Ciudad B"),
    new Persona("Carlos", 40, "Ciudad A"),
    new Persona("Luisa", 28, "Ciudad C")
  ];
  
  Persona.prototype.filtrarPorEdadYCiudad = function(ciudad, edadMinima) {
    return this.edad > edadMinima && this.ciudad === ciudad;
  }
  
  const ciudadEspecifica = "Ciudad A";
  const edadMinima = 30;
  
  const personasFiltradas = personas.filter(persona => persona.filtrarPorEdadYCiudad(ciudadEspecifica, edadMinima));
  
  console.log(personasFiltradas);