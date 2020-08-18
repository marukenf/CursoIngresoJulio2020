<<<<<<< HEAD
// Bienvenidos (IF).
// Pedir dos números y mostrar el resultado:
// Si son iguales los muestro concatenados.
// Si el primero es mayor, los resto,
// de lo contrario los sumo.
// Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
// "la resta es xxx y superó el 10".

function mostrar() {

    let numeroUno = parseInt(prompt("Ingrese el primer número"));
    let numeroDos = parseInt(prompt("Ingrese el segundo número"));
    let resta;
    let suma;

    if (numeroDos == numeroUno) {    // Si son iguales los muestro concatenados.
        alert("Los números ingresados son iguales " + numeroUno + " y " + numeroDos);
    }
    else if (numeroUno > numeroDos) {  // Si el primero es mayor, los resto,

        resta = numeroUno - numeroDos;

        if (resta > 10) {
            alert(`la resta da: ${resta} y  supero a 10`);
        }
        else {

            alert("El primer número ingresado es mayor, la resta da; " + resta);

        }

    }
    else { // de lo contrario los sumo.
        suma = numeroUno + numeroDos;
        alert("El primer número ingresado es menor, la suma da; " + suma);
    }
}

=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
