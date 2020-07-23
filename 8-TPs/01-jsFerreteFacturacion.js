/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseFloat(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseFloat (precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseFloat (precioTres); 

    resultadoSuma = precioUno + precioDos + precioTres;

    alert("La suma de los tres precios es:" + resultadoSuma.toFixed(2));

}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultadoPromedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseFloat(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseFloat (precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseFloat (precioTres); 

    resultadoSuma = (precioUno + precioDos + precioTres)/3;

    alert("La suma de los tres precios es:" + resultadoPromedio.toFixed(2));
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultadoMasIva;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseFloat(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseFloat (precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseFloat (precioTres); 

    resultadoMasIva =( precioUno + precioDos + precioTres)*1.21
    alert("La suma de los tres precios es:" + resultadoMasIva.toFixed(2));
}