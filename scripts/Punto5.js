/*5) Pinturería
a) Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
generando presupuestos para cada cliente.*/
let quantityOfMeters = prompt("Ingrese ma cantidad de metros que desea pintar");
let PriceOfMeter =  250000;
TotalPrice = 0;
TotalPrice = parseFloat(quantityOfMeters)*PriceOfMeter;
console.log("La cotización para pintar es " + TotalPrice)
alert("La cotización para pintar es " + TotalPrice)

