// al seleccionar un mes informar.
// si es Febrero: " Este mes no tiene más de 29 días."
// si NO es Febrero: "Este mes tiene 30 o más días"

function mostrar()
{
	let mesDelAnio;
	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Febrero": alert ("Este mes tiene 29 días");
		break;
		default: alert ("Este mes tiene 30 o más días");
		
	}
	


}//FIN DE LA FUNCIÓN