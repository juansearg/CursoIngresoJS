
//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 05 DE INSTRUCCION IF//


function mostrar()
{
	
		var Edad;
		var mensaje;
		var resultado;
		//var mensajesi;
	
		
		Edad=document.getElementById("txtIdEdad").value;
		if (Edad < 13 || Edad >= 17){
		 mensaje=("La persona NO es adolescente")
		alert(mensaje);
		}
		document.getElementById("txtIdEdad").value=""
		
		/*else {mensajesi = ("la persona es adolescente")
		 alert (mensajesi);}*/
		
	
	
	
	
}//FIN DE LA FUNCIÓN