/*4) Estacionamiento
a) Un estacionamiento requiere determinar el cobro que debe aplicar a las
personas que lo utilizan. Considera que el cobro es con base en las horas
que lo disponen y que las fracciones de hora se toman como completas,
realiza el algoritmo que permita determinar el cobro.*/
let valueByHour = 2500;
let quantityOfHour = prompt("Ingrese la cantidad de horas");
quantityOfMinutes = prompt("Ingrese la cantidad de minutos");
TotalPrice = 0;
if (quantityOfMinutes > 0) {
quantityOfHour = parseInt(quantityOfHour) + 1;
}
TotalPrice = quantityOfHour * valueByHour
console.log("El precio a pagar es " + TotalPrice)
alert("El precio a pagar es " + TotalPrice)