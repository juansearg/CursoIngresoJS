//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 08 DE INSTRUCCION IF//

/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje:
 'Es soltero y no es menor.*/

function mostrar()
{
	//tomo la edad  
	
	
/* el negado(NOT !) no es lo mejor, es mejor utilizar el if, para el parcial es mejor hacerlo como abajo
var edad;
var estadocivil;
var mensaje;
var edadvalida;

edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);


estadocivil = document.getElementById("estadoCivil").value;


edadvalida = edad < 18 && edad > 0;
if ( ! (estadocivil != "Soltero" && edadvalida) )
{mensaje = "Es soltero y no es menor"
alert (mensaje)}

/* ! signo de NOT, quiere decir que no haga nada si pasa la condicion, y si no es ASI,
realiza lo que se encuentra dentro del if (mensaje + alert)*/


	
	
	
	var mensaje;
	var edad;
	var estadocivil;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt (edad);
	estadocivil=document.getElementById("estadoCivil").value;
	
	if (edad >= 18 && estadocivil=="Soltero")
	{mensaje = "Es soltero y no es menor"
	alert (mensaje);}

	
	


}//FIN DE LA FUNCIÓN