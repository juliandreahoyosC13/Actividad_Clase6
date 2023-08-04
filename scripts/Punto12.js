/*12) Monto en cuotas
a) Dado un número real que representa el valor total de una compra, informar
las posibles formas de pago según la siguiente tabla. Específica los datos de
entrada, de salida, estrategia.
1 cuota de  $................. (0% de recargo)
2 cuotas de $................. total $................. ( 5% de recargo)
6 cuotas de $................. total $................. ( 40% de recargo)*/
let TotalPrice = 1000000
let WayToPage = prompt("Defina su forma de pago: 1.Pago a una cuota, 2.Pago a 2 cuotas, 3.pago a 6 cuotas"); 
switch (parseFloat (WayToPage)) {
    case 1:
        alert("Su estrategia de pago es a una cuota y el total a pagar es: " + TotalPrice + " Recuerde que el pago a una cuota no tiene recargo");
        break;
    case 2:
        alert("Su estrategia de pago es a dos cuotas de: " + (((TotalPrice*0.05)+TotalPrice)/2) + " Recuerde que el pago a dos cuotas tiene recargo de 5%");
        break; 
    case 3:
        alert("Su estrategia de pago es a seis cuotas de: " + (((TotalPrice*0.4)+TotalPrice)/6) + " Recuerde que el pago a seis cuotas tiene recargo de 40%"); 
        break;      
    default:
        alert("Ese método de pago no está disponible")
        break;
}