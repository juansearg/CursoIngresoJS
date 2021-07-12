



/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {


	/* comienzo por definir todas las variables que voy a utilizar hasta la lectura
	del enunciado, en caso de agregar mas y estoy en line 1000, puedo ir al inicio
	y agregar la variable, a su vez este proceso asigna espacio en la memoria
	importe = el sueldo
	aumento = el importe por un 10%
	resultado = va a ser el "mensaje" relacionado al document htlm IDResultado, ya 
	que tengo que completar el campo
	
	
	
	EJERCICIO 9BIS*/



	var importe;
	var aumento;
	var resultado;
	var Importeyaumento;

	importe = parseInt(document.getElementById("txtIdSueldo").value);
	aumento = prompt("Ingrese su aumento");


	/*como en matematica financiera, finanzas, los porcentajes son 1 = 100%, por lo cual 10% 0.1
	(se usa punto, no (coma)), y 150% es 1.5, a su vez coloco parseInt delante
	para mantener el dato como un entero*/

	Importeyaumento = parseFloat(importe * (aumento / 100));
	Importeyaumento = Importeyaumento + importe;


		resultado = "Resultado " + Importeyaumento;

	document.getElementById("txtIdResultado").value = resultado;






	/* EJERCICIO 9.
var importe;
var aumento;
var resultado;

	  importe = parseInt (document.getElementById("txtIdSueldo").value);


	  /* como en matematica financiera, finanzas, los porcentajes son 1 = 100%, por lo cual 10% 0.1
	  (se usa punto, no (coma)), y 150% es 1.5, a su vez coloco parseInt delante
	  para mantener el dato como un entero

	  aumento = parseInt (importe * 1.10);



	  resultado = "Resultado " + aumento

	  document.getElementById("txtIdResultado").value=resultado */




}
