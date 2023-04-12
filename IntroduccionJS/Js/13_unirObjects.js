//UNIR DOS OBJETOS
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true, //propiedad o llave del objeto
}  

const medidas = {
    peso : '1kg',
    medida : '1m'
}

//Estamos uniendo dos objetos pero no estamos modificando ningun de los originales
//Spread Operator
const nuevoProducto = {...producto, ...medidas};
console.log(producto)
console.log(nuevoProducto)