/*11) Nota promedio
a) Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
considerando que realiza tres exámenes, de los cuales el primero y el
segundo tienen una ponderación de 25%, mientras que el tercero de 50%.*/
let exam1 = prompt("Ingrese la nota del primer examen");
let exam2 = prompt("Ingrse la nota del segundo examen");
let exam3 = prompt("Ingrese la nota del tercer examen");
let note1 = parseFloat(exam1*0.25);
let note2 = parseFloat(exam2*0.25);
let note3 = parseFloat(exam3*0.50);
let Average = (note1 + note2 + note3);
console.log("El promedio de las notas es " + Average);
alert("El promedio de las notas es " + Average);
