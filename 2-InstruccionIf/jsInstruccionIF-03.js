//Alumno: JUAN SEBASTIAN VIAZZO  - EJERCICIO 03 DE INSTRUCCION IF//


function mostrar ()

{
	/* tengo que definir las variables para darle lugar en la memoria
	
	este ejercicio lo realice desde function mostrar, y se basa en que si es mayor de 18 años
	debe salir un mensaje de que la persona es mayor de edad, */

var edad;
var mensajemayor;
var mensajemenor;
var comparacion;

/* tengo que traer el dato de la edad, y realizar un if y false*/


comparacion = 18;



/* OJO, ESTO ES MUY IMPORTANTE! UN IF (EDAD >= COMPARACION); <-- NO LLEVA PUNTO Y COMA AL FINAL!
YA QUE ESTARIA CERRANDO LA FUNCION Y TIRARIA ERROR*/

edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);

if (edad >= comparacion)
{mensajemayor = "La persona es mayor de edad";
alert(mensajemayor);}
else 
{mensajemenor = "La persona es menor de edad";
alert(mensajemenor)}

document.getElementById("txtIdEdad").value=""



}

