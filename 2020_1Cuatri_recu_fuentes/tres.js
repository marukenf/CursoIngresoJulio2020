


function mostrar() {
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let flagTemperatura = 0;
	let nacionalidadMasTemperatura;
	let mayorTemperatura;
	let contadorSolterosMayores = 0;
	let contadorMujeresSolterasViudas = 0;
	let contadorTerceraEdadFiebre = 0;
	let sumaEdadCasadas = 0;
	let contadorMujeresCasadas = 0;
	let promedioMujCas;

	let mensajeA;
	let mensajeB;
	let mensajeC;
	let mensajeD;
	let mensajeE;


	do {//hasta que la persona quiera
		nombre = prompt("ingrese su nombre");
		while (!isNaN(nombre)) {
			nombre = prompt("error,ingrese su nombre");
		}
		nacionalidad = prompt("ingrese su nacionalidad");
		while (!isNaN(nacionalidad)) {
			nacionalidad = prompt("error,ingrese su nacionalidad");
		}
		edad = prompt("ingrese su edad");
		while (isNaN(edad)) {
			edad = prompt("error, ingrese su edad");
		}
		sexo = prompt("ingrese su sexo");
		while ((!isNaN(sexo)) || sexo != 'f' && sexo != 'm') {
			sexo = prompt("error, ingrese sexo");
		}
		estadoCivil = prompt("ingrese su estado civil");
		while ((!isNaN(estadoCivil)) || (estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo")) {
			estadoCivil = prompt("error, ingrese su estado civil");
		}
		temperatura = prompt("ingrese su temperatura");
		while (isNaN(temperatura) || temperatura < 35 || temperatura > 42) {
			temperatura = prompt("error, ingrese su temperatura");
		}
		if (flagTemperatura == 0 || temperatura > mayorTemperatura) { // a)Nacionalidad de persona con mas temperatura.
			mayorTemperatura = temperatura;
			nacionalidadMasTemperatura = nacionalidad;
			flagTemperatura=1;

		}
		//b) Cuantos mayores de edad( más de 17) estan solteros 
		if (estadoCivil == "soltero" && edad > 18) {
			contadorSolterosMayores++;
		}
		//c) La cantidad de Mujeres que hay solteras o viudas.
		if (sexo == 'f' && estadoCivil != "casado") {
			contadorMujeresSolterasViudas++;
		}
		// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edad > 60 && temperatura > 38) {
			contadorTerceraEdadFiebre++;
		}
		// e) El promedio de edad entre las mujeres casadas.
		if (sexo == 'f' && estadoCivil == "casado") {
			contadorMujeresCasadas++;
			sumaEdadCasadas = sumaEdadCasadas + edad;
		}
		respuesta = prompt("Desea seguir ingresando datos? 's' o 'n'  ");

	} while (respuesta == 's');

	if (contadorMujeresCasadas > 0) {
		promedioMujCas = sumaEdadCasadas / contadorMujeresCasadas;
		mensajeE = " E - el promedio de edad de mujeres casadas es " + promedioMujCas;
	}
	else {
		mensajeE = " E- no hay mujeres casadas "
	}
		
		mensajeD=" D- la cantidad de muejeres de la tercera edad ctemperatura mayor a 38 grados es " + contadorTerceraEdadFiebre;

		mensajeC=" C - La cantidad de Mujeres que hay solteras o viudas es " + contadorMujeresSolterasViudas;

		mensajeB=" B- las cantidad de mayores de edad que están estan solteros es "+ contadorSolterosMayores;

		mensajeA=" A- La nacionalidad de persona con mas temperatura es : "+ nacionalidadMasTemperatura;


		alert(mensajeA+mensajeB+mensajeC+mensajeD+mensajeE);
}


