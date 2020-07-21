// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
//  mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'


// 	txtIdEdad
//  estadoCivil    Soltero, Casado, Divorciado


function mostrar()
{
	let edad;
	let estadoCivil;

	
    edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (estadoCivil=="Soltero" && edad<18)
	{
		alert("Es muy pequeño para NO ser soltero")
	}
	


}//FIN DE LA FUNCIÓN