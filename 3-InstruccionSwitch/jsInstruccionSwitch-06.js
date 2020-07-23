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
		switch (horaDelDia)
		{
		case 7: alert("Es de mañana." );
		break;
		case 8: alert("Es de mañana.");
		break;
		case 9: alert("Es de mañana.");
		break;
		case 10: alert("Es de mañana.");
		break;
		case 11: alert("Es de mañana.");
		break;
	
		case 12: alert("Es de tarde");
		break;
		case 13: alert("Es de tarde");
		break;
		case 14: alert("Es de tarde");
		break;
		case 15: alert("Es de tarde");
		break;
		case 16: alert("Es de tarde");
		break;
		case 17: alert("Es de tarde");
		break;
		case 18: alert("Es de tarde");
		break;
		case 19: alert("Es de tarde");
		break;

		default: alert("es de noche");
		}
	}
	else{alert("la hora no existe");}
	}