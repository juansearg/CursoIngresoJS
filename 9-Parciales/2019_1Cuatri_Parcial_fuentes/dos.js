/* Alumno: Viazzo Juan Sebastian Parcial Nº 2.
A una pareja se le pide los datos para mostrar un 
mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, 
que sumados son xx kilos y el promedio de peso xx */


function mostrar()
{
  
    var nombre1;
    var nombre2;
    var peso1;
    var peso2;
    var sumakilos;
    var promediokilos;
    var mensaje;


    nombre1=prompt("Ingrese el nombre de la primer persona: ");
    nombre2=prompt("Ingrese el nombre de la segunda persona: ");
    peso1=prompt("Ingrese el peso de la primer persona");
    peso2=prompt("Ingrese el peso de la segunda persona");
    peso1=parseInt(peso1);
    peso2=parseInt(peso2);
    sumakilos=peso1 + peso2;
    promediokilos= (peso1 + peso2)/2;
    
    mensaje="ustedes se llaman " + nombre1 + " y " + nombre2; 
    mensaje=mensaje + " pesan ";
    mensaje=mensaje + peso1;
    mensaje=mensaje + " y ";
    mensaje=mensaje + peso2;
    mensaje=mensaje + " kilos, que sumados son ";
    mensaje=mensaje + sumakilos + "kilos y el promedio de peso ";
    mensaje=mensaje + promediokilos;


    alert(mensaje);











}
