//ALUMNO JUAN.S VIAZZO DIV: J - TP 06 ADIVINA EL NUMERO 2 SWITCH IF


/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numerodeluser;

function comenzar()
{

	numeroSecreto=Math.floor(Math.random()*101);
	numeroSecreto=parseInt(numeroSecreto);
	console.log(numeroSecreto);
	contadorIntentos=0;
	document.getElementById("txtIdIntentos").value=contadorIntentos;
	

}




function verificar()
{
	numerodeluser=document.getElementById("txtIdNumero").value;
	contadorIntentos=contadorIntentos+1;


	switch (contadorIntentos) 
	{
		case 1:
			if(numerodeluser==numeroSecreto)
			{
				alert("usted es un Psíquico");
			}
			break;
		case 2:
			if(numerodeluser==numeroSecreto)
			{
				alert("excelente percepción");
			}
			break;
		case 3:
			if(numerodeluser==numeroSecreto)
			{
				alert("Esto es suerte");
			}
			break;
		case 4:
			if(numerodeluser==numeroSecreto)
			{
				alert("Excelente técnica");
			}
			break;
		case 5:
			if(numerodeluser==numeroSecreto)
			{
				alert("usted está en la media");
			}
			break;
		case 6:
		case 7:
		case 8:
		case 9:
			if(numerodeluser==numeroSecreto)
			{
				alert("falta técnica");
			}
			break;
		default:
			break;
	}
	if(contadorIntentos>10 && numerodeluser==numeroSecreto)
	{
		alert("afortunado en el amor!!");
	}

	document.getElementById("txtIdIntentos").value=contadorIntentos;



}



/*function verificar()
{
	numerodeluser=document.getElementById("txtIdNumero").value;
	contadorIntentos=contadorIntentos+1;

if(contadorIntentos== 1 && numerodeluser==numeroSecreto)
	{
		alert("usted es un Psíquico");
	}
	else
	{
		if(contadorIntentos==2 && numerodeluser==numeroSecreto)
		{
		alert("excelente percepción")
		}
		else
		{
			if(contadorIntentos==3 && numerodeluser==numeroSecreto)
			{
				alert("Esto es suerte");
			}
			else
			{
				if(contadorIntentos==4 && numerodeluser==numeroSecreto)
				{
					alert("Excelente técnica");
				}
				else
				{
					if(contadorIntentos==5 && numerodeluser==numeroSecreto)
					{
						alert("usted está en la media");
					}
					else
					{
						if(contadorIntentos>6 && contadorIntentos<10 && numerodeluser==numeroSecreto)
						{
							alert("falta técnica");
						}
						else
						{
							if(contadorIntentos>10 && numerodeluser==numeroSecreto)
							{
								alert("afortunado en el amor!!");
							}
							
						}
					}
				}
			}
		}
	}
	document.getElementById("txtIdIntentos").value=contadorIntentos;
}*/
