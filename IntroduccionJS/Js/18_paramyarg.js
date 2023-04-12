function sumar(numero1 = 0, numero2 = 0) { //numero 1 y numero 2 son parametros
    console.log(numero1 + numero2);
}

//Mandas a llamar
sumar(10,10); //Argumentos o los valores reales
sumar(3,5);
sumar(1,2);
sumar(1)

//Expresion de la funcion
const sumar2 = function(numero1, numero2) {
    console.log(numero1 + numero2);    
}

sumar2(5,10);

//Parametros por default mandar los parametros a 0 