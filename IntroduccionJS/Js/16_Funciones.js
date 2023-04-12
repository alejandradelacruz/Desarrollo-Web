//FUNCIONES EN JS
//Declaracion de funcion
// function sumar() {
//     console.log(10 + 10);
// }

// //Mandas a llamar
// sumar();

// //Expresion de la funcion
// const sumar2 = function() {
//     console.log(3 + 3);    
// }

// sumar2();

//IIFE: Protege que no se mezclen las variables y funciones de otros archivos
// (function (){
//     console.log("Esto es una funcion")
// })();

//Pregunta importante: Para declaracion de funciones 
//1. Se registran todas las funciones 
//2. Ejecucion de las funciones 
//No importa el orden en como la mandes a llamar 

//Para expresion de la funcion 
//1. Declarar la variable
//2. Se registran toda las funciones 
// 3. Ejecucion de las funciones 
//Importa el orden como la mandes. 


//Pregunta para obtener trabajo 
//Me van a poner esto y me preguntan cual es el resultado 
sumar();
function sumar() {
    console.log(10 + 10);
}

sumar2();
//Expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3);    
}

//La respuesta es 20 y en la otra marca error