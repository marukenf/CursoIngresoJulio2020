/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

// txtIdLargo
// txtIdAncho
// txtIdRadio

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambreRectangulo;
    
    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat (largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat (ancho);

    alambreRectangulo = (2*largo+2*ancho)*3;

    alert(`La cantidad de alambre necesaria es ${alambreRectangulo}`);
}
function Circulo () 
{
	let radio;
    let alambreCirculo;
    
    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat (radio);

    alambreCirculo = (2*radio*Math.PI)*3;


    alert (`La cantidad de alambre nacesaria es ${alambreCirculo.toFixed(2)}` );

}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let arena;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat (largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat (ancho);

    area = largo * ancho;

    cemento = area * 2;
    arena = area * 3;

    alert (`La cantidad de bolsas de cemento que se necesitan son: ${cemento} y la cantidad de bolsas de arena que se necesitan son: ${arena}`);
}