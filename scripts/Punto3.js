/*3) Edad
a) Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo
se les pregunta el año en que nacieron. Realiza el algoritmo para solucionar
este problema.*/
let YearOfBirth = prompt("Ingrese su año de nacimiento");
let CurrentYear = 2023;
let age = (CurrentYear-YearOfBirth);
console.log("La edad del aspirante es " + age + " años");
alert("La edad del aspirante es " + age + " años");
