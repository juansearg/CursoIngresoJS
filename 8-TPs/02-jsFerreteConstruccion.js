/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

*/


function Rectangulo () 
{ 
    var perimetrobxa;
     var alturalargo = parseFloat (document.getElementById("txtIdLargo").value);
     var baseancho = parseFloat (document.getElementById ("txtIdAncho").value);

     perimetrobxa = 6 * (alturalargo + baseancho);
     mensaje = ("La cantidad a comprar de alambre es: ");
     mensaje = mensaje + perimetrobxa;
     alert (mensaje);


}
function Circulo () 
{   var perimetrocirculo;
	var radio = parseFloat (document.getElementById("txtIdRadio").value);

    perimetrocirculo = 3 * (2 * Math.PI) *(radio);
    mensaje=("El La cantidad de alambre a comprar es: ");
    mensaje=mensaje + perimetrocirculo;
    alert (mensaje);


}
function Materiales () 
{
	var arearectangulo;
    var cemento;
    var cal;
    var mensajecemento;
    var mensajecal;
    var alturalargox;
    var baseanchox;

    alturalargox = parseInt(document.getElementById("txtIdLargo").value);
    baseanchox = parseInt(document.getElementById("txtIdAncho").value);

    arearectangulo = alturalargox * baseanchox;

    cemento = (arearectangulo*2);
    cal = (arearectangulo*3);

    mensajecemento = ("La cantidad de bolsas de cemento necesarias son: ");
    mensajecemento = mensajecemento + cemento;
    mensajecal = (" La cantidad de bolsas de cal necesarias son: ")
    mensajecal = mensajecal; + cal;

    alert(mensajecemento + mensajecal);
    

}