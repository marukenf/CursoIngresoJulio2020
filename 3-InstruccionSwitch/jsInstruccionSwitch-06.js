// Al ingresar una hora, informar:
// si está entre las 7 y las 11 : "Es de mañana.".
// si está entre las 12 y las 19 : "Es de tarde.".
// si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
// si NO está entre las 0 y las 24 : "la hora no existe.".
// Curso de ingreso UTN FRA

function mostrar()
{
	let horaDelDia;
	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia= parseInt(horaDelDia);

	if(horaDelDia>=0 && horaDelDia <=24)
	{ 

		if(horaDelDia>=7 && horaDelDia<=11){
			alert("es de mañana");
		}
		else if(horaDelDia>=12 &&horaDelDia<=19){
			alert("es de tarde");
		}
		else{alert("es de noche");}

	// 	switch (horaDelDia)
	// 	{
	// 	case 7: 
	// 	case 8: 
	// 	case 9: 
	// 	case 10:
	// 	case 11: 
	// 		alert("Es de mañana.");
	// 	break;
	
	// 	case 12:
	// 	case 13:
	// 	case 14:
	// 	case 15: 
	// 	case 16: 
	// 	case 17: 
	// 	case 19: 
	// 		alert("Es de tarde");
	// 	break;

	// 	default: alert("es de noche");
	// 	}
	
	}
	else{alert("la hora no existe");}
	
}