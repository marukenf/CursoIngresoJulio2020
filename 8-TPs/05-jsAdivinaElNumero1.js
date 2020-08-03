/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

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
	
		alert (`es el ganador y en solo ${contadorIntentos} intentos`);
	  
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