//ARRAYS
//Ejemplo de un arreglo: Carrito de compras
const numeros = [10,20,30,40,50];
// console.log(numeros); //Para imprimirlo 

const meses = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo'];

// const arreglo = ['Hola', 10, true, "si", null, {nombre : 'ALejandra', trabajo : 'Estudiante'}, [1,2,3]];
// console.table(arreglo);

//COMO ACCEDER A LOS VALORES DE UN ARREGLO
// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[100]);

//CONOCER LA EXTENSION DE UN ARREGLO
// console.log(meses.length);

// //RECORRER UN ARREGLO
// numeros.forEach(function(numero){
//     console.log(numero)
// })

//MODIFICAR EL ARREGLO
//1. Agregar un elemento al final del arreglo
// numeros[5] = 60; no es muy común 
// numeros.push(60,70,80
// console.table(numeros);

//2. Agregar un elemento al inicio del arreglo
// numeros.unshift(-10,-20,-30)
// console.table(numeros);  //Para mostrarlo en una tabla

// //3. Eliminar el ultimo elemento del arreglo
// // meses.pop();

// // //4. Eliminar el primer elemento del arreglo
// // meses.shift();

// //5. Eliminar elementos de enmedio del arreglo
// meses.splice(2,1); //Toma dos valores (indice,cuantos elementos quieres eliminar)
// console.table(meses);

//METODOS PARA LOS ARRAY CON REST OPERATOR O SPREAD OPERATOR
//1. Equivalente al push -> Agrega un elemento al final del arreglo
const nuevoArreglo = [...meses, 'Junio']; //No modifica el arreglo original ...copia
console.table(nuevoArreglo)

//2. Equivalente al unshift -> Agrega un elemento al inicio del arreglo
const nuevoArreglo2 = ['Diciembre', ...meses];
console.table(nuevoArreglo2)



