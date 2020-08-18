<<<<<<< HEAD
// Mostrar información
// Enunciado:
// Bienvenidos.
// (IF)Pedir dos números y mostrar el resultado:
// Si son iguales los muestro concatenados.
// Si el primero es mayor, los divido,
// de lo contrario los sumo.
// Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
// "la suma es xxx y es menor a 50".

function mostrar()
{
    let numeroUno=parseInt(prompt("Ingrese el primer número"));
    let numeroDos=parseInt(prompt("Ingrese el segundo número"));
    let division;
    let suma;

    if(numeroDos==numeroUno){
        alert("Los números ingresados son iguales "+ numeroUno+"  "+numeroDos);}
    else if(numeroUno>numeroDos){
        division=numeroUno/numeroDos;
        alert("El primer número ingresado es mayor, la division da; "+ division);
        
    }
    else{
        suma=numeroUno+numeroDos;
        if(suma<50){
            alert(`El primer número ingresado es menor, la suma da: ${suma} y no supera a 50`);
        }
        else{
        alert("El primer número ingresado es menor, la suma da: "+ suma);}
    }
}
=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
