//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 07 DE INSTRUCCION IF//


function mostrar()
{
	//tomo la edad  
	
	
var edad;
var estadocivil;
var mensaje;


edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);

/* traigo la edad y lo paso a entero */




estadocivil = document.getElementById("estadoCivil").value;

/* cuando vas al htlm, no te confies, no siempre es txtIdDato, por otro lado, la lista desplegable
solamente restringe al usuario las opciones que puede elegir, pero el dato es valor como si lo
escribiese, por lo cual solamente hay que traer el elemento Id.value*/

if (edad < 18 && estadocivil != "Soltero")
/* en este caso, digo que "SI" es menor de 18 años, y "SI" es distinto de soltero, la condicion es
true*/
 
{mensaje = "Es muy pequeño para NO ser soltero"
alert (mensaje)}



}//FIN DE LA FUNCIÓN