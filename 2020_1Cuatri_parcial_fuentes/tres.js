// Bienvenidos.
// En el ingreso a un viaje en avion nos solicitan nombre , edad,
//  sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
// a) El nombre de la persona con mas temperatura.
// b) Cuantos mayores de edad estan viudos
// c) La cantidad de hombres que hay solteros o viudos.
// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
// e) El promedio de edad entre los hombres solteros.

function mostrar()
{
	
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let flag=0;
	let temperaturaMayor=0;
	let nombreMayorTemperatura=" ";
	let contadorViudos=0;
	let contadorSolteros=0;
	let sumaViudosSolteros=0;
	let viudosMayores=0;
	let terceraMasTreintayocho=0;
	let sumaEdadSolteros=0;
	let mensaje;
	let mensajeA;
	let MensajeB;
	let MensajeC;
	let mensajeD;
	let mensajeE;


	do{

	nombre=prompt("ingrese su nombre");
	while(!isNaN(nombre)){
		nombre=prompt("error, ingrese su nombre");
	}

	edad=parseInt(prompt("Ingrese su edad"));
	while(isNaN(edad))
	{
		edad=parseInt(prompt("error, ingrese su edad"));
	}


	sexo=prompt("Ingrese su sexo 'f' o 'm'");
	while((!isNaN(sexo))||sexo!= 'f' && sexo!='m')
	{
		sexo=prompt("error, ingrese su sexo");
	}


	estadoCivil=prompt("ingrese su estado civil 'soltero', 'casado' o 'viudo'");
	while(!isNaN(estadoCivil)||estadoCivil!="soltero"&& estadoCivil!="casado"&& estadoCivil!="viudo")
	{
		estadoCivil=prompt("error, ingrese su estado civil 'soltero', 'casado' o 'viudo'");
	}

	temperatura=prompt("Ingrese tu temperatura");
	while(isNaN(temperatura)||temperatura<35 || temperatura>42)
	{
	temperatura=parseInt(prompt("error, ingrese su temperatura"));
	}

	if(flag==0||temperatura>temperaturaMayor){
		temperaturaMayor= temperatura;
		nombreMayorTemperatura=nombre;
		
		flag=1;
	}
	if(estadoCivil=="viudo"){
		contadorViudos=contadorViudos+1;
		if(edad>=18){
			viudosMayores=viudosMayores+1;
		}
	}
	else if(estadoCivil="soltero"&&sexo=='m'){
		sumaEdadSolteros=sumaEdadSolteros+edad;
		contadorSolteros++;
	}
	if (edad>60&& temperatura>38)
	{terceraMasTreintayocho++;}


	respuesta=prompt("desea seguir ingresando datos s o n");

	}while(respuesta=='s')

	if(contadorSolteros>0)
	{promedioEdad=sumaEdadSolteros/contadorSolteros;
	mensajeE= " E- el promedio de edad de hombres solteros es: "+promedioEdad;
	}
	else{
		mensajeE="E- No hay hombres solteros "
    }
	
	sumaViudosSolteros=contadorViudos+contadorSolteros;

	mensajeA=" A- la persona con mayor temperatura se llama: "+ nombreMayorTemperatura;
	
	mensajeB= " B- los viudos mayores son : " +viudosMayores;
	
	mensajeC=" C- la cantidad de hombres solteros o viudos es : "+ sumaViudosSolteros;

	mensajeD=" D -la cantidad de persomas mayores de edad con mas de 38 grados son : "+terceraMasTreintayocho;


	mensaje=mensajeA+MensajeB+mensajeC+mensajeD+mensajeE;
	
	console.log(mensaje);

	alert(mensaje);
	
}
