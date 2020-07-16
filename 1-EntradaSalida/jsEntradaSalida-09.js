/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


//txtIdSueldo
//txtIdResultado

function mostrarAumento()
{
	let sueldo;
	let sueldoConAumento;

	sueldo= document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo);

	sueldoConAumento = sueldo * 1.1;

	document.getElementById("txtIdResultado").value= sueldoConAumento.toFixed(2);



}
