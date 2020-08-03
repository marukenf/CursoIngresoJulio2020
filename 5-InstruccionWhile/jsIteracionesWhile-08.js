/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let suma = 0 ;
	let multi = 1;
	let respuesta="si";
	let flag=0;

 	do
    {
	numero = prompt ("Ingrese un nuevo numero");
	numero = parseInt (numero);

		if (numero <0)
		{	
			multi = multi * numero;
			flag=1;

		}
		else 
		{
			suma = suma + numero;
		}
		respuesta = prompt (" Desea ingresar otro numero, responda si o no");

		while (respuesta != "si" && respuesta!= "no") 
	    {
		alert ("respuesta incorrecta");
		respuesta = prompt (" Desea ingresar otro numero, responda si o no");
		}
		

    } while (respuesta !== "no")

	
	if(flag==0){
		multi=0;
	}
	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdProducto').value = multi;

}//FIN DE LA FUNCIÓN