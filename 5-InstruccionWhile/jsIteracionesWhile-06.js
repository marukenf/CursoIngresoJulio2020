//txtIdSuma//txtIdPromedio

function mostrar()
{
	let contador=0;
	let numeroIngresado;
	let suma=0;


	while(contador<5){
		numeroIngresado=parseInt(prompt("ingrese un número"));
		suma=suma+numeroIngresado;
		contador=contador+1;
	}
	
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=suma/5;
}//FIN DE LA FUNCIÓN