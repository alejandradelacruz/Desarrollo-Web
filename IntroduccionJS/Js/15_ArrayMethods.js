const meses = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo'];

const Carrito = [
    { nombre : 'Monitor de 20 pulgadas', precio : 500},
    { nombre : 'Television 50 pulgadas', precio : 700},
    { nombre : 'Tablet', precio : 300},
    { nombre : 'Audifonos', precio : 200},
    { nombre : 'Teclado', precio : 50},
    { nombre : 'Celular', precio : 500},
    { nombre : 'Bocinas', precio : 300},
    { nombre : 'Laptop', precio : 800}
];

//forEach
// meses.forEach(function(mes) {
//     if (mes == 'Marzo'){
//         console.log("Marzo si existe");
//     }
// });

//includes equivalente a forEach pero para un arreglo normal
let resultado = meses.includes('Diciembre');

//Arreglo de objetos con some 
// resultado = Carrito.some(function(producto){
//     return producto.nombre == 'Celular'
// });

//Para calcular el total a pagar de un carrito de compras
// resultado = Carrito.reduce(function(total,producto){
//     return total = producto.precio
// }, 0);

//Otra forma
resultado = Carrito.reduce((total,producto) => total = producto.precio, 0);
// console.log(resultado);

//FILTER: Para obtener un elemento en especifico
resultado = Carrito.filter(function(producto){
    return producto.precio > 400;
});

resultado = Carrito.filter(function(producto){
    return producto.nombre != 'Celular';
});
console.log(resultado);

