//FETCH API
async function obtenerEmpleados () {
    const archivo =  'empleados.json';
    // fetch(archivo)
    //     .then(resultado => { //obtener que tipo de resultado es json o texto y si la conexion fue existosa
    //         return resultado.json();
    //     })
    //     .then(datos => {
    //         // console.log(datos.empleados);
    //         const {empleados} = datos;
    //         console.log(empleados);

    //         empleados.forEach(empleados =>{
    //             console.log(empleados.id);
    //             console.log(empleados.nombbre);
    //             console.log(empleados.puesto);
            
    //         }) 
    //     })

    //Con awync / await
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();