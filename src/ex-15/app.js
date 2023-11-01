/* Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad). */

/* Declaro variable para introducir el número en el prompt, solo válidos números enteros. */
let numero = parseInt(prompt("Introduzca un número"));

/* Compruebo que los números sean válidos. */
if (!isNaN(numero)) {

    /* La función 'esPrimo' verifica si el número introducido es primo o no. Comprueba si el número es menor o igual a 1, si es igual a 2 o 3, 
    si es divisible por 2 o 3, y luego realiza un bucle para verificar divisibilidad con números de la forma 6k ± 1, donde 'k' es un número entero. */
    let esPrimo = true;

    if (numero <= 1) {

    esPrimo = false;

    } else if (numero <= 3) {

    esPrimo = true;

    } else if (numero % 2 === 0 || numero % 3 === 0) {

    esPrimo = false;

} else {

    for (let i = 5; i * i <= numero; i += 6) {

        if (numero % i === 0 || numero % (i + 2) === 0) {

          esPrimo = false;

          break;

        }
    }
}

/* Dependiendo de si el número es primo o no, o si el número introducido no es válido, imprimirá en pantalla un mensaje u otro. */
if (esPrimo) {

    document.write(numero + " es un número primo.");

    } else {

    document.write(numero + " no es un número primo.");

    }

} else {

    document.write("Introduzca un número válido.");

}