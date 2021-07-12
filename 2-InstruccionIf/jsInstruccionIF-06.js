
//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 06 DE INSTRUCCION IF//


function mostrar()
{

	let MensajeMayor;
	let MensajeMenor;
    let MensajeAdolescente;
	let edad;


        
	/*edad = parseInt (document.getElementById("txtIdEdad").value);

	if (edad < 13)
	{MensajeMenor=("Es menor de edad")
	alert(MensajeMenor);}
	else if (edad > 18)
	{MensajeMayor=("Es Mayor de Edad")
	alert(MensajeMayor);}
	else
	{MensajeAdolescente=("Es Adolescente")
	alert(MensajeAdolescente);}*/
	
	
	
	
	edad = parseInt (document.getElementById("txtIdEdad").value);

		if (edad >= 18){
			MensajeMayor =("La persona es mayor de edad")
			alert (MensajeMayor);
		}
		else if (edad >= 13 && edad <= 17)
		{ MensajeAdolescente = ("La persona es adolescente");
		alert (MensajeAdolescente)}
		else
		{ MensajeMenor= ("La persona es menor de edad")
		alert (MensajeMenor)}


		/* edad = parseInt (document.getElementById("txtIdEdad").value);

		if (edad >= 18){
			MensajeMayor =("La persona es mayor de edad")
			alert (MensajeMayor);
		}
		else if (edad < 13)
		{ MensajeMenor = ("La persona es menor ");
		alert (MensajeMenor)}
		else
		{ MensajeAdolescente= ("La persona es adolescente")
		alert (MensajeAdolescente)}*/



}