/*6) Hipotenusa
a) Se requiere determinar la hipotenusa de un triángulo rectángulo. ¿Cómo
sería el algoritmo para obtenerla? Recuerda que por Pitágoras se tiene que:
La hipotenusa al cuadrado es igual a la suma de los otros dos lados al
cuadrado (H2 = A2 + B2)*/
let side1 = prompt("Ingrese la medida del lado1");
let side2 = prompt("Ingrese la medida del lado2");
let hypotenuse = 0;
hypotenuse = Math.sqrt(side1**2 + side2**2);
console.log("La hipotenusa del triangulo es " + hypotenuse);
alert("La hipotenusa del triangulo es " + hypotenuse);