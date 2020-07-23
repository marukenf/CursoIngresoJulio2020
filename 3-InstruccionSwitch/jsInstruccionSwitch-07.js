// Enunciado:
// Al selecionar un destino , indicar el punto cardinal
//  de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

function mostrar()
{
	let destinoIngresado =document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche": alert (`su destino ingresado ${destinoIngresado} se encuentra en el Oeste`);
		break;
		case "Cataratas": alert (`su destino ingresado ${destinoIngresado} se encuentra en el Norte`);
		break;
		case "Mar del plata": alert (`su destino ingresado ${destinoIngresado} se encuentra en el Este`);
		break;
		case "Ushuaia": alert (`su destino ingresado ${destinoIngresado} se encuentra en el Sur`);
		break;
	}


}