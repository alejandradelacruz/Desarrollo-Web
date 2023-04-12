//PROMISES
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;
    if (auth){
        resolve("Usuario autenticado"); //El PROMISE SE CUMPLE
    }else{
        reject("No se pudo iniciar sesion"); //EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then(function(resultado){
    console.log(resultado);
})
    .catch(function(error){
    console.log(error);
});

//En los promises existen 3 valores.
//pending: No se ha cumplido pero tampoco se ha rechazado
//fulfilled : Ya se cumplio el promise
//rejected : Se ha rechazado o no se pudo cumplir