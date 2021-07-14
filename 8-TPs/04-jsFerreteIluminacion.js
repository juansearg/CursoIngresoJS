/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento 
del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento 
es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar 
un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */


function CalcularPrecio() {

    

   
    }




/* //IF IF

    var cantidadlamp;
    var mensaje;
    var cuenta;
    var marca;
    var impuesto;


    cantidadlamp = document.getElementById("txtIdCantidad").value;
    cantidadlamp = parseInt(cantidadlamp);
    marca = document.getElementById("Marca").value;

    if (cantidadlamp > 6) {
        cuenta = 35 * 0.5
        cuenta = cuenta * cantidadlamp
        document.getElementById("txtIdprecioDescuento").value = cuenta
    } else if (cantidadlamp == 5) {

        if (marca == "ArgentinaLuz") {
            cuenta = 35 * 0.6
            cuenta = cuenta * cantidadlamp
            document.getElementById("txtIdprecioDescuento").value = cuenta
        } else {
            cuenta = 35 * 0.7
            cuenta = cuenta * cantidadlamp
            document.getElementById("txtIdprecioDescuento").value = cuenta
        }
    } else if (cantidadlamp == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            cuenta = 35 * 0.75
            cuenta = cuenta * cantidadlamp
            document.getElementById("txtIdprecioDescuento").value = cuenta
        } else {
            cuenta = 35 * 0.8
            cuenta = cuenta * cantidadlamp
            document.getElementById("txtIdprecioDescuento").value = cuenta
        }

    } else if (cantidadlamp == 3) {
        if (marca == "ArgentinaLuz") {
            cuenta = 35 * 0.85
            cuenta = cuenta * cantidadlamp
            document.getElementById("txtIdprecioDescuento").value = cuenta
        } else if (marca == "FelipeLamparas") {
            cuenta = 35 * 0.9
            cuenta = cuenta * cantidadlamp
            document.getElementById("txtIdprecioDescuento").value = cuenta
        } else {
            cuenta = 35 * 0.95
            cuenta = cuenta * cantidadlamp
            document.getElementById("txtIdprecioDescuento").value = cuenta
        }
    } else {
        cuenta = 35 * 1
        cuenta = cuenta * cantidadlamp
        document.getElementById("txtIdprecioDescuento").value = cuenta
    }
    if (cuenta > 120) {
        impuesto = cuenta * 0.1
        cuenta = cuenta + impuesto
        document.getElementById("txtIdprecioDescuento").value = cuenta
        alert("Usted pago de IIBB" + impuesto)

        */










    /*
    
    SWITCH IF
       
       
       var cantidadlamp;
        var marca;
        var preciofinal;
        const precio = 35;
        var impuesto;
    
        cantidadlamp = document.getElementById("txtIdCantidad").value;
        cantidadlamp = parseInt(cantidadlamp);
    
        marca = document.getElementById("Marca").value;
    
        switch (cantidadlamp) {
    
    
            case 3:
                if (marca == "ArgentinaLuz") { preciofinal = precio * cantidadlamp * 0.85 }
                else if (marca == "FelipeLamparas") {
                    preciofinal = precio * cantidadlamp * 0.9
                    preciofinal.toFixed([1])
                }
                else {
                    preciofinal = precio * cantidadlamp * 0.95
                    preciofinal = preciofinal.toFixed([1])
                }
    
                break;
    
            case 4:
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") { preciofinal = precio * cantidadlamp * 0.75 }
    
                else { preciofinal = precio * cantidadlamp * 0.8 }
    
                break;
            case 5:
                if (marca == "ArgentinaLuz") { preciofinal = precio * cantidadlamp * 0.6 }
                else {
                    preciofinal = precio * cantidadlamp * 0.7
                    preciofinal = preciofinal.toFixed([1])
                }
                break;
    
            default:
                preciofinal = 35 * cantidadlamp * 0.5
    
                break;
    
        }
         if (preciofinal > 120)
         {
             impuesto = preciofinal * 0.1
            preciofinal= preciofinal + impuesto;
            document.getElementById("txtIdprecioDescuento").value = preciofinal;
          alert ("IIBB Usted pago: " + impuesto)}
    
         else 
         {document.getElementById("txtIdprecioDescuento").value = preciofinal}*/


}
