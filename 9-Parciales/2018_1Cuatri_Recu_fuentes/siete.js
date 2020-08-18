<<<<<<< HEAD
// Bienvenidos.
// Realizar el algoritmo que permita el ingreso por prompt de las notas
// (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos,
// informar por alert:
// a) El promedio de las notas totales.
// b) La nota más baja y el sexo de esa persona.
// c) La cantidad de varones que su nota haya sido mayor o igual a 6.


function mostrar()
{
    let alumno;
    let sexo;
    let nota;
    let notaBaja;
    let sexoBaja;
    let contadorNotasVarones=0;
    let contador=0;
    let sumaNotas=0;
    let flag=0;

    do{

        contador=contador+1;
        nota=parseInt(prompt("ingrese la nota"));
        while(nota < 0 || nota > 10){
            alert("nota incorrecta");
            nota=parseInt(prompt("ingrese la nota"));
        }

        sexo=prompt("ingrese el sexo del estudiante 'f' o 'm' ");
        while(sexo  != 'f' && sexo  != 'm') 
        {
           alert("sexo ingresado incorrecta " );
           sexo=prompt("Ingrese el sexo  'f' o 'm' ");
        }
        sumaNotas=sumaNotas+nota;  //punto a

        if(flag==0||nota<notaBaja){  //punto b
            notaBaja=nota;
            sexoBaja=sexo;
            flag=1;
        }

        if(sexo=='m'&& nota>=6){
            contadorNotasVarones++;
        }
        
    }while(contador<5);

    promedioNotas=sumaNotas/5;  //punto a

    alert(`A- El promedio de notas es: ${promedioNotas} B- la nota mas baja es ${notaBaja} y el sexo es 
    ${sexoBaja}  C-  La cantidad de varones que su nota haya sido mayor o igual a 6 son
     ${contadorNotasVarones} `);
}


=======
function mostrar()
{

}
>>>>>>> 0ee65dac25adfe4d716d7c1fccba57e223d073ce
