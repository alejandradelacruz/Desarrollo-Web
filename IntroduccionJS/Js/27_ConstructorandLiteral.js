//OBJECT CONSTRUCTOR AND OBJECT LITERAL
//PROGRAMACION ORIENTADA A OBJETOS (POO)

//OBJECT LITERAL 
const producto = {
    nombre : 'Tablet',
    precio : 500,
}

//OBJECT CONSTRUCTOR
function Cliente(nombre,apellido) { //Actua como un clase como en JAVA
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre,precio) { //Actua como un clase como en JAVA
    this.nombre = nombre;
    this.precio = precio;
}

//Prototype: Va a hacer una funcion que esta asociada que esta asociado a un tipo de objeto 
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor Curva de 49 pulgadas',800, true); //Instanciar 
const producto3 = new Producto('Laptop',1800, false); //Instanciar 

const Cliente1 = new Cliente('Alejandra', 'De la cruz'); 

console.log(Cliente1.formatearCliente());
console.log(producto2.formatearProducto(), producto3.formatearProducto());

//Pregunta para obtener trabajo: Crear un codigo con Prototype
