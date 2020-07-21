/* Enunciado:
Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita". */
// id txtIdEdad
function mostrar()
{
	let edad;

	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt (edad);
	// edad = parseInt(document.getElementById("txtIdEdad").value);     otra forma
	if (edad==15)
	{
	alert("Niña bonita");
	}

	

}//FIN DE LA FUNCIÓN