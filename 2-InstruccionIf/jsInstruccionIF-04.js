//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 04 DE INSTRUCCION IF//



function mostrar()
{
	var Edad;
	var mensaje;
	var resultado;
	//var mensajeno;

	
	Edad = document.getElementById("txtIdEdad").value;
    if (Edad > 13 && Edad <= 17){
	 mensaje = "La persona es adolescente"
	alert(mensaje);
	}

	document.getElementById("txtIdEdad").value=""
	/*else {mensajeno = ("la persona no es adolescente")
	 alert (mensajeno);}*/
	



}