// "use strict"; //correr JS en modo estricto
//OBJECT METHODS
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true, //propiedad o llave del objeto
}  

Object.freeze(producto); //freeze no te permite agregar mas propiedades y tampoco permite que se modifique
producto.imagen = "imagen.jpg";
console.log(Object.isFrozen(producto));
console.log(producto);

//otra forma
Object.seal(producto);
producto.imagen = "imagen.jpg";
console.log(Object.isSealed(producto));
console.log(producto);

//Cual es la diferencia entre freeze and seal
//* freeze: no te permite agregar nuevas propiedades y tampoco te permite eliminarla ni cambiar un valor
//* seal: no te permite eliminar, ni agregar, pero si modificar los existentes