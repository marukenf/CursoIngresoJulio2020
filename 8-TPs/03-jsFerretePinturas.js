/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//txtIdTemperatura

function FahrenheitCentigrados () 
{
	let temperatura;  
    let centigrados;

    temperatura = document.getElementById ("txtIdTemperatura").value;
    temperatura = parseFloat (temperatura);

    centigrados = (temperatura -32)/1.8;
    centigrados = centigrados.toFixed(2);

    alert (temperatura +" grados fahrenheit  en centigrados es  " + centigrados +"grados");
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let fahrenheit;
    
    temperatura = document.getElementById ("txtIdTemperatura").value;
    temperatura = parseFloat (temperatura);

    fahrenheit = temperatura*(9/5)+32;
    
    alert (temperatura + " grados centigrados en Fahrenheit es: " + fahrenheit.toFixed(2)+ "grados");
    
}
