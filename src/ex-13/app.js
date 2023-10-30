/* Escribir un programa que escriba en pantalla los divisores de un número dado. */

let numero = parseInt(prompt("Introduzca un número"));

if (!isNaN(numero)) {

    document.write("Los divisores de " + numero + " son: ");

    for (let i = 1; i <= numero; i++) {

        if (numero % i === 0) {

            document.write(i + " ");
        }
    }

} else {

    document.write("Introduzca un número válido.");

}