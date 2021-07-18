
// ALUMNO VIAZZO JUAN - DIVISION J - TP 5

/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  
del número secreto.
*/
 
var contadorIntentos;
var numerorandon;
var numeroingresado;
var mensaje;
var restanumero;
var sumanumero;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numerorandon=Math.floor(Math.random() * 101);
  console.log(numerorandon);
  contadorIntentos=0;
  document.getElementById("txtIdIntentos").value=contadorIntentos;

}


function verificar()
{
  numeroingresado=document.getElementById("txtIdNumero").value;

  contadorIntentos=contadorIntentos+1;
  
  if(numerorandon==numeroingresado)
  {
    mensaje="Usted es un ganador!!! y en solo "
    mensaje=mensaje +contadorIntentos+" intentos"
    alert(mensaje);
  }
  else
  {
    if(numeroingresado<numerorandon)
    {
      alert("Falta para llegar al número secreto");
    }
    else
    {
      alert("Se paso del número secreto");
    }
  }
	
  document.getElementById("txtIdIntentos").value=contadorIntentos  ;
}