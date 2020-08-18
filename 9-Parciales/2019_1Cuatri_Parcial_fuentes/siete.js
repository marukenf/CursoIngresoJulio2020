<<<<<<< HEAD
// Bienvenidos.
// Realizar el algoritmo que permita el ingreso por prompt 
// de las alturas en centimetros(validar entre 0 y 250) , el sexo. 
// (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
// a) El promedio de las alturas totales.
// b) La altura más baja y el sexo de esa persona.
// c) La cantidad de muheres que su altura supere los 190 centimetros.

function mostrar()
{
    let altura;
    let sexo;
    let flagPrimera=0;
    let sumaAltura=0;
    let promedioAltura;
    let alturaMasBaja;
    let sexoMasBaja;
    let contadorMujeresMuyAltas=0;
    let mensajeA;
    let mensajeB;
    let mensajeC;

   

    for(i=0;i<5;i++){

        altura=parseInt(prompt("Ingrese la altura en centimetros entre 0 y 250"));
        while(isNaN(altura)|| altura<=0 || altura>250) {
            altura=parseInt(prompt("Error. Ingrese  nuevamente la altura en centimetros entre 0 y 250"));
        }

        sexo =prompt("Ingrese el sexo 'f' o 'm' ");
        while((!isNaN(sexo))|| sexo!='m' && sexo !='f') {
            sexo=prompt("Error. Ingrese nuevamante el sexo 'f' o 'm' ");
        }

        if(flagPrimera==0|| altura<alturaMasBaja){  // b) La altura más baja y el sexo de esa persona.
            alturaMasBaja=altura;
            sexoMasBaja=sexo;
        }

        if(sexo=='f' && altura>190){
            contadorMujeresMuyAltas=contadorMujeresMuyAltas+1;   // c) La cantidad de muheres que su altura supere los 190 centimetros.
        }
        sumaAltura=sumaAltura+altura;    // a) El promedio de las alturas totales.


     }

    promedioAltura=sumaAltura/5;        // a) El promedio de las alturas totales.

    mensajeA="  A-  El promedio de las alturas totales es: " + promedioAltura;
    mensajeB="  B-  La altura más baja es: " + alturaMasBaja+  " y el sexo de esa persona es: "+sexoMasBaja;
    if(contadorMujeresMuyAltas>0){
        mensajeC= "  C-  La cantidad de mujeres que su altura supere los 190 centimetros son: " + contadorMujeresMuyAltas;
    }
    else{
        mensajeC= "  C-  No se ingresaron mujeres con altura superior a 190 cm."
    }

    alert(mensajeA+mensajeB+mensajeC);

}
=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
