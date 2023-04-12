const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true, //propiedad o llave del objeto
}   

//Como puedo seleccionar el precio y crear una variable
//FORMA ANTERIOR
// const precioProducto = producto.precio;
// console.log(precioProducto);

// const nombreProducto = producto.nombreProducto;
// console.log(nombreProducto);

//DESTRUCTURING DE OBJETOS
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);