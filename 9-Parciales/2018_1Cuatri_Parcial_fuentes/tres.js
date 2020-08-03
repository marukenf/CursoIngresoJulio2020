function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio=parseFloat(prompt("Ingrese el precio"));
    descuento=parseFloat(prompt("Ingrese el descuento"));

    precioFinal=precio-(precio*descuento/100);

    alert(`El precio final es: ${precioFinal.toFixed(2)}`);

}
