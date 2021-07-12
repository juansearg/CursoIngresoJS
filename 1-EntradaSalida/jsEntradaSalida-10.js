/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{


	var importe;
	var descuento;
	var mensaje;
	var importeydescuento;
	
		  importe = parseInt (document.getElementById("txtIdImporte").value);
		 descuento = parseInt(prompt ("Ingrese descuente"));
	
		  /* como en matematica financiera, finanzas, los porcentajes son 1 = 100%, por lo cual 10% 0.1
		  (se usa punto, no (coma)), y 150% es 1.5, a su vez coloco parseInt delante
		  para mantener el dato como un entero*/
	
		  importeydescuento = parseFloat (importe * (descuento/100));
		  importeydescuento = importe - importeydescuento;
	
		  mensaje = "Resultado " + importeydescuento;
	
		  document.getElementById("txtIdResultado").value=mensaje;





		/* comienzo por definir todas las variables que voy a utilizar hasta la lectura
	del enunciado, en caso de agregar mas y estoy en line 1000, puedo ir al inicio
	y agregar la variable, a su vez este proceso asigna espacio en la memoria
	importe = el sueldo
	descuento = el importe con un 25% menos (*0.75)
	resultado = va a ser el "mensaje" relacionado al document htlm IDResultado, ya 
	que tengo que completar el campo

var importe;
var descuento;
var mensaje;

      importe = parseInt (document.getElementById("txtIdImporte").value);


	  /* como en matematica financiera, finanzas, los porcentajes son 1 = 100%, por lo cual 10% 0.1
	  (se usa punto, no (coma)), y 150% es 1.5, a su vez coloco parseInt delante
	  para mantener el dato como un entero

	  descuento = parseFloat (importe * 0.75);

	  mensaje = "Resultado " + descuento;

	  document.getElementById("txtIdResultado").value=mensaje;*/
	 


}
