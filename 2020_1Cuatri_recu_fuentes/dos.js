
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más caro de los jabones, la cantidad de unidades y el fabricante
// b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
// c) Cuántas unidades de Barbijos se compraron en total

function mostrar() {
  let tipo;
  let precio;
  let cantidad;
  let marca;
  let fabricante;
  let flag = 0;
  let descuento;
  let acumuladorArena = 0;
  let acumuladorCal = 0;
  let acumuladorCemento = 0;
  let cantidadTotal = 0;
  let precioSinDescuento = 0;
  let precioConDescuento = 0;
  let respuesta;

  let mensajeA;
  let mensajeB;
  let mensajeC;
  let mensaje;
  
 

  do  {
    tipo = prompt("Ingrese un tipo: 'arena', 'cal' o 'cemento' ");
    while ((!isNaN(tipo)) || tipo != "cemento" && tipo != "cal" && tipo != "arena") {
      tipo = prompt("Error. Ingrese un tipo: 'arena',  'cal' o 'cemento' ");
    }
    precio = parseInt(prompt("ingrese el precio entre 100 y 300"));
    while (isNaN(precio) || precio < 100 || precio > 300) {
      precio = parseInt(prompt("Error, ingrese el precio entre 100 y 300"));
    }

    cantidad = parseInt(prompt("ingrese la cantidad de unidades entre 1 y 1000"));
    while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
      cantidad = parseInt(prompt("Error, ingrese la cantidad entre 0 y 1000"));
    }

    marca = prompt("Ingrese un la marca");
    while (!isNaN(marca)) {
      marca = prompt("Error, ingrese un la marca");
    }

    fabricante = prompt("Ingrese el fabricante");
    while (!isNaN(fabricante)) {
      fabricante = prompt("Error, ingrese el fabricante");
    }


    switch (tipo) {
      case "arena":
        acumuladorArena = acumuladorArena + cantidad;
        break;

      case "cal":
        acumuladorCal = acumuladorCal + cantidad;
        break;
      case "cemento":
        acumuladorCemento = acumuladorCemento + cantidad;
        break;
    }

    precioSinDescuento = precioSinDescuento + precio * cantidad;

    respuesta=prompt("desea seguir ingresando datos 's' o 'n' ");

  }while(respuesta=='s');

  

  if (cantidadTotal >= 10) {
    descuento = 0;
  }
  else if (cantidadTotal > 10 && cantidad <= 30) {
    descuento = 0.15;
  }
  else {
    descuento = 0.25
  }

  if(acumuladorArena>acumuladorCal&&acumuladorArena>acumuladorCemento){ //mayor arena
    mensajeC=" C- El tipo con mayot cantidad de bolsas es Arena, con un total de: " + acumuladorArena;
  }
  else if(acumuladorCal>acumuladorCemento&&acumuladorCal>acumuladorArena){ //mayor cal
    mensajeC=" C - El tipo con mayor cantidad de bolsas commpradas es Cal"+ acumuladorCal;
  }
  else if(acumuladorCemento>acumuladorCal&&acumuladorCemento>acumuladorArena){ //mayor cemento
    mensajeC=" C - El tipo con mayor cantidad de bolsas commpradas es Cemento"+acumuladorCemento;
  }



  precioConDescuento = precioSinDescuento * (1 - descuento);

  mensajeA=" A- el precio sin descuento es $ "+ precioSinDescuento;
  mensajeB="/n B- su descuento es $ " + (descuento*100)+ " por lo tanto su importe final es $ " + precioConDescuento;

  mensaje=mensajeA+mensajeB+mensajeC;

  alert(mensaje);

}

