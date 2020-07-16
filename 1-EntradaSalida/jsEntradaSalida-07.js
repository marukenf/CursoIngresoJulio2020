/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let suma;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1= parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	
	suma = num1 + num2;
	
	alert(`la suma da ${suma}`);	
}

function restar()
{
	let num1;
	let num2;
	let resta;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1= parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	
	resta = num1 - num2;
	alert( `la resta da ${resta}`);
}

function multiplicar()
{ 
	let num1;
	let num2;
	let multi;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1= parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	
	multi = num1 * num2;

	alert(`la multiplicación da ${multi}`);
}

function dividir()
{
	let num1;
	let num2;
	let divi;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1= parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	
	divi = num1 / num2;

	alert(`la multiplicación da ${divi}`);
}
