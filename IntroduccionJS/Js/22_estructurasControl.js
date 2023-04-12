//ESTRUCTURAS DE CONTROL
// const puntaje = 1001;
// if (puntaje != 1000) {
//     console.log('Si el puntaje el 1000');
// } else {
//     console.log("No es igual");
// }

// const efectivo = 1000;
// const carrito = 800; 
// if (efectivo > carrito) {
//     console.log("EL usuario puede pagar");
// } else {
//      console.log("Fondos insuficientes");
// }

const rol = 'Administrador';

if (rol == "Administrador"){
    console.log("Acceso a todo el sistema");

} else if (rol == 'editor') {
    console.log("Eres editor, puedes entrar pero no puedes hacer mucho")
} else {
    console.log("No tienes acceso")
}