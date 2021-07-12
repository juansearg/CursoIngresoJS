/* ALUMNO VIAZZO JUAN SEBASTIAN - PARCIAL 01/2019
Realizar el algoritmo que pida los datos necesarios para un triángulo 
equilátero por prompt y que muestre el perímetro por alert.*/

function mostrar() {

    /* perimetro de un triangulo equilatero 
    lado + lado + lado*/

    var perimetro;
    var lado;
    var mensaje;

    lado = prompt("Inserte el valor de un lado del trinagulo:");

    perimetro = lado * 3;

    mensaje="El perimetro del Triangulo Equilatero es = ";

    alert(mensaje+perimetro);


}
