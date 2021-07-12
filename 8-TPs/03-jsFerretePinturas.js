/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var temperatura;
var mensaje;
var conversiondetemperatura;
function FahrenheitCentigrados () 
{
    

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    conversiondetemperatura = temperatura - 32;
    conversiondetemperatura = conversiondetemperatura * 5/9;
    conversiondetemperatura = conversiondetemperatura.toFixed([1]);


    mensaje = "La temperatura en ºC es: ";
    mensaje = mensaje + conversiondetemperatura;

    alert (mensaje);

    document.getElementById("txtIdTemperatura").value=""

}

function CentigradosFahrenheit () 
{
	temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    conversiondetemperatura = temperatura * 9/5;
    conversiondetemperatura = conversiondetemperatura + 32;
    conversiondetemperatura = conversiondetemperatura.toFixed([1]);
    /* uso el nombre de la variable conversiondetemperatura(number) y toFixed para
    limitar la cantidad de decimales, en este caso 1, seria 66.1 32.6 etc 
    como explico Octavio, es mejor tener (probabilistico) varias lineas de codigo
    para disminuir el porcentaje de error*/


    mensaje = "La temperatura en ºF es: ";
    mensaje = mensaje + conversiondetemperatura;

    alert (mensaje);

    document.getElementById("txtIdTemperatura").value=""

}
