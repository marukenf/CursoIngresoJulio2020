
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let flagJabon=0;
	let precioJabonMasCaro=0;
	let acumuladorBarbijo=0;
	let acumuladorAlcohol=0;
	let acumuladorJabon=0
	let contadorBarbijo=0;
	let contadorJabon=0;
	let contadorAlcohol=0;
	let cantidadJabonMasCaro=0;
	let fabricanteJabonMasCaro;
	let promedio;
	let mensajeA;
	let mensajeB;
	let mensajeC;


	do{

	tipo = prompt ("Ingrese que tipo de producto : barbijo, alcohol, jabon");
	while( (!isNaN(tipo)) || tipo!= "barbijo" && tipo!="jabon" && tipo != "alcohol")
    {       tipo = prompt ("Error, ingrese que tipo de producto : barbijo, alcohol, jabon");}

	precio=parseInt(prompt("ingrese el precio: "));
	while(isNaN(precio) || precio<0||precio>300)
		{	precio=parseInt(prompt("error, ingrese el precio: "));}

	cantidad=parseInt(prompt("Ingrese la cantidad de producto"));
	while(isNaN(cantidad) || cantidad<0 || cantidad>1000)
		{	cantidad=parseInt(prompt("Error, ingrese la cantidad de producto"));}

	marca=(prompt("ingrese el nombre de la marca"));
	while (!isNaN(marca))
		{	marca=(prompt("error,  el nombre de ingrese la marca"));}

	fabricante=(prompt("ingrese el fabricante"));
	while (!isNaN(fabricante))
		{	fabricante=(prompt("error, ingrese el fabricante"));}


	if(tipo=="Jabon")
		{   contadorJabon=contadorJabon+1;
		if(flagJabon==0||precioJabonMasCaro<precio)
		{
			cantidadJabonMasCaro=cantidad;
			fabricanteJabonMasCaro=fabricante;
			flagJabon=1;
			acumuladorJabon=acumuladorJabon+cantidad;
		}

		}
		else if (tipo=="barbijo") 
		{
		contadorBarbijo=contadorBarbijo+1;
		acumuladorBarbijo=acumuladorBarbijo+cantidad;
		}
		else{//tipo alcohol
		acumuladorAlcohol=acumuladorAlcohol+cantidad;
		contadorAlcohol=contadorAlcohol+1;
		}

		respuesta=prompt("desea ingresar mas datos's' o 'n' ");
		
	}while(respuesta=='s');

	if(acumuladorBarbijo>acumuladorJabon&&acumuladorBarbijo>acumuladorAlcohol){//mayor cantodad barbijo
		promedio=acumuladorBarbijo/contadorBarbijo;
		mensajeB= " B- el producto con mayor cantidad es el barbijo y el promedio por compra es : " +promedio;
	}
	if(acumuladorAlcohol>acumuladorJabon&&acumuladorAlcohol>acumuladorBarbijo){//mayor cantidad alcohol
		promedio=acumuladorAlcohol/contadorAlcohol;
		mensajeB=" B_ el producto con mayor cantidad es el alcohol y el promedio por compra es : " +promedio;
	}
	if(acumuladorJabon>acumuladorBarbijo&&acumuladorJabon>acumuladorAlcohol){//mayor cantidad jabon
		promedio=acumuladorBarbijo/contadorBarbijo;
		mensajeB=" B-el producto con mayor cantidad es el jabon y el promedio por compra es : " +promedio;
	}
	
	if(contadorJabon>0){
	mensajeA= " A-el fabricante de los jabones mas caros es "+fabricanteJabonMasCaro+"y su cantidad es "+
	 cantidadJabonMasCaro;
	}
	else{
		mensajeA=" A- no se compraron jabones"
	}
	mensajeC="la cantidad de barbijos que se compraron es: "+ acumuladorBarbijo;

	alert(mensajeA+ mensajeB+mensajeC);


}

