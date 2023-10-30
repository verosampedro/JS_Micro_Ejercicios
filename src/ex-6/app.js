/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

let numeroUno = parseFloat(prompt("Primer número requerido"));
let numeroDos = parseFloat(prompt("Segundo número requerido"));
let numeroTres = parseFloat(prompt("Tercer número requerido"));

if (!isNaN(numeroUno) && !isNaN(numeroDos) && !isNaN(numeroTres)) {

    let mayor = (numeroUno >= numeroDos && numeroUno >= numeroTres) ? numeroUno : (numeroDos >= numeroTres ? numeroDos : numeroTres);

    document.write("El número mayor de los tres es: " + mayor);

} else {

    document.write("Por favor, ingrese números válidos.");

}
