/*8) Ahorros
a) Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
un año si considera que cada semana ahorra 15% de su sueldo (considera
cuatro semanas por mes y que no cambia el sueldo).*/
let salary = prompt("Ingrese el valor de su sueldo");
savings = parseFloat((salary/4)*0.15);
AnnualSavings = (savings*12);
console.log("Los ahorros anuales son " + AnnualSavings);
alert("Los ahorros anuales son " + AnnualSavings);