/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f ó m .");
	if(sexo!=='f'|| sexo !=='m'){
		alert("respuesta equivocada");
		sexo = prompt("ingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value=sexo;
}