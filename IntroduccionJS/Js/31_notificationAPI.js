//NOTIFICATION API
//hace referencia a todo el html
const boton = document.querySelector('#boton'); //Selecciona el boton
boton.addEventListener('click',() =>{
    Notification.requestPermission()
                .then(resultado => console.log('Esto es', resultado))
}); //Permite registrar un evento 

//Mostrar una notificacion con ventana
if(Notification.permission == 'granted') {
    new Notification('Esto es una notificacion',{
        icon : 'img/alerta.png',
        body : 'Codigo con Alejandra, los mejores tutoriales'
    })
}