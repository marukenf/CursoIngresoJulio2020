function mostrar()
{ 
  let tipo;
  let cantidad;
  let precio;
  let respuesta;
  let descuento=0;
  let totalApagar=0;
  let flagPrimera=0;
  let tipoMasCantidad;
  let cantidadTipoMasCantidad;
  let tipoMasCaro;
  let precioTipoMasCaro;


  do{

    tipo=prompt("Ingrese el tipo de producto");
    while((!(isNaN(tipo)))|| tipo!="cemento"&& tipo != "arena"  && tipo!= "cal"){
      tipo=prompt("Producto invalido. Ingrese el tipo de producto");
    }

    cantidad= parseInt(prompt("ingrese la cantidad de bolsas"));
    while(((isNaN(cantidad)))|| cantidad<0){
      cantidad=parseInt(prompt("Cantidad invalida. Ingrese la cantidad de bolsas"));
    }

    precio=parseInt(prompt("Ingrese el precio"));
    while((isNaN(precio))|| cantidad<0){
      precio=parseInt(prompt("Precio invalido. Ingrese el precio"));
    }
    if(cantidad>10&& cantidad <30){
      descuento=0.15;
    }
    else if(cantidad>=30){
      descuento=0.25;
    }

   if(flagPrimera==0||cantidad>cantidadTipoMasCantidad||precio>precioTipoMasCaro){
     
     tipoMasCantidad=tipo;
     cantidadTipoMasCantidad=cantidad;
     tipoMasCaro=tipo;
     precioTipoMasCaro=precio;
     flagPrimera=1;
   }
    
    respuesta=prompt("Desea ingresar mas datos s o n ?");

  totalApagar=totalApagar+(cantidad*precio*(1-descuento));

  }while(respuesta=='s');

  alert(`El importe total a pagar es ${totalApagar} 
  teniendo un descuento de ${descuento} , el tipo con mas cantidad de bolsas es 
  ${tipoMasCantidad}, con una cantidad de  ${cantidadTipoMasCantidad} 
  el tipo mas caro es ${tipoMasCaro} con un precio de ${precioTipoMasCaro}   `)

  
}
