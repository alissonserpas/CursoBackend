//genera una lista legible

const listaDeCompras = {
    "manzanas": 5,
    "plátanos": 3,
    "leche": 2,
    "pan": 1
};

function generarListaLegible(lista) {
    let listaLegible = "Lista de compras:\n";
    for (const item in lista) {
        listaLegible += `${item}: ${lista[item]}\n`;
    }
    return listaLegible;
}

const listaLegibleParaUsuario = generarListaLegible(listaDeCompras);
console.log(listaLegibleParaUsuario);