//SWITCH 
const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'cheque' : 
        console.log("El usuario va a pagar con cheque");
        break;
    case 'Efectivo' :
        console.log("Pagaste con efectivo");
        break;
    default : 
        console.log("Aun no has pagado");
        break;
}