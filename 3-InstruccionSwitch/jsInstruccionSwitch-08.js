// Al seleccionar un destino informar si 
// hace FRIO o CALOR en ese destino

function mostrar()
{
	let destinoIngresado =document.getElementById("txtIdDestino").value;

	// switch(destinoIngresado)
	// {
	// 	case "Bariloche":
	// 	case "Ushuaia":
	// 		alert (`En su destino ingresado ${destinoIngresado} hace frío`);
		
	// 	break;
	// 	case "Mar del plata": 
	// 	case "Cataratas":
	// 		alert (`En su destino ingresado ${destinoIngresado} hace calor`);
	// 	break;
	// }

	if(destinoIngresado=="Bariloche"||destinoIngresado=="Ushuaia"){
		alert (`En su destino ingresado ${destinoIngresado} hace frío`);
	}
	else {
		alert (`En su destino ingresado ${destinoIngresado} hace calor`);
	}

}