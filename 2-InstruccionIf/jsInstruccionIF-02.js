
//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 02 DE INSTRUCCION IF

function mostrar()
{
	//tomo la edad  
	
	/* defino las variables, mensaje si es mayor, mensajemenor si es menor, edad es el dato
	que tomo del htlm por ID, y comparacion es la edad que voy a usar para comparar*/

var mensaje;
var edad;
var comparacion;
var mensajemenor;

/* defino comparacion, y defino los mensajes, aunque los mensajes pueden ir prolijamente dentro
de los {} de if y else*/

comparacion=18;


/* traigo la edad y realizo el if, no olvidar que la respuesta al resultado true
se pone entre corchetes {}, y despues else en caso de que sea falso, tambien va
entre corchetes {}*/

edad=document.getElementById("txtIdEdad").value;
if (edad >= comparacion)
{mensaje=("La persona es mayor de edad");
alert(mensaje)
console.log ("es mayor de edad");}
else {mensajemenor=("La persona es menor de edad");
alert(mensajemenor);
console.log ("es menor de edad");}



}//FIN DE LA FUNCIÓN