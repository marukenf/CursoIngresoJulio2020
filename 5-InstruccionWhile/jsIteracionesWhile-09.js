/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let flag=0;
	let numero;
	let maximo;
	let minimo;
	let respuesta ;

	
    do {
	
		numero = parseInt(prompt ("Ingrese un numero"));
		if (flag==0){
			maximo=numero;
			minimo=numero;
			flag=1;
		}
		
		else if (numero < minimo)
		{	
			minimo = numero;
		}
		else if (numero> maximo)
		{
			maximo = numero;
		}

		respuesta = prompt (" Desea ingresar otro numero, responda si o no");
		
	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value=maximo;
	document.getElementById("txtIdMinimo").value=minimo;
}