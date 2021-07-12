/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio1;
var precio2;
var precio3;



function Sumar () 
{ var suma;

precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;
    alert ("el precio es: " +suma);
	
}
function Promedio () 
{
    var suma;
    var promedio;
precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;
    promedio = (suma/3);
    alert ("el precio es: " +promedio);
}
function PrecioFinal () 
{
    var suma;
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
        suma = precio1 + precio2 + precio3;
        iva = (suma*(0.21));
        iva = suma + iva;
        alert ("el precio final es: " +iva);
}