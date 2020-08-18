<<<<<<< HEAD
// Bienvenidos.
// A una pareja se le pide los datos para mostrar un mensaje 
// " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados 
// son xx kilos y el promedio de peso xx ".

function mostrar()
{
  let nombreUno;
  let nombreDos;
  let pesoUno;
  let pesoDos;
  let suma;
  let promedio;

  nombreUno=prompt("ingrese el primer nombre de la pareja");
  pesoUno= parseInt (prompt("Ingrese el peso de la primer persona"));

  nombreDos=prompt("ingrese el nombre de la segunda persona de la pareja");
  pesoDos= parseInt(prompt("Ingrese el peso de la segunda persona de la pareja"));
  
  
  suma=pesoUno+pesoDos;
  promedio= suma/2;

  alert(" ustedes se llaman " + nombreUno + " y " +nombreDos+  " pesan " +pesoUno+ " y " +
  pesoDos + " kilos, que sumados son: " + suma + " kilos y el promedio de peso " + promedio);
}
=======
function mostrar()
{
  
}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
