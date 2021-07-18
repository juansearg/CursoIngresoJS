
// ALUMNO : VIAZZO JUAN SEBASTIAN - PARCIAL 2019 - Nº 4 (IF)
/* Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10*/

function mostrar()
{


var numero1;
var numero2;
var mensaje;
var cuentasuma;
var cuentaresta;

numero1 = prompt("Ingrese primer numero");
numero2 = prompt("Ingrese segundo numero");


if(numero1==numero2)
{
   mensaje=numero1+numero2;
   alert(mensaje)
}
else
{
    if(numero1>numero2)
    {
        cuentaresta=parseInt(numero1)-parseInt(numero2);
        mensaje=cuentaresta;
        alert(mensaje)
    }
    else
    {
        cuentasuma=parseInt(numero1)+parseInt(numero2);
        mensaje=cuentasuma;
        alert(mensaje)
    }
}
if(cuentaresta>10)
{
    mensaje = "La resta es: " + cuentaresta + " y supero el 10";
    alert(mensaje)
}

}





// AO - ANTES DE OCTAVIO

/*
 {


    /* defino las variables, numero1 numero2 (para los numeros que pido), mensaje para alert
    y cuenta para los calculos
    var numero1;
    var numero2;
    var mensaje;
    var cuentasuma;
    var cuentaresta;
    

    /* pido por promt el numero 1 y el numero dos, ambos prompt seguidos asi cargo ambos datos
    que fueron guardados con las variables, ademas agrego cuentasuma y cuenta resta
    asi no tener que agregar en cada if el numero1 numero2 y realizar el calculo
    numero1 = prompt("Ingrese primer numero");
    numero2 = prompt("Ingrese segundo numero");


    if (numero1 == numero2) {
        mensaje = (numero1 + numero2)
        alert(mensaje)
    }
    /* no pongo el parseint antes de esta parte, asi puedo concatenar
    los string numero1 numero2, sino realizaria una suma ya que son enteros*/
    /* MUY IMPORTANTE, PUEDO REALIZAR UN IF DENTRO DEL ELSE IF, PARA AGREGAR
    UN "SI (CONDICIONAL) A LA FUNCION

    else if (numero1 > numero2) {
        cuentaresta = parseInt(numero1) - parseInt(numero2)
        alert(cuentaresta);

        if (cuentaresta > 10) {
            mensaje = "La resta es: " + cuentaresta + " y supero el 10";
            alert(mensaje)
        }

    }
    else if (numero1 < numero2) { 
        cuentasuma = parseInt(numero1) + parseInt(numero2)
        alert(cuentasuma) };




}*/
