<<<<<<< HEAD
// Bienvenidos (SOLO WITCH).
// una empresa de viajes le solicita ingresar que continente le gustaria visitar
// y la cantidad de días , la oferta dice que por día se cobra $100 , 
// que se puede pagar de todas las maneras



// cualquier otro continente tiene un recargo del 20%


//INCOMPLETO FALTAS CASILLAS DE TEXTO PARA INGRESAR DATOS//SERIA ALGO ASI....


function mostrar()
{
    let continente;
    let cantidadDias;
    let formaPago;
    let descuentoContimente=0;
    let descuentoFormaPago=0;
    let recargo=0;
    let costoDia=100;

    
    cantidadDias=prompt("ingrese la cantidad de días");
    formaPago=prompt("ingrese la forma de pago, debito");
    continente=document.getElementById("").value;



    switch(continente){
        case "América":   // Si es América tiene un 50% de descuento y si ademas paga por débito 
                          // se le agrega un 10% mas de descuento
            descuentoContimente=50;
            switch(formaPago){
                case "debito":
                    descuentoFormaPago=20;
                break;
                default:
                    descuentoFormaPago=0;
            }
        break;

        case "Asia":
            recargo=20
        break;

        case "Europa":    // Si es Europa tiene un 20% de descuento y si ademas paga por
                          //  débito se le agrega un 15% , por mercadoPago un 10% y
                          // cualquier otro medio 5%

            descuentoContimente=20;
            switch(formaPago){
                case "debito":
                    descuentoFormaPago=15;
                case "mercadopago":
                    descuentoFormaPago=10
                break;
                default:
                    descuentoFormaPago=5;
            }
        break;

        case "África":   // Si es África tiene un 60% de descuento y si además paga
                         // por mercadoPago 
                         // o efectivo se le agrega un 15% mas de descuento
            descuentoContimente=60;
            switch(formaPago){
                case "mercadoPago":
                case "efectivo":
                    descuentoFormaPago=15;
                break;
                default:
                    descuentoFormaPago=0;
            }
        break;

        case "Oceanía":
            recargo=20;
        break;

    }


    pagoPorDias=cantidadDias*costoDia;
    pagoTotal= pagoPorDias- descuentoContimente - descuentoFormaPago +recargo ;



}
=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
