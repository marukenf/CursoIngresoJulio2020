// Bienvenidos (SOLO SWITCH).
// Una empresa de viajes le solicita ingresar que continente le gustaria visitar
// y la cantidad de días , la oferta dice que por día se cobra $100 , 
// que se puede pagar de todas las maneras
// Si es América tiene un 15% de descuento y si ademas paga por débito
//  se le agrega un 10% mas de descuento
// Si es África u Oceania tiene un 30% de descuento y si además paga 
// por mercadoPago o efectivo se le agrega un 15% mas de descuento
// Si es Europa tiene un 20% de descuento y si ademas paga por débito 
// se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
// cualquier otro continente tiene un recargo del 20%
// en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque

function mostrar()
{
    let continente;
    let cantidadDias=10;
    let formaPago;
    let descuentoContimente=0;
    let descuentoFormaPago=0;
    let descuento=0;
    let recargoContinente=0;
    let costoDia=100;
    let pagoTotal;
    let recargoCheque=0;

    
    //cantidadDias=prompt("ingrese la cantidad de días");
    formaPago=document.getElementById("selecPago").value;
    continente=document.getElementById("selecContinente").value;



    switch(continente){
        case "America":   
            descuentoContimente=15;
            switch(formaPago){
                case "Cheque":
                    recargoCheque=15;
                break;
                case "Débito":
                    descuentoFormaPago=10;
                break;
                default:
                    descuentoFormaPago=0;
            }
        break;

        case "Asia":            
            recargoContinente=20;
            switch(formaPago){
                case "Cheque":
                    recargoCheque=15;
                break;}
        break;

        case "Europa":  
            descuentoContimente=20;
            switch(formaPago){
                case "Cheque":
                    recargoCheque=15;
                break;
                case "Débito":
                    descuentoFormaPago=15;
                case "MercadoPago":
                    descuentoFormaPago=10
                break;
                default:
                    descuentoFormaPago=5;
            }
        break;

        case "África":   
        case "Oceania":
            descuentoContimente=30;
            switch(formaPago){
                case "Cheque":
                    recargoCheque=15;
                break;
                case "MercadoPago":
                case "Efectivo":
                    descuentoFormaPago=15;
                break;
                default:
                    descuentoFormaPago=0;
            }
        break;

    }
    

    pagoPorDias=cantidadDias*costoDia;
    descuento=descuentoContimente+descuentoFormaPago;
    recargo=recargoCheque+recargoContinente;
    
    descuento=pagoPorDias*descuento/100;
    recargo=pagoPorDias*recargo/100;
    pagoTotal= pagoPorDias- descuento +recargo ;


    alert(pagoTotal);


}

