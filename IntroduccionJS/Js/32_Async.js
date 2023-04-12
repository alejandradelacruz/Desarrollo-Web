//  Async / await 
function descargarNuevosCliente (){
    return new Promise(resolve => {
        console.log('Descargando clientes, espere....');
        setTimeout( () => {
            resolve('Los clientes fueron Descargados');
        }, 5000); 
    });
}

function descargarUltimoPedidos (){
    return new Promise(resolve => {
        console.log('Descargando pedidos, espere....');
        setTimeout( () => {
            resolve('Los pedidos fueron Descargados');
        }, 3000); 
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosCliente();
        // const pedidos = await descargarUltimoPedidos();
        // console.log(clientes);

        const resultado = await Promise.all([ descargarNuevosCliente(), descargarUltimoPedidos()] );
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este codigo no se bloquea');

// setTimeout(function (){
//     console.log('set timeout')
// }, 1000);

// setInterval(function (){
//     console.log('set Interval')
// }, 1000);

//Pregunta para obtener trabajo: ¿Como puedes optimizar un llamado async / await?
//Respuesta: con un promise.all