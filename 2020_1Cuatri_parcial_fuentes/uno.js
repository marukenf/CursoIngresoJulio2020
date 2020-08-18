

// Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
// b) Del tipo con mas unidades, el promedio por compra
// c) Cuántas unidades de jabones hay en total

function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contador=0;
	let contadorJabon=0;
	let contadorBarbijo=0;
	let contadorAlcohol=0;
	let sumaAlcohol=0;
	let sumaJabones=0;
	let precioAlcoholMasBarato=0;
	let cantidadAlcoholMasBarato=0
	let fabricanteAlcoholMasBarato;
	let banderaAlcohol=0;
	let itemConMasUnidades;
	let contadorItemConMasUnidades=0;
	let sumaItemMasUnidades;


	let mensajeAlcohol;
	let mensajeCantidad;
	let mensajeFinal;


	do{
		tipo = prompt ("Ingrese que tipo de producto : barbijo, alcohol, jabon");
		while( (!isNaN(tipo)) || tipo!= "barbijo" && tipo!="jabon" && tipo != "alcohol")
        {
            tipo = prompt ("Error, ingrese que tipo de producto : barbijo, alcohol, jabon");
		}

		precio=parseInt(prompt("ingrese el precio: "));
		while(isNaN(precio) || precio<100 ||precio>300)
		{
			precio=parseInt(prompt("error, ingrese el precio: "));
		}

		cantidad=parseInt(prompt("Ingrese la cantidad de producto"));
		while(isNaN(cantidad) || cantidad>1000 ||cantidad<0)
		{
			cantidad=parseInt(prompt("Error, ingrese la cantidad de producto"));
		}

		// marca=(prompt("ingrese el nombre de la marca"));
		// while (!isNaN(marca)){
		// 	marca=(prompt("error,  el nombre de ingrese la marca"));
		// }

		fabricante=(prompt("ingrese el fabricante"));
		while (!isNaN(fabricante)){
			fabricante=(prompt("error, ingrese el fabricante"));
		}
		
		if(tipo=="alcohol"&&banderaAlcohol==0||precioAlcoholMasBarato>precio)  //punto a
		{
			precioAlcoholMasBarato=precio;
			fabricanteAlcoholMasBarato=fabricante;
			cantidadAlcoholMasBarato=cantidad;
			banderaAlcohol=1;
		}

		// if (cantidad > itemConMasUnidades || contadorItemConMasUnidades ==0) //punto b
        // {
		// 	itemConMasUnidades=cantidad;
		// 	sumaItemMasUnidades=sumaItemMasUnidades+cantidad;
        //     promedioItemConMasUnidades = sumaItemMasUnidades /contadorItemConMasUnidades;
        //     contadorItemConMasUnidades= contadorItemConMasUnidades+1;
        // }

		if (tipo =="jabon" ) //punto c
        {
        sumaJabones = sumaJabones+ cantidad;
        }





		// if(banderaAlcohol==0){
		// 	mensajeAlcohol="no se compro alcohol";
		// }
		// else{
		// 	mensajeAlcohol="el precio del alcohol mas barato es: "+precioAlcoholMasBarato+
		// 	" el fabricante de alcohol mas barato es: "+fabricanteAlcoholMasBarato+
		// 	" la cantidad de alcohol comprado es "+ cantidadAlcoholMasBarato;
		// }	

		// mensajeCantidad="el promedio del item con mayor cantidad es "+ promedioItemConMasUnidades;



		contador=contador+1;
	}while (contador<2)

	alert(mensajeFinal=mensajeAlcohol+"la suma de jabones es: " + sumaJabones);
}
