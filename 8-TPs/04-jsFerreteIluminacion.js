
// ALUMNO VIAZZO PERRONE JUAN SEBASTIAN - TP 4 SWITCH IF
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


    //SWITCH IF
       
       
        var cantidadlamp;
        var marca;
        var preciofinal;
        var descuento;
        var preciolamp;
        var condescuento;
        var ingresobruto;
    
        cantidadlamp = document.getElementById("txtIdCantidad").value;
        cantidadlamp = parseInt(cantidadlamp);
        marca = document.getElementById("Marca").value;
        preciolamp=35;

    
        switch (cantidadlamp) 
        {
            case 3:
                switch (marca)
                {
                    case "ArgentinaLuz":    
                        descuento=15;
                    break;
                    case "FelipeLamparas": 
                        descuento=10;
                    break;
                    default:
                        descuento=5;
                    break;
            }
            break;
            case 4:
                switch (marca) 
                {
                    case "ArgentinaLuz":
                        descuento=25
                    break;
                    case "FelipeLamparas":
                        descuento=25;
                    break;
                    default:
                        descuento=20
                    break;
                }
            break;
            case 5:
                switch (marca) 
                {
                    case "ArgentinaLuz":
                    descuento=40;
                    break;
                    default:
                    descuento=30;
                    break;
                }
            break;
            case 1:
            case 2:
                descuento=0;
            break;
            default:
                descuento=50;
            break;
        
        }
         
        condescuento = preciolamp * (descuento/100);
        preciofinal = preciolamp - condescuento;
        preciofinal = cantidadlamp * preciofinal;
        preciofinal = parseFloat(preciofinal);

            if (preciofinal >= 120)
            {
                ingresobruto=preciofinal*0.1;
                ingresobruto=ingresobruto.toFixed(1)
                ingresobruto=parseFloat(ingresobruto)
                preciofinal=preciofinal+ingresobruto;
                alert("Usted pago " + ingresobruto +     " de IIBB")
                
            }
           
            document.getElementById("txtIdprecioDescuento").value = preciofinal
            












}


/*

//SWITCH IF
       
       
var cantidadlamp;
var marca;
var preciofinal;
var descuento;
var preciolamp;
var condescuento;
var ingresobruto;

cantidadlamp = document.getElementById("txtIdCantidad").value;
cantidadlamp = parseInt(cantidadlamp);
marca = document.getElementById("Marca").value;
preciolamp=35;


switch (cantidadlamp) 
{
    case 3:
        if (marca=="ArgentinaLuz")
        {
            descuento=15;
        }
        else
        {
            if (marca=="FelipeLamparas") 
            {
                descuento=10;
            }
            else
            {
                descuento=5;
            }
        }
    break;
    case 4:
        if (marca=="ArgentinaLuz" || marca=="FelipeLamparas")
        {
            descuento=25;
        }
        else
        {
            descuento=20;
        }
    break;
    case 5:
        if (marca=="ArgentinaLuz")
        {
            descuento=40;
        }
        else 
        {
            descuento=30;
        }
    break;
    case 1:
    case 2:
        descuento=0;
     break;
    default:
        descuento=50;
        break;

}
 
condescuento = preciolamp * (descuento/100);
preciofinal = preciolamp - condescuento;
preciofinal = cantidadlamp * preciofinal;
preciofinal = parseFloat(preciofinal);

    if (preciofinal >= 120)
    {
        ingresobruto=preciofinal*0.1;
        ingresobruto=ingresobruto.toFixed(1)
        ingresobruto=parseFloat(ingresobruto)
        preciofinal=preciofinal+ingresobruto;
        alert("Usted pago " + ingresobruto +     " de IIBB")
        
    }
   
    document.getElementById("txtIdprecioDescuento").value = preciofinal
    




*/








































