/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	
	numero=(parseInt(prompt("ingrese un nuemro entre 0 y 10, sin incluirlos")));

	if(numero<0||numero>=10)
	{
		alert("Ingreso un número incorrecto");
		numero=(parseInt(prompt("ingrese un nuemro entre 0 y 10, sin incluirlos")));
	}
	else{
		document.getElementById("txtIdNumero").value = numero;
	}
}//FIN DE LA FUNCIÓN