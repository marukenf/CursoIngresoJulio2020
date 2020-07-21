// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

function mostrar()
{
	let numero;
	numero = Math.random()*(10-1)+1;
    numero = parseInt (numero);
	alert("su numero random es "+ numero);

	
}//FIN DE LA FUNCIÓN