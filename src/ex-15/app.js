/* Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad). */

let numero = parseInt(prompt("Introduzca un número"));

if (!isNaN(numero)) {

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

if (esPrimo) {

    document.write(numero + " es un número primo.");

    } else {

    document.write(numero + " no es un número primo.");

    }

} else {

    document.write("Introduzca un número válido.");

}