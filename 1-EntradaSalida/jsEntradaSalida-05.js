/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var ingresonombre;
	var ingresoedad;
	var mensaje;

   ingresonombre = document.getElementById("txtIdNombre").value;
   
   ingresoedad = document.getElementById("txtIdEdad").value;

   mensaje="Usted se llama ";
   mensaje=mensaje+ingresonombre;
   mensaje=mensaje+ " y tiene ";
   mensaje=mensaje+ingresoedad;
   mensaje=mensaje+ " años.";

   alert (mensaje);
}

