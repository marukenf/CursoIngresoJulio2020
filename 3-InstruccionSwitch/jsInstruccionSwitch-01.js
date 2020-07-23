// al seleccionar un mes informar.
// si es Enero: "que comiences bien el año!!!."
// si es Marzo: "a clases!!!."
// si es Julio: "se vienen las vacaciones!!!."
// si es Diciembre: "Felices fiesta!!!."

function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	mesDelAnio = document.getElementById("txtIdMes").value;

/* 	if(mesDelAnio == "Enero")
	{	alert (mesDelAnio + "que comiences bien el año!!!");   	}
	else if(mesDelAnio == "Marzo")
	{	alert ( mesDelAnio+ "a clases!!!.");   	}
	else if(mesDelAnio == "Julio")
	{    alert ("se vienen las vacaciones!!!.");    }
	else if(mesDelAnio == "Diciembre")
	{	alert ("Felices fiesta!!!.");	} */


	switch(mesDelAnio)
	{
		case "Enero": alert (mesDelAnio + " que comiences bien el año!!!");
		break;
		case "Marzo": alert ( mesDelAnio + "a clases!!!.");
		break;
		case "Julio":  alert ( mesDelAnio + " se vienen las vacaciones!!!.");
		break;
		case "Diciembre": alert ( mesDelAnio + " Felices fiesta!!!.");
		break;
	}
	

}//FIN DE LA FUNCIÓN