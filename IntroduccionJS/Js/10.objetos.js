//OBJETOS
//puedo poner estas tres constantes en un solo objeto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true, //propiedad o llave del objeto
}   


// //Como puedo acceder a una propiedad del objeto
// console.log(producto.precio); //con el punto puede acceder a la propiedad
// console.log(producto.disponible);
// console.log(producto.nombreProducto);

//segunda forma
// console.log(producto["precio"]);
// console.log(producto["disponible"]);
// console.log(producto["nombreProducto"]);

//MODIFICAR OBJETOS
//1. AGREGAR NUEVAS PROPIEDADES
producto.imagen = "Imagen.jpg";

//2. ELIMINAR PROPIEDADES
delete producto.disponible;
console.log(producto);


