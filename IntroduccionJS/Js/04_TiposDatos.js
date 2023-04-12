//METODOS PARA LOS STRING
//STRING O CADENA DE TEXTO
const producto = "Monitor de 20 pulgadas";
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
// const producto2 = String('Monitor 30 pulgadas');
// const producto3 = new String('Monitor de 50 pulgadas'); 

console.log(producto.length); //Cuenta el tamaño de la palabra
console.log(tweet.length);

//IndexOf en que posicion se encuentra un texto que estoy buscando
console.log(tweet.indexOf('JavaScript')); //Si es 0 o mayor signifca que si lo pudo encontrar
console.log(producto.indexOf('Tablet')); //Si es -1 significa que no lo pudo encontrar 
// console.log(producto2)
// console.log(producto3)

//Include retorna true o false 
console.log(tweet.includes('JavaScript')); 
console.log(producto.includes('Tablet'));

//Para validar un correo 
const email = 'correo@correo.com'; 
console.log(email.indexOf('@'));
console.log(email.includes('@'))