//CLASSES 
class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre
        this.precio = precio
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
}

const producto = new Producto('Monitor Curvo de 49 pulgadas', 800);
const producto2 = new Producto('Laptop', 300);

console.log(producto.formatearProducto());
console.log(producto2.formatearProducto());

//HERENCIA 
class Libro extends Producto{
    constructor(nombre,precio,IBN){
        super(nombre,precio);
        this.IBN = IBN;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su IBN es: ${this.IBN}`;
    }
}

const Libro1 = new Libro('JavaScript',120,"11637163");
console.log(Libro1.formatearProducto());

