<<<<<<< HEAD
function mostrar()
{
    let hora=parseInt(document.getElementById("laHora").value);

    if(hora>=0 && hora <=24){
    	switch (hora)
		{
		case 7: 
		case 8: 
		case 9: 
		case 10:
		case 11: 
			alert("Es de mañana.");
		break;
	
		case 12:
		case 13:
		case 14:
		case 15: 
		case 16: 
		case 17: 
		case 19: 
			alert("Es de tarde");
		break;

		default: alert("es de noche, A DORMIR"); //siempre el horario es menor a 24
        }
    }
    else{
        alert("Hora incorrecta, ingrese la hora nuevamente");
    }
    
}
=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
