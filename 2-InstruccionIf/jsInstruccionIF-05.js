//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);
	
	// if (edad<=13 || edad>=17)
	// {
	// alert("NO Es adolescente ");
	// }


	if (!(edad>=13 && edad<=17))
	{
	alert("NO Es adolescente ");
	}

}//FIN DE LA FUNCIÓN