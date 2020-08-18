<<<<<<< HEAD
// Enunciado:
// Bienvenidos.
// Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
// a) La cantidad de números pares.
// b) La cantidad de números impares.
// c) La cantidad de ceros.
// d) El promedio de todos los números positivos ingresados.
// e) La suma de todos los números negativos.
// f) El número y la letra del máximo y el mínimo.

// Testeo con los siguientes datos
// ( d , -150(mal) , -50(bien))
// ( z , 0)
// ( g , 20)
// ( a , 150(mal) , 0(bien))
// ( b , 3)
// ( k , 7)

function mostrar() {
    
    let respuesta;
    let numero;
    let letra;
    let flagPrimero = 0;
    let maximo;
    let minimo;
    let letraMax;
    let letraMin;
    let cantidadPares = 0;
    let cantidadImpares = 0;
    let resto = 0;
    let cantidadCeros = 0;
    let contadorPositivos = 0;
    let sumaPositivos = 0;    
    let promedioPositivos=0;



    do {

        letra = prompt("Ingrese una letra");

        numero = parseInt(prompt("Ingrese un numero entre -100 y 1000 "));
        if (numero < -100 || numero > 100) {
            numero = parseInt(prompt("Error. Ingrese nuevamente un numero entre -100 y 1000 "));
        }
            
        if (flagPrimero == 0) {
            maximo = numero;
            minimo = numero;
            letraMax = letra;
            letraMin = letra;
            flagPrimero = 1;
        }
        if (numero > maximo) {
            maximo = numero;
            letraMax = letra;
        }
        else if (numero < minimo) {
            minimo = numero;
            letraMin = letra;
        }

        resto = numero % 2;
        if (resto == 0) {
            cantidadPares = cantidadPares + 1;
        }
        else {
            cantidadImpares = cantidadImpares + 1;
        }

        if (numero == 0) {
            cantidadCeros = cantidadCeros + 1;
        }
        else if (numero > 0) {
            contadorPositivos = contadorPositivos + 1;
            sumaPositivos = sumaPositivos + numero;
        }
        
        respuesta = prompt("Desea ingresar datos nuevamente 's' o 'n' ");

    } while (respuesta == 's');

    if (contadorPositivos > 0) { promedioPositivos = sumaPositivos / contadorPositivos; }
    




    document.write( "  a) La cantidad de números pares" + cantidadPares + "</br>"+
    "  b) La cantidad de números impares: " + cantidadImpares +  "</br>"+
    " c) La cantidad de ceros es: " + cantidadImpares +  "</br>"+ 
    " d) El promedio de todos los números positivos ingresados es "+ promedioPositivos + "</br>"+ 
    " e) La suma de todos los números positivos es: " + sumaPositivos +  "</br>"+ 
    " f) El número es maximo es : " + maximo + "y la letra del máximo es " +letraMax+  "</br>"+ 
    " El número minimo es: " +minimo+ " y la letra del minimo es : " + letraMin);
}
=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
