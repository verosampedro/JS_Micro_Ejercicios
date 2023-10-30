/*Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.*/

let numeroUno = parseFloat(prompt("Primer número requerido"));
let numeroDos = parseFloat(prompt("Segundo número requerido"));

if (!isNaN(numeroUno) && !isNaN(numeroDos)) {

    let resultado = numeroUno + numeroDos;
    let mensaje = "La suma de " + numeroUno + " más " + numeroDos + " es " + resultado;

    document.write(mensaje);

} else {
    document.write("Por favor, ingrese números válidos.");
}
