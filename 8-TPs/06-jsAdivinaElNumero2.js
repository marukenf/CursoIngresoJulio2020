/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroAleatoreo;
let flag = 0; //cuando gana el flag vuelve a 0
let contadorIntentos=0;

function comenzar()
{
   numeroAleatoreo = Math.round(Math.random()*(99)+1);    //Genero el número RANDOM entre 1 y 100
  alert(numeroAleatoreo);
  flag=1;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  document.getElementById("txtIdIntentos").focus; 
}

function verificar()
{
  let numeroIngresado;
  
  if(flag==0){
	alert("Primero debes presionar el boton comenzar");
  }
  else{
    contadorIntentos++;
    numeroIngresado=parseInt(document.getElementById("txtIdNumero").value); 

    if(numeroAleatoreo==numeroIngresado)
    { 
	  switch(contadorIntentos){
		  case 1:alert (`lo hizo en ${contadorIntentos} usted es un Psíquico`);
		  break;
		  case 2:alert (`lo hizo en ${contadorIntentos} excelente percepción`);
		  break;
		  case 3:alert (`lo hizo en ${contadorIntentos} Esto es suerte`);
		  break;
		  case 4:alert (`lo hizo en ${contadorIntentos} Excelente técnica`);
		  break;
		  case 5:alert (`lo hizo en ${contadorIntentos} usted está en la media`);
		  break;
		  case 6:alert (`lo hizo en ${contadorIntentos} falta técnica`);
		  break;
		  case 7:alert (`lo hizo en ${contadorIntentos} falta técnica`);
		  break;
		  case 8:alert (`lo hizo en ${contadorIntentos} falta técnica`);
		  break;
		  case 9:alert (`lo hizo en ${contadorIntentos} falta técnica`);
		  break;
		  case 10:alert (`lo hizo en ${contadorIntentos} falta técnica`);
		  break;
		  default: alert( "mas de 10 intentos, afortunado en el amor")
	  }

	  
      flag=0;
      contadorIntentos=0;
    }
    else if(numeroAleatoreo < numeroIngresado){
      alert(`se paso`);
    }
    else{
      alert(`falta`);
    }
    document.getElementById("txtIdIntentos").focus; 
  }
}