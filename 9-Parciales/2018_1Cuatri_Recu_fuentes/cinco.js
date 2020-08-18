<<<<<<< HEAD
// Bienvenidos.
// (SWITCH)pedir el ingreso de un día de la semana,
// si es fin de semana mostrar " buen finde",
// si es día hábil “ a trabajar”,
// si no es un día valido, también informarlo,
// usar una sola ventana alert.

function mostrar()
{
   let dia;
   dia=prompt("Ingrese un día de la semana");
   switch(dia){
       case "lunes": 
       case "martes": 
       case "miercoles":
       case "jueves":
       case "viernes":
           alert("a trabajar");
        break;

       case "sabado":
       case "domingo":
           alert("buen finde");
        break;

        default:
        alert("dia ingresado incorrecto");
     }

}
=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
