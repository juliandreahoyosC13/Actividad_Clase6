/*9) Cheque
a) Una empresa desea determinar el monto de un cheque que debe
proporcionar a uno de sus empleados que tendrá que viajar durante un
determinado número de días. Los gastos que cubre la empresa son: hotel,
comida y 200 pesos diarios para otros gastos. El monto debe estar
desglosado para cada concepto. Realiza un algoritmo que determine el
monto del cheque.*/
let daysOfTravel = prompt("¿Cuántos días dudará su viaje?");
let OtherExpenses = 200
let eat = 50
let hotel = 100
let TotalExpenses = (OtherExpenses + eat + hotel);
let CheckValue = TotalExpenses * parseFloat (daysOfTravel);
console.log("El valor del cheque para su viaje es " + CheckValue);
alert("El valor del cheque para su viaje es " + CheckValue);
