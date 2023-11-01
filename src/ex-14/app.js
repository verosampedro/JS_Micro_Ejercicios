/* Escribir un programa que escriba en pantalla los divisores comunes de dos números dados. */

/* Dos variables para introducir cada número en el prompt, solo válidos números enteros. */
let numero1 = parseInt(prompt("Introduzca el primer número"));
let numero2 = parseInt(prompt("Introduzca el segundo número"));

/* Compruebo que los números introducidos sean válidos. La función utilizada es, más o menos, reutilizando el código del ejercicio anterior solo que esta vez, en la función
 utilizo '&&' para que imprima los divisores comunes de ambos números. */
if (!isNaN(numero1) && !isNaN(numero2)) {

    document.write("Los divisores comunes de " + numero1 + " y " + numero2 + " son: ");

    /* Esta función se utiliza para encontrar el valor mínimo entre un conjunto de números. */
    let minNumero = Math.min(numero1, numero2);

    for (let i = 1; i <= minNumero; i++) {

        if (numero1 % i === 0 && numero2 % i === 0) {

            document.write(i + " ");
            
        }
    }
    
    /* En caso de que los números no sean válidos (por ejemplo, decimales o letras), le pide al usuario que escriba otros números. */
} else {

    document.write("Introduzca números válidos.");

}