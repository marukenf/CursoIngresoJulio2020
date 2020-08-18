// Bienvenidos.
// Realizar el algoritmo que permita ingresar el nombre de un estudiante,
//  la edad (validar) , el sexo (validar) y la nota del final (validar)
// hasta que el usuario quiera e informar al terminar el ingreso por document.write:
// a) La cantidad de varones aprobados
// b) El promedio de notas de los menores de edad
// c) El promedio de notas de los adolescentes.
// d) El promedio de notas de los mayores
// f) El promedio de notas por sexo masculino y femenino

function mostrar() {
    let edad;
    let sexo;
    let nota;
    let respuesta;
    let contadorAprobados=0;
    let contadorMenoresEdad=0;
    let sumaMenoresEdad=0;
    let promedioMenoresEdad;
    let contadorAdolescentes=0;
    let sumaNotaAdolescentes=0;
    let promedioNotasAdolescentes;
    let contadorMayores=0;
    let sumaNotaMayores=0;
    let promedioNotasMayores;
    let contadorMujeres=0;
    let contadorHombres=0;
    let sumaNotasMujeres=0;
    let sumaNotasHombres=0;
    let promedioNotasHombres;
    let promedioNotasMujeres;




    do {
        edad = parseInt(prompt("ingrese su edad, mayor a 5"));
        while ((isNaN(edad)) || edad < 6) {
            edad = parseInt(prompt("Error. Ingrese su edad, mayor a 5"));
        }

        sexo = prompt("Ingrese el sexo 'f' o 'm' ");
        while ((!isNaN(sexo)) || sexo != 'm' && sexo != 'f') {
            sexo = prompt("Error. Ingrese nuevamante el sexo 'f' o 'm' ");
        }

        nota = parseInt(prompt("Ingrese la nota de 1 a 10"));
        while ((isNaN(nota))|| nota < 1 || nota > 10) {
            nota = parseInt(prompt("Error. Ingrese la nota de 1 a 10"));
        }


        if(nota>=6){
        contadorAprobados++;}

        if(edad<18){
            contadorMenoresEdad++,
            sumaMenoresEdad+=edad;
        }

        if (edad>11&&edad<18){//adolescente
            sumaNotaAdolescentes=sumaNotaAdolescentes+nota;
            contadorAdolescentes++;
        }
        else if(edad>=18){
            sumaNotaMayores=sumaNotaMayores+nota;
            contadorMayores++;
        }

        if(sexo=='f'){
            sumaNotasMujeres=sumaNotasMujeres+nota;
            contadorMujeres++;
        }
        else{
            sumaNotasHombres=sumaNotasHombres+nota;
            contadorHombres++;
        }


        respuesta = prompt("Desea ingresar más datos 's' o 'n' ? ");
    } while (respuesta == 's')

    if (contadorMenoresEdad>0){
        promedioMenoresEdad=sumaMenoresEdad/contadorMenoresEdad;}

    if (contadorAdolescentes>0){
        promedioNotasAdolescentes= sumaNotaAdolescentes/contadorAdolescentes;
    
    if (contadorMayores>0){
        promedioNotasMayores= sumaNotaMayores/contadorMayores;}

    if (contadorMujeres>0){
        promedioNotasMujeres= sumaNotasMujeres/contadorMujeres;}

    if (contadorHombres>0){
        promedioNotasHombres= sumaNotasHombres/contadorHombres;}


    
    }


    document.write("  A- La cantidad de aprobados es: " + contadorAprobados+ "</br>" +
                   "  B-  El promedio de notas de los menores de edad es: "+ promedioMenoresEdad + "</br>" +
                   "  C-  El promedio de notas de los adolescentes es: " + promedioNotasAdolescentes + "</br>" +
                   "  D-  El promedio de notas de los mayores es: "+ promedioNotasMayores + "</br>" +
                   "  E-  El promedio de notas del sexo masculino es: " + promedioNotasHombres + "</br>" +
                   "  Y el promedio de notas del sexo femenino es: " + promedioNotasMujeres );
}
