/* Escribir un programa que escriba en pantalla los divisores de un número dado. */

/* Declaro una variable para introducir el número en prompt, parseInt para que solo admita números enteros y no decimales. */
let numero = parseInt(prompt("Introduzca un número"));

/* Compruebo que el número sea válido. */
if (!isNaN(numero)) {

    document.write("Los divisores de " + numero + " son: ");

    /* Utilizo un bucle for para encontrar todos los divisores. Estos divisores se imprimen en la consola. */
    for (let i = 1; i <= numero; i++) {

        if (numero % i === 0) {

            document.write(i + " ");
        }
    }

    /* En caso de que los números no sean válidos (por ejemplo, decimales o letras), le pide al usuario que escriba otros números. */
} else {

    document.write("Introduzca un número válido.");

}