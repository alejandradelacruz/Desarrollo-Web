//ARROW FUCTIONS : Solo se usan para las expresiones de la funcion
//Expresion de la funcion
const sumar2 = (numero1, numero2) => 
    console.log(numero1 + numero2);    
sumar2(5,10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo('JS'); 

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
meses.forEach(mes => {
    if (mes == 'Marzo'){
        console.log("Marzo si existe");
    }
});


//Arreglo de objetos con some 
resultado = Carrito.some(producto => producto.nombre == 'Celular');


//Para calcular el total a pagar de un carrito de compras
resultado = Carrito.reduce((total, producto) => total = producto.precio, 0);

//Otra forma
resultado = Carrito.reduce((total,producto) => total = producto.precio, 0);
console.log(resultado);

// //FILTER: Para obtener un elemento en especifico
resultado = Carrito.filter(producto => producto.precio > 400);

resultado = Carrito.filter(producto => producto.nombre != 'Celular');
console.log(resultado);