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

	else if(estacionIngresada=="Verano")
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
 
	else
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



// function mostrar()
// {
// 	const TARIFA = 15000;
// 	let destino;
// 	let estacion; 
// 	let porcentaje;
// 	let preciofinal; 

// 	destino = document.getElementById("txtIdDestino").value; 
// 	estacion = document.getElementById("txtIdEstacion").value;

// 	switch (estacion) {
// 		case "Invierno":
// 			if (destino == "Bariloche"){
// 				porcentaje = 20;
// 			}
// 			else if (destino == "Cataratas" || destino == "Cordoba"){
// 			    porcentaje = - 10;
// 			}
// 			else {
// 				porcentaje = - 20;
// 			}
// 			break;
// 		case "Verano":
// 			if (destino == "Bariloche"){
// 				porcentaje = - 20;
// 			}
// 			else if (destino == "Cataratas" || destino == "Cordoba") {
// 				porcentaje = 10;
// 			}
// 			else {
// 				porcentaje = 20;
// 			}
// 			break;
// 		case "Otoño":
// 		case "Primavera":
// 			if (destino =="Bariloche"){
// 				porcentaje = 10;
// 			}
// 			else if (destino == "Cataratas" || destino == "Mar del plata"){
// 				porcentaje = 10;
// 			}
// 			else {
// 				porcentaje = 0;
// 			}
// 			break;
// 	}
// 	preciofinal = TARIFA + TARIFA * porcentaje/100;
	
// 	alert("Eligío "+destino+" En "+estacion+" El costo del viaje es $"+preciofinal);
	
	

