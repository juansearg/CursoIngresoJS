/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

var valor1;
var valor2;
var mensaje;
var suma;

valor1=parseInt (document.getElementById("txtIdNumeroUno").value);
valor2=parseInt (document.getElementById("txtIdNumeroDos").value);

suma=valor1 + valor2;
mensaje="El resultado es ";
mensaje=mensaje + suma;

	alert(mensaje);

	document.getElementById("txtIdNumeroUno").value=""
     document.getElementById("txtIdNumeroDos").value=""
}

