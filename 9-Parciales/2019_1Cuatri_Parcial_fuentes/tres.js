/*Alumno : Viazzo Perrone Juan Sebastian Parcial Nº 3.

Pedir por prompt el precio y el porcentaje de descuento,
 mostrar el precio final con descuento por id.*/
 




function mostrar()
{

    var precio;
    var descuento;
    var mensaje;
    var preciofinal;


    precio=prompt ("Ingrese el precio ");
    precio=parseFloat(precio);
    descuento=prompt ("Ingrese el descuento ");
    descuento=parseFloat(descuento);
    descuento=(descuento/100);
    preciofinal=precio * descuento;
    preciofinal=precio - preciofinal;
    mensaje="El precio final con descuento es: ";
    mensaje=mensaje + "$ " + preciofinal;

    document.getElementById("elPrecioFinal").value=mensaje;



}
