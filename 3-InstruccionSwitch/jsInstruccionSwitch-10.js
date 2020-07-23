// una agencia de viajes nos piden informar si hacemos 
// viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar






function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	// en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
	if(estacionIngresada=="Invierno")
	{
		switch(destinoIngresado)
		{
		case "Bariloche":
			alert(`A ${destinoIngresado} en ${estacionIngresada} Se viaja`);
		break;
		case "Cataratas":  
		case "Cordoba": 	
		case "Mar del plata": 
			alert(`A ${destinoIngresado} en ${estacionIngresada}  No se viaja`);
		break;
		}
	}

	// en Verano: Se viaja a Mar del plata y Cataratas solamente
	if(estacionIngresada=="Verano")
	{
		switch(destinoIngresado)
		{
		case "Bariloche":	
		case "Cordoba": 
			alert(`A ${destinoIngresado} en ${estacionIngresada}  No se viaja`);
		break;
		case "Cataratas":  
		case "Mar del plata":
			alert(`A ${destinoIngresado} en ${estacionIngresada}  Se viaja`);
		break;
		}
	}


	// en Otoño: Se viaja a todos los destinos.
	if(estacionIngresada=="Otoño")
	{
		switch(destinoIngresado)
		{
		case "Bariloche":	
		case "Cataratas":  
		case "Cordoba": 	
		case "Mar del plata": 
			alert(`A ${destinoIngresado} en ${estacionIngresada}  Se viaja`);
		break;
		}
	}

// primavera: solo no se viaja a Bariloche
	if(estacionIngresada=="Primavera")
	{
		switch(destinoIngresado)
		{
		case "Bariloche":	alert(`A ${destinoIngresado} No se viaja`);
		break;
		case "Cataratas":  
		case "Cordoba": 	
		case "Mar del plata":
			 alert(`A ${destinoIngresado} Se viaja`);
		break;
		}
	}


}//FIN DE LA FUNCIÓN