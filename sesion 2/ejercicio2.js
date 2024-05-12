//calcular el costo total

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularPrecioTotal() {
        return this.precio * this.cantidad;
    }
}

const productos = [
    new Producto("Camiseta", 20, 2), // Nombre, Precio, Cantidad
    new Producto("Pantalón", 30, 1)  // Nombre, Precio, Cantidad
];

function calcularPrecioTotal(productos) {
    let precioTotal = 0;
    for (const producto of productos) {
        precioTotal += producto.calcularPrecioTotal();
    }
    return precioTotal;
}

const precioTotal = calcularPrecioTotal(productos);
console.log("El precio total de todos los productos es: $" + precioTotal);