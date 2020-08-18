<<<<<<< HEAD
// Bienvenidos.
// Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual 
// debe ser entre 1 y 100 (validar),
// la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera 
// e informar al terminar el ingreso por document.write:
// a) La cantidad de temperaturas pares.
// b) La marca del producto más pesado
// c) La cantidad de productos que se conservan a menos de 0 grados.
// d) El promedio del peso de todos los productos.
// f) El peso máximo y el mínimo.


function mostrar() {

    let marca;
    let peso;
    let temperatura;
    let respuesta;
    let flagMarca = 0;
    let resto;
    let cantidadTemperaturasPares = 0;
    let marcaProductoMasPesado;
    let cantidadProductosCeroGrados = 0;
    let sumaPeso=0;
    let contadorPeso = 0;
    let promedioPeso;
    let pesoMaximo;
    let pesoMinimo;
    let flagPeso = 0;

    do {
        marca = prompt("ingrese la marca de producto");

        peso = parseInt(prompt("Ingrese el peso del producto entre 1 y 100"));
        while ((isNaN(peso)) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("Error. Ingrese el peso del producto entre 1 y 100"));
        }

        temperatura = parseInt(prompt("Ingrese la temperatura del producto entre -30 y 30"));
        while ((isNaN(temperatura)) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Ingrese la temperatura del producto entre -30 y 30"));
        }

        resto = temperatura % 2; //punto A
        if (resto == 0) {
            cantidadTemperaturasPares++;
        }

        if (flagMarca == 0 || marcaProductoMasPesado < peso) {// punto b La marca del producto más pesado
            marcaProductoMasPesado = marca;
            flagMarca = 1;
        }

        if (temperatura <0) { //punto c La cantidad de productos que se conservan a menos de 0 grados
            cantidadProductosCeroGrados=cantidadProductosCeroGrados+1;
        }

        sumaPeso = sumaPeso + peso;   //punto d
        contadorPeso = contadorPeso + 1;

        if (flagPeso == 0) {
            pesoMaximo = peso;
            pesoMinimo = peso;
            flagPeso = 1;
        }
        else if (flagPeso == 1) {   //punto e
            if (pesoMaximo < peso) {
                pesoMaximo = peso;
            }
            else if (peso < pesoMinimo) {
                pesoMinimo=peso;
            }
        }

        respuesta = prompt("Desea seguir ingresando datos 's' o 'n' ");

    } while (respuesta == 's');

    promedioPeso = sumaPeso / contadorPeso;  //punto d


    document.write(
        "  a) La cantidad de temperaturas pares." + cantidadTemperaturasPares + "</br>"+
        "  b) La marca del producto más pesado es : " +marcaProductoMasPesado+ "</br>"+
        "  c) La cantidad de productos que se conservan a menos de 0 grados es: "+ cantidadProductosCeroGrados+"</br>"+
        "  d) El promedio del peso de todos los productos: " +promedioPeso +"</br>"+
        "  f) El peso máximo es:  " + pesoMaximo+  "   y el peso mínimo es:  "+ pesoMinimo );

}
=======
function mostrar()
{
 
}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
