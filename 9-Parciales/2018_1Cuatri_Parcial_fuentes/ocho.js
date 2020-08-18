<<<<<<< HEAD
// Bienvenidos.
// Realizar el algoritmo que permita iterar el ingreso de dos datos,
// una letra y un número entre -100 y 100 (validar)
//hasta que el usuario quiera e informar al terminar el ingreso por document.write:
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
    let contadorNegativos = 0;
    let sumaNegativos = 0;    
    let promedioNegativos=0;



    do {

        letra = prompt("Ingrese una letra");

        numero = parseInt(prompt("Ingrese un numero entre -100 y 1000 "));
        if (numero < -100 || numero > 100) {
            alert("número erroneo");
            numero = parseInt(prompt("Ingrese un numero entre -100 y 1000 "));
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
        else if (numero < 0) {
            contadorNegativos = contadorNegativos + 1;
            sumaNegativos = sumaNegativos + numero;
        }
        
        respuesta = prompt("Desea ingresar datos nuevamente 's' o 'n' ");

    } while (respuesta == 's');

    if (contadorNegativos > 0) { promedioNegativos = sumaNegativos / contadorNegativos; }
    




    document.write( "  a) La cantidad de números pares" + cantidadPares + "</br>"+
    "  b) La cantidad de números impares: " + cantidadImpares +  "</br>"+
    " c) La cantidad de ceros es: " + cantidadImpares +  "</br>"+ 
    " d) El promedio de todos los números positivos ingresados es "+ promedioNegativos + "</br>"+ 
    " e) La suma de todos los números negativos es: " + sumaNegativos +  "</br>"+ 
    " f) El número es maximo es : " + maximo + "y la letra del máximo es " +letraMax+
    " El número minimo es: " +minimo+ " y la letra del minimo es : " + letraMin);
}
=======
// Bienvenidos.
// Realizar el algoritmo que permita iterar el ingreso de dos datos,
// una letra y un número entre -100 y 100 (validar)
//hasta que el usuario quiera e informar al terminar el ingreso por document.write:
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

function mostrar()
{
    let respuesta;
    let numero;
    let letra;
    let flagPrimero=0;
    let maximo;
    let minimo;
    let letraMax;
    let letraMin;
    let cantidadPares=0;
    let cantidadImpares=0;
    let resto=0;
    let cantidadCeros=0;
    let contadorNegativos=0;
    let sumaNegativos=0;
    let sumaPositivos=0;
    let contadorPositivos=0;
    let promedioPositivos=0;
    
    

    do{
        numero = parseInt(prompt("Ingrese un numero entre -100 y 1000 "));
        if(numero<-100||numero>100){
            alert("número erroneo");
            numero = parseInt(prompt("Ingrese un numero entre -100 y 1000 "));
        }

        letra= prompt("Ingrese una letra");

        respuesta = prompt("Desea ingresar datos nuevamente ");
        if(flagPrimero==0){
            maximo=numero;
            minimo=numero;
            letraMax=letra;
            letraMin=letra;
            flagPrimero==1;}
        else if(numero>maximo){
            maximo=numero;
            letraMax=letra;
           }
        else if(numero<minimo){
            minimo=numero;
            letraMin=letra;
        }


        resto=numero%2;
        if(resto==0){
            cantidadPares=cantidadPares+1;
        }
        else{
            cantidadImpares=cantidadImpares+1;
        }

        if(numero==0) {
        cantidadCeros=cantidadCeros+1;
        }
        else if(numero<0){
            contadorNegativos=contadorNegativos+1;
            sumaNegativos=sumaNegativos+numero;

        }
        else{
            contadorPositivos=contadorPositivos+1;
            sumaPositivos=sumaPositivos+numero;
        }


    

        

    }while(respuesta=="si");


    if(cantidadNegativos>0)
	{promedioNegativos=sumaNegativos/cantidadNegativos;}
	if(cantidadPositivos>0)
	{promedioPositivos=sumaPositivos/cantidadPositivos;}
	
}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
