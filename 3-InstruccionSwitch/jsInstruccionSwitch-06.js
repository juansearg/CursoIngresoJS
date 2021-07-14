
/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe."*/




function mostrar() {
	let hora;


	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	switch (hora) {
		case hora:
			if (hora >= 7 && hora <= 11) 
			{alert("Es de mañana") }
			else if (hora >= 12 && hora <= 19) 
			{alert("Es de tarde") }
			else if (hora >= 20 && hora <= 24 || hora >= 0 && hora <= 6)
			{alert("Es de noche")}
			else 
			{alert("la hora no existe")}

		break;

	

/* que hice? utilice el switch, y defini hora, en un solo case (no puedo hacer varios con la misma
	variable) entonces hago un if dos else if y el else, si no quiero que se interrumpa en la primer
	condicion de if, dejo el break al final y no entre cada case, ejemplo
	yo pongo 14, en el if no ingresa, si pongo break no corre lo demas, y sale fuera del switch
	por lo cual, debo dejar el break al final de todo, ya que quiero que pase por cada una de
	las condiciones*/



	}



}//FIN DE LA FUNCIÓN