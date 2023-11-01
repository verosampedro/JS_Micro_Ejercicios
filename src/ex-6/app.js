/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

/* Declaro una variable para cada número con prompt y parseFloat. */
let numeroUno = parseFloat(prompt("Primer número requerido"));
let numeroDos = parseFloat(prompt("Segundo número requerido"));
let numeroTres = parseFloat(prompt("Tercer número requerido"));


/* Compruebo que los números introducidos sean válidos. */
if (!isNaN(numeroUno) && !isNaN(numeroDos) && !isNaN(numeroTres)) {

    /* En caso de que lo sean, inicializo una variable nueva que detectará cuál de los 3 números introducidos es mayor. */
    let mayor = (numeroUno >= numeroDos && numeroUno >= numeroTres) ? numeroUno : (numeroDos >= numeroTres ? numeroDos : numeroTres);

    /* Imprimo en pantalla un mensaje para cada resultado. */
    document.write("El número mayor de los tres es: " + mayor);

} else {

    document.write("Por favor, ingrese números válidos.");

}
