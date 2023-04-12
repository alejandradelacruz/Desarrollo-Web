//THIS: Hace referencia al objeto sobre el cual se quiere mandar a llamar
const reservacion ={
    nombre : 'Alejandra',
    apellido : 'De la cruz',
    total : 3000,
    pagado : false,
    informacion : function(){ //Se debe utilizar como function y no como arrowFunction
        console.log(`El cliente ${this.nombre} reservo y su cantida a pagar es ${this.total}`);
    }
} 

const reservacion2 ={
    nombre : 'Alan',
    apellido : 'Rodriguez',
    total : 3000,
    pagado : false,
    informacion : function(){
        console.log(`El cliente ${this.nombre} reservo y su cantida a pagar es ${this.total}`);
    }
} 

reservacion.informacion();
reservacion2.informacion();

//Pregunta para obtener trabajo: ¿Cual es el resultado del siguiente codigo: 
// const reservacion = {
//     nombre : 'Alejandra',
//     informacion : () => {
//         console.log(`${this.nombre}`);
//     }
// }
//Respuesta: No se puede ejercutar ya que como es un arrowFucntion hace referencia a la ventana global y me mostrar en consolo Undefined