// Bienvenidos.
// Realizar el algoritmo que permita iterar el ingreso 
// de dos datos de un vehiculo, un color (rojo verde o amarillo) 
// y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar
//  el ingreso por document.write:
// a) La cantida de rojos
// b) La cantidad de rojos con precio mayor a 5000
// c) La cantidad de vehiculos con precio inferior a 5000
// d) El promedio de todos los vehiculos ingresados.
// e) El mas caro y su color

function mostrar()
{
    let color;
    let valor;
    let respuesta;
    let contadorRojo=0;
    let contadorRojoMayorValor=0;
    let contadorMenorValor=0;
    let sumaValor=0;
    let promedio;
    let contador=0;
    let flag=0;
    let masCaro;
    let colorMasCaro;


    do{

        color=prompt("Ingrese el color 'rojo',  'verde' o 'amarillo' ");
        while(color!="rojo"&&color!="verde"&& color!="amarillo"){
            color=prompt("Error. Ingrese el color 'rojo',  'verde' o 'amarillo' ");
        }

        valor=parseInt(prompt("Ingrese el valor entre 0 y 10000"));
        while((isNaN(valor))||valor<0||valor>10000){
            valor=parseInt(prompt("Error. Ingrese el valor entre 0 y 10000"));
        }

        if(valor<=5000){
            contadorMenorValor++;
        }
        else{
            if(color=="rojo"){
                contadorRojoMayorValor++;
            }
        }

        if (color=="rojo"){
            contadorRojo++;
        }

        if(flag==0||valor>masCaro){
            colorMasCaro=color;
            masCaro=valor;
            flag=1;
        }

        sumaValor=sumaValor+valor;
        contador=contador+1;

        respuesta=prompt("Desea seguir ingresando datos 's' o 'n' ");

    }while(respuesta=='s');

     promedio= sumaValor/contador;
 
    document.write(" a) La cantidad de vehicilos de rojos es: "+ contadorRojo+ "</br>"+
     "b) La cantidad de vehiculos rojos con precio mayor a 5000 es: " +contadorRojoMayorValor+ "</br>"+
     "c) La cantidad de vehiculos con precio inferior a 5000 es: " + contadorMenorValor+ "</br>"+
     "d) El promedio de todos los vehiculos ingresados es: " + promedio + "</br>"+
     "e) El vehiculo mas caro cuesta  " + masCaro+ " y su color " + colorMasCaro);

    
}