/*    //IF IF

    var cantidadlamp;
    var descuento;
    var preciofinal;
    var marca;
    var impuesto;
    var preciolamp;
    var ingresobruto;
    var condescuento;


    cantidadlamp = document.getElementById("txtIdCantidad").value;
    cantidadlamp = parseInt(cantidadlamp);
    marca = document.getElementById("Marca").value;
    preciolamp = 35;

    if (cantidadlamp >= 6) 
    {
       descuento = 50;
    } 
    else
    {
        if (cantidadlamp==5) 
        {
            if (marca == "ArgentinaLuz") 
            {
                descuento = 40;         
            }
            else
            {
                descuento = 30
            }      
        }
        else
        {
            if (cantidadlamp==4) 
            {
             if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
             {
                 descuento = 25
             }   
             else
             {
                 descuento = 20
             }
            }
            else
            {
                if (cantidadlamp==3) 
                {
                 if (marca=="ArgentinaLuz") 
                 {
                    descuento=15;   
                 }
                 else
                 {
                    if (marca=="FelipeLamparas") 
                    {
                        descuento=10; 
                    }
                    else
                    {
                        descuento=5;
                    }
                 }
                }
                 else
                 {
                   descuento=0;  
                 }
            }
        }
    }

    condescuento = preciolamp * (descuento/100);
    preciofinal = preciolamp - condescuento;
    preciofinal = cantidadlamp * preciofinal;
    preciofinal = parseFloat(preciofinal);

    if (preciofinal >= 120) 
    {
        
        ingresobruto=preciofinal*0.1;
        ingresobruto=ingresobruto.toFixed([1])
        ingresobruto=parseFloat(ingresobruto)
        preciofinal=preciofinal*1.1;
        preciofinal=preciofinal.toFixed([1])
        alert("Usted pago " + ingresobruto +     " de IIBB")
        document.getElementById("txtIdprecioDescuento").value = preciofinal


    }
        else
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal

    
        }
}



  // IF SWITCH

    var cantidadlamp;
    var marca;
    var descuento;
    var preciofinal;
    var iibb;
    var condescuento;
    var preciolamp;


    cantidadlamp = document.getElementById("txtIdCantidad").value;
    cantidadlamp = parseInt(cantidadlamp);
    marca = document.getElementById("Marca").value;

    preciolamp = 35


    if(cantidadlamp >= 6)
    {
        descuento = 50
    }

    {
        if(cantidadlamp==5)
        {
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;

                default:
                    descuento = 30;
                    break;
            }
        }
        {
            if(cantidadlamp==4)
            {
                switch (marca) 
                {
                    case "ArgentinaLuz":
                        descuento = 25;
                        break;
                    case "FelipeLamparas":
                        descuento = 25;
                        break;
                    default:
                        descuento = 20;
                        break;
                }
            }
            else
            {
                if(cantidadlamp==3)
                {
                    switch (marca) 
                    {
                        case "ArgentinaLuz":
                            descuento = 15
                            break;
                        case "FelipeLamparas":
                            descuento = 10
                            break;
                        default:
                            descuento = 5
                            break;
                    }
                }else
                {
                    if (cantidadlamp==2 || cantidadlamp==1)
                    {
                        descuento = 0
                    }
                }
            }
        }
    }

    condescuento = preciolamp * (descuento/100);
    preciofinal = preciolamp - condescuento;
    preciofinal = cantidadlamp * preciofinal;
    preciofinal = parseInt(preciofinal);

    if (preciofinal >= 120) 
    {
        
        iibb=preciofinal*0.1;
        iibb=iibb.toFixed([1])
        iibb=parseFloat(iibb)
        preciofinal=preciofinal*1.1;
        preciofinal=preciofinal.toFixed([1])
        alert("Usted pago " + iibb +     " de IIBB")
        document.getElementById("txtIdprecioDescuento").value = preciofinal


    }
        else
        {
            document.getElementById("txtIdprecioDescuento").value = preciofinal

        }
}


*/





    

