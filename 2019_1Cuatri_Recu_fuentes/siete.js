// Bienvenidos.
// Realizar el algoritmo que permita el ingreso de 10 bolsas 
// de alimento por prompt,con los kilos (validar entre 0 y 500) , 
// sabor validar(carne vegetales pollo) e informar por alert:
// a) El promedio de los kilos totales.
// b) El mas liviano y su sabor
// c) La cantidad de sabor carne y el promedio de kilos de sabor carne

function mostrar()
{
    
    let kilos;
    let sabor;
    let contador=0;
    let sumaKilos=0;
    let promedioKilos;
    let flag=0;
    let pesoMasLiviano;
    let saborMasLiviano;
    let contadorCarne=0;
    let sumaSaborCarne=0;
    let promedioSaborCarne;
    let mensajeA;
    let mensajeB;
    let mensajeC;


    do{

        kilos=parseInt(prompt("Ingrese la cantidad de kilos entre 0 y 500"));
        while(isNaN(kilos)|| kilos<0 ||kilos>500){
            kilos=parseInt(prompt("Error. Ingrese la cantidad de kilos entre 0 y 500"));
        }

        sabor=prompt("Ingrese el sabor 'pollo' , 'carne' o 'vegetales? ");
        while(!isNaN(sabor)|| sabor != "pollo" && sabor != "carne" && sabor != "vegetales"){
            sabor=prompt("Error. Ingrese el sabor 'pollo' , 'carne' o 'vegetales? ");
        }
        
        sumaKilos=sumaKilos+kilos;

        if(flag==0||kilos<pesoMasLiviano){
            pesoMasLiviano=kilos;
            saborMasLiviano=sabor;
            flag=1;
        }

        if(sabor=="carne"){
            sumaSaborCarne=sumaSaborCarne+kilos;
            contadorCarne++;}


        contador=contador+1;

    }while(contador<10);

    promedioKilos=sumaKilos/10;
    promedioSaborCarne=sumaSaborCarne/contadorCarne;

    mensajeA="El promedio de kilos totales es: "+ promedioKilos;
    mensajeB="el sabor ingresado mas liviano es: "+saborMasLiviano+" su peso es : "+ pesoMasLiviano;
    if(contadorCarne>0){
        mensajeC= "El promedio de kilos de carne es : "+ promedioSaborCarne;
    }
    else{
        mensajeC="  C- no se ingreso sabor carne";
    }

    alert(mensajeA+mensajeB+mensajeC);

}
