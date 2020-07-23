// una agencia de viajes debe sacar las tarifas de los viajes , 
// se cobra $15.000 por cada estadia como base, se pide el ingreso de 
// una estacion del año y localidad para vacacionar para poder calcular el precio final

function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let costoBase=15000;
	let costoFinal;


	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	// en Invierno: bariloche tiene un aumento del 20% cataratas 
    // y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
	if(estacionIngresada=="Invierno")
	{
		switch(destinoIngresado)
		{
		case "Bariloche":
		case "Mar del plata": 
			costoFinal=costoBase*1.2;
			alert(`su costo final es ${costoFinal}`);
		break;
		
		case "Cataratas":
		case "Cordoba": 
			costoFinal=costoBase*0.9;
			alert(`su costo final es ${costoFinal}`);
		break;
		 
		}
	}

	// en Verano: bariloche tiene un descuento del 20% cataratas y 
    // Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

	if(estacionIngresada=="Verano")
	{
		switch(destinoIngresado)
		{
		case "Bariloche": 
			costoFinal=costoBase*0.8;
			alert(`su costo final es ${costoFinal}`);
		break;
		
		case "Cataratas": 
		case "Cordoba":
			costoFinal=costoBase*1.1;
			alert(`su costo final es ${costoFinal}`);
		break;

		case "Mar del plata": 
			costoFinal=costoBase*1.2;
			alert(`su costo final es ${costoFinal}`);
		break;
		}
	}

	// en Otoño y Primavera: bariloche tiene un aumento del 10% 
	// cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10%
	//  y Cordoba tiene el precio sin descuento
 
	if(estacionIngresada=="Primavera" ||estacionIngresada =="Otoño")
	{
		switch(destinoIngresado)
		{
		case "Bariloche":
		case "Mar del plata":
		case "Cataratas": 
			costoFinal=costoBase*1.1;
			alert(`su costo final es ${costoFinal}`);
		break;

		case "Cordoba": 
			costoFinal=costoBase;
			alert(`su costo final es ${costoFinal}`);
		break;
		}
	}
}