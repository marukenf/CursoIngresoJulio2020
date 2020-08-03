// Bienvenidos (IF).
// Pedir dos números y mostrar el resultado:
// Si son iguales los muestro concatenados.
// Si el primero es mayor, los resto,
// de lo contrario los sumo.
// Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
// "la suma es xxx y supero el 10".

function mostrar()
{
    let numeroUno=parseInt(prompt("Ingrese el primer número"));
    let numeroDos=parseInt(prompt("Ingrese el segundo número"));
    let resta;
    let suma;

    if(numeroDos==numeroUno){
        alert("Los números ingresados son iguales "+ numeroUno+"  "+numeroDos);}
    else if(numeroUno>numeroDos){
        resta=numeroUno-numeroDos;
        alert("El primer número ingresado es mayor, la resta da; "+ resta);
        
    }
    else{
        suma=numeroUno+numeroDos;
        if(suma>10){
            alert(`la suma da: ${suma} y  supero a 10`);
        }
        else{

        alert("El primer número ingresado es menor, la suma da; "+ suma);}
    }
}
