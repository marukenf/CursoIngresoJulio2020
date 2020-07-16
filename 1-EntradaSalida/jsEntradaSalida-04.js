/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;

	nombre = prompt ("ingrese su nombre"); //ingreso a la variable nombre lo que ingresa el usuario

	document.getElementById("txtIdNombre").value=nombre; // muestro en la caja de texto, lo ingresado por el usuario

	
}

