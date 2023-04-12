//Funciones que re
// function sumar(numero1, numero2) {
//     return numero1 + numero2; 
// }

// const resultado = sumar(2, 3);

// console.log(resultado)

let total = 0
function agregarCarrito(precio) {
    return total += precio; 
}

function calculaImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total)

const totalPagar = calculaImpuesto(total);
console.log(totalPagar)