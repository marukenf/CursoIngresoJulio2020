<<<<<<< HEAD
// Enunciado:
// Bienvenidos.
// Realizar el algoritmo que permita ingresar el nombre de un país,
//  cantidad de habitantes en millones entre 1 y 7000 (validar)
// la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
// hasta que el usuario quiera e informar al terminar el ingreso por document.write:
// a) La cantidad de temperaturas pares.
// b) El nombre del pais con menos habitantes
// c) la cantidad de paises que superan los 40 grados.
// d) el promedio de habitantes entre los paises ingresados
// f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

// Testeo con los siguientes valores
// (pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
// (pais=tunes;habitantes = 10; t =1 )
// (pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
// (pais=china;habitantes = 2000; t =-12 )

function mostrar() {
    let pais;
    let habitantes;
    let temperatura;
    let respuesta;
    let flagHabitantes = 0;
    let flagTemperatura = 0;
    let resto;
    let contadorTemperaturasPares = 0;
    let paisMenosHabitantes;
    let nombrePaisMenosHabitantes;
    let contadorPaisesMayorCuarenta = 0;
    let sumaHabitantes = 0;
    let promedioHabitantes;
    let temperaturaMinima;
    let paisTemperaturaMinima;
    let contador=0;

    do {

        pais = prompt("Ingrese el pais");
        while (!isNaN(pais)) {
            pais = prompt("Error. Ingrese el pais");
        }
        habitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones de personas, entre 1 y 7000"));
        while ((isNaN(habitantes)) || habitantes < 1 || habitantes > 7000) {
            habitantes = prompt("Error. Ingrese la cantidad de habitantes en millones de personas, entre 1 y 7000");
        }
        temperatura = parseInt(prompt("Ingrese la tempertura entre-50 y 50 grados"));
        while ((isNaN(temperatura)) || temperatura < -50 || temperatura > 50) {
            temperatura = parseInt(prompt("Error. Ingrese la tempertura entre-50 y 50 grados"));
        }

        resto = temperatura % 2;   // a) La cantidad de temperaturas pares.
        if (resto == 0) {
            contadorTemperaturasPares++;
        }

        if (flagHabitantes == 0 || habitantes < paisMenosHabitantes) {   // b) El nombre del pais con menos habitantes
            paisMenosHabitantes = habitantes;
            nombrePaisMenosHabitantes=pais;
            flagHabitantes=1;
        }
        if (temperatura>40 ) { // c) la cantidad de paises que superan los 40 grados.
            contadorPaisesMayorCuarenta++;
        }

         sumaHabitantes=sumaHabitantes+habitantes;   // d) el promedio de habitantes entre los paises ingresados

        

        if(flagTemperatura==0 ||temperatura<temperaturaMinima)  // f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
        {
            temperaturaMinima=temperatura;
            paisTemperaturaMinima=pais;
            flagTemperatura=1;
        }


        contador++;
        respuesta = prompt("Desea seguir ingresando datos 's' o 'n' ");
        
    } while (respuesta == 's');


     promedioHabitantes=sumaHabitantes/contador;   // d) el promedio de habitantes entre los paises ingresados

    document.write("  a) La cantidad de paises con temperaturas pares es: " + contadorTemperaturasPares+"</br>"+
                   "  b) El nombre del pais con menos habitantes es: " + nombrePaisMenosHabitantes +"</br>"+
                   "  c) la cantidad de paises que superan los 40 grados es: " +contadorPaisesMayorCuarenta+"</br>"+
                   "  d) el promedio de habitantes entre los paises ingresados es: "+promedioHabitantes+"</br>"+
                   "  f) la temperatura mínima ingresada es: " +temperaturaMinima+ "</br>" + 
                   "   y nombre del pais que registro esa temperatura es: " + paisTemperaturaMinima );
}


=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
