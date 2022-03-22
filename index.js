/*Conversor usd-ars:
algoritmo:
    1.Pedir al usuario que tipo de moneda desea convertir a cual.
    2.Acudir a la funcion que haga esa conversion,
    3.Pedir al usuario que ingrese la cantidad de la moneda que desea convertir.
    4.Validar el dato, y llamar a la funcion que aplica la operacion matematica.
    5.Entregar al usuario el resultado.
    */ 
alert("Bienvenido al conversor de moneda");

seleccion();

function seleccion(){
    seleccion = Number(prompt("Seleccione qué función desea utilizar: \n 1.Convertir pesos a dolares. \n 2.Convertir dolares a pesos."));
    if(seleccion===1){
        pesoDolar();
    }
    else{
        dolarPeso();
    }


}
function pesoDolar(){
    let peso =Number(prompt("¿Cuantos pesos desea convertir a dolar?"));
    let cambioPeso = calculo(peso,0.005);
    alert(`Los ARS${peso} que usted tiene, pueden comprar U$D${cambioPeso}.`);
}
function dolarPeso(){
    let dolar =Number(prompt("¿Cuantos dolares desea convertir a pesos?"));
    let cambioDolar = calculo(dolar,200);
    alert(`Los U$D${dolar} que usted tiene, pueden comprar ARS${cambioDolar}.`);
}
function calculo (x,y){
    return x*y;
}