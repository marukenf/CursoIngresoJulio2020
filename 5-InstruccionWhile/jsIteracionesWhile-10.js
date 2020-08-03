/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let respuesta;
	let numero;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadNegativos=0;
	let cantidadPositivos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioPositivos=0;
	let promedioNegativos=0;
	let resto;
	let diferencia;
	let mensaje;

	do{
		numero=parseInt(prompt("Ingrese un número"));
		resto=numero%2;
		if(resto==0){
			cantidadPares=cantidadPares+1;
		}
		
		
		if(numero>0){
			cantidadPositivos=cantidadPositivos+1;
			sumaPositivos=sumaPositivos+numero;
		}
		else if (numero<0){
			cantidadNegativos=cantidadNegativos+1;
			sumaNegativos=sumaNegativos+numero;
		}
		else{
			cantidadCeros++;
		}
		respuesta= prompt("Desea infresar otro número 's' o 'n' ");

	}while(respuesta=='s');

	if(cantidadNegativos>0)
	{promedioNegativos=sumaNegativos/cantidadNegativos;}
	if(cantidadPositivos>0)
	{promedioPositivos=sumaPositivos/cantidadPositivos;}
	
	diferencia= cantidadPositivos- cantidadNegativos;

	mensaje= "   1-Suma de los negativos  " + sumaNegativos+
	"   2-Suma de los positivos." + sumaPositivos +
	"   3-Cantidad de positivos. " + cantidadPositivos + 
	"   4-Cantidad de negativos. " +  cantidadNegativos + 
	"   5-Cantidad de ceros." + cantidadCeros + 
	"   6-Cantidad de números pares." + cantidadPares + 
	"   7-Promedio de positivos." + promedioPositivos  + 
	"   8-Promedios de negativos." + promedioNegativos + 
	"   9-Diferencia entre positivos y negativos, (positvos-negativos)" + diferencia ;

	document.write(mensaje);

}