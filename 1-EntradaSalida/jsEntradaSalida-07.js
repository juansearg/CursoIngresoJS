/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

// siempre primero defino las variables, con esto le reservo espacio en la memoria

var numero1;
var numero2;
var mensaje;
var suma;
var resta;
var producto;
var division;



function sumar() {


    //defino numero y el str lo defino como numero con parseInt. 

    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


    /*primero tengo que traer el valor, y despues realizar la operacion, si yo pusiera primero
     suma = numero1 + numero2 y despues numero1 y despues parseInt (document.getElementById("txtIdNumeroUno").value)
     seria incorrecto, ya que las variables estan reservadas pero aun no les asigne un valor(value)*/


    suma = numero1 + numero2;
    mensaje = "El resultado de la operacion suma es: " + suma;

    alert(mensaje);

    /*realizo el blanqueo del ID, para que el usuario vuelva a tener el mensaje inicial
    las comillas no llevan espacio van asi (""), porque espacio dejaria el campo en blanco, y no con el mensaje
    del placeholder "ingrese numero uno" "ingrese numero dos" */
    document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";


}

function restar() {

    numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2=parseInt(document.getElementById("txtIdNumeroDos").value);


    resta=numero1 - numero2;
    mensaje="El resultado de la operacion resta es: ";
    mensaje=mensaje + resta;

    alert(mensaje);

    document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

function multiplicar() {
    numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2=parseInt(document.getElementById("txtIdNumeroDos").value);


    producto=numero1 * numero2;
    mensaje="El resultado de la operacion producto es: ";
    mensaje= mensaje + producto;

    alert(mensaje);

    document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";

}

function dividir() {
    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


    division = numero1 / numero2;
    mensaje = "El resultado de la operacion dividir es: " + division;

    alert(mensaje);

    document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

