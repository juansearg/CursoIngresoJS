//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 10 DE INSTRUCCION IF//

/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/


function mostrar()
{
	
var numerorandon;


numerorandon = Math.floor(Math.random()*10+1);
/* si uso parseInt en vez de Math.floor esta bien*/

if (numerorandon >= 9)
alert ("Excelente la nota fue: " + numerorandon)

else if (numerorandon > 4 && numerorandon < 9)
 {alert ("Aprobo la nota fue: " + numerorandon)}

else
{alert ("Vamos, la proxima se puede, la nota fue: " + numerorandon)}


{console.log (numerorandon);}



}//FIN DE LA FUNCIÓN