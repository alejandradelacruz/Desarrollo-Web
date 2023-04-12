//METODOS DE PROPIEDAD 
const reproductor = { //Objeto que tiene una funcion 
    reproducir : function (id){
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar : function(){
        console.log("Pausando....")
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist : ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist : ${nombre}`)
    }
}
//Tambien puedo agregar fuera del objeto
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la Cancion con el ID: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Pop");
reproductor.reproducirPlaylist("pop");