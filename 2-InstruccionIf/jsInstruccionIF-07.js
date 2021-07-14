//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 07 DE INSTRUCCION IF
/* Enunciado:
Al ingresar una edad menor a 18 años y un estado
 civil distinto a "Soltero", mostrar el siguiente mensaje: 
 'Es muy pequeño para NO ser soltero*/

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

var edadvalida = edad < 18 && edad > 0;
if (estadocivil != "Soltero" && edadvalida)
{mensaje = "Es muy pequeño para NO ser soltero"
alert (mensaje)}

/* en este caso, digo que "SI" es menor de 18 años, y "SI" es distinto de soltero, la condicion es
true*, agrego la edavalida para que no puedan poner -1 o un string*/


}//FIN DE LA FUNCIÓN