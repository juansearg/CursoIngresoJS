function mostrar()
{

	/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/


	//tomo el mes
       var mes;

	   mes=document.getElementById("txtIdMes").value;

	   switch(mes)
	   {
	   case "Febrero":
		alert("El mes tiene 28 dias")
		break;
	   
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("El mes tiene 30 dias")
		break;

		case "Enero":
		case "Mayo":
		case "Junlio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("El mes tiene 31 dias")
		break;
	   }
	
	



}//FIN DE LA FUNCIÓN