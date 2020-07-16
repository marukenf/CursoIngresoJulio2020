/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

// entrada   txtIdImporte
// salida    txtIdResultado
function mostrarAumento()
{
	let importe;
	let importeConDescuento;

	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	importeConDescuento= importe*0.75;

	document.getElementById("txtIdResultado").value=importeConDescuento.toFixed(2);


}
