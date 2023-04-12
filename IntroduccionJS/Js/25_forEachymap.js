//ForEach: Solamente se utilizan en arreglos
Carrito.forEach(producto => console.log(producto.nombre));

//map: Solamente se utilizan en arreglos
const arreglo1 = Carrito.map(producto => producto.nombre);
console.log(arreglo1);

//Pregunta para obtener trabajo: ¿En que casos se ocupa ForEach y en que casos map? 
//Respuesta: Cuando quiera iterar sobre un arreglo y mandar el listado a la pantalla utilizamos FOREACH
//           Si quiero crear un nuevo arreglo utilizamos MAP