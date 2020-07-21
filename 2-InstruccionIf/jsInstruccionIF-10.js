// Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
// "EXCELENTE" para notas igual a 9 o 10,
// "APROBÓ" para notas mayores a 4,
// "Vamos, la proxima se puede" para notas menores a 4

function mostrar()
{
	let nota;
	nota = Math.random()*(10-1)+1;
	nota = parseInt (nota); 

	if (nota <4)
	{
		alert(`Su nota es ${nota} Vamos, la proxima se puede` );
	}
	else if (nota <=8)
	{
		alert (`Su nota es ${nota} APROBÓ `);
	}
	else
	{
		alert(`Su nota es ${nota} EXCELENTE `);
	}

}//FIN DE LA FUNCIÓN