// al seleccionar un mes informar.
// si estamos en Invierno: "Abrigate que hace frio."
// si aún no llego el Invierno: "Falta para el invierno."
// si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
// ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.

function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Enero": alert ("Falta para el invierno.");
		case "Febrero": alert ("Falta para el invierno.");
		case "Marzo": alert ("Falta para el invierno.");
		case "Abril": alert ("Falta para el invierno.");
		case "Mayo": alert ("Falta para el invierno.");
		case "Junio": alert ("Falta para el invierno.");
		break;
		case "Julio": alert ("Abrigate que hace frio.");
		case "Agosto": alert ("Abrigate que hace frio.");
		break;
		case "Septiembre": alert ("Ya pasamos el frio, ahora calor!!!.");
		case "Octubre": alert ("Ya pasamos el frio, ahora calor!!!.");
		case "Noviembre": alert ("Ya pasamos el frio, ahora calor!!!.");
		case "Diciembre": alert ("Ya pasamos el frio, ahora calor!!!.");
		break;





	}



}//FIN DE LA FUNCIÓN