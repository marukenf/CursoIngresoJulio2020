// Enunciado:
// Bienvenidos (IF).
// Pedir dos números y mostrar el resultado:
// Si son iguales los muestro el cuadrado del numero.
// Si el primero divisible por el segundo, los resto,
// de lo contrario muestro solo el resto.
// si el resto es mayor a 3(tres ) informarlo por alert.

function mostrar() {
    let numeroUno;
    let numeroDos;
    let cuadrado;
    let resto;
    let resta;
    let mensajeA; 
    let mensajeB;
    let mensajeC;

    numeroUno = parseInt(prompt("Ingrese el primer numero"));
    numeroDos = parseInt(prompt("Ingrese el segundo numero"));

    if (numeroUno == numeroDos) {
        cuadrado = numeroUno * numeroDos;
        mensajeA = "Los numeros son iguales, el cuadrado es: " + cuadrado;
    }
    resto = numeroUno % numeroDos;

    if (resto == 0) {
        resta = numeroUno - numeroDos;
        mensajeB = "El primer numero es divisible por el segundo la resta da: " + resta;
    }
    else {
        if (resto > 3) {
            mensajeC = "El primer numero NO  es divisible por el segundo, el resto es mayor a 3 y da : " + resto;
        }
        else {
            mensajeC = "El primer numero NO  es divisible por el segundo, el resto es: " + resto;
        }
    }

    alert(mensajeA+mensajeB+mensajeC);
}
