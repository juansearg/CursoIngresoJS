/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

   	 /* defino las variables y les asigno un espacio en la memoria*/

   	var dividendo;
   	var divisor;
   	var resto;

	   /* traigo desde el htlm(document) mediante GetElementById, el divisor y el dividendo,
	   y por delante pongo la funcion parseInt para pasar el str a un entero*/

	   dividendo= parseInt (document.getElementById("txtIdNumeroDividendo").value);
	   divisor= parseInt (document.getElementById("txtIdNumeroDivisor").value);

		/* resto ya fue definida al comienzo, por lo cual me aseguro del que valor sea tambien
		entero, aunque podria dejarlo como str, pero en caso de que yo necesite seguir trabajando
		con el dato, es bueno tenerlo ya en formato entero*, ademas % corresponde a un modulo
		(resto de una division entera), y / (es para dividir en caso de usarlo como funcion)*/ 
		
	   resto = parseInt (dividendo % divisor)

   	

	alert("El resto es: " + resto);

 /* nuevamente, vuelvo a agregar el dato de Html, y 
 lo dejo con su placehold, agregando ="" (sin parentesis)*/

	 document.getElementById("txtIdNumeroDivisor").value="";
	 document.getElementById("txtIdNumeroDividendo").value="";

}
