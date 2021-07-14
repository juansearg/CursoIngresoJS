

//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 01 DE INSTRUCCION IF


function mostrar()
{
	
	
/* creo las variables, edad (dato que ingreso en htlm y busco con ID, el mensaje de niña bonita,
	y el dato que voy a comparar)*/
var edad;
var mensaje;
var comparacion;

/* traigo la edad que inserto, y hago el if (la igualdad lleva == y distinto es !=
	mayor igual ">=" y menor igual "<=" )*/

edad=document.getElementById("txtIdEdad").value;
comparacion=(15);
if(edad == comparacion)
{mensaje="niña bonita";}

/*debajo del if, va el resultado en caso de que la condicion se cumpla*/

	alert(mensaje);

	 document.getElementById("txtIdEdad").value=""
}