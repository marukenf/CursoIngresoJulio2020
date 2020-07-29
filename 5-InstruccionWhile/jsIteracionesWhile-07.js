/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador=0;
	let numeroIngresado;
	let suma=0;
	let respuesta="si";
	

	while(respuesta=="si"){
		numeroIngresado=parseInt(prompt("ingrese un número"));
		suma=suma+numeroIngresado;
		contador=contador+1
		respuesta=prompt("desea ingresar otro numero si/no");
	}
	
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=suma/contador;
}//FIN DE LA FUNCIÓN