/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada= prompt("Ingrese la clave");
	while(claveIngresada!=="utn750")
	{
		alert("Clave incorrecta, ingrese nuevamente la clave");
		claveIngresada= prompt("Ingrese la clave");
	}
}//FIN DE LA FUNCIÓN
