/* Escribir un programa que escriba en pantalla los divisores comunes de dos números dados. */

let numero1 = parseInt(prompt("Introduzca el primer número"));
let numero2 = parseInt(prompt("Introduzca el segundo número"));

if (!isNaN(numero1) && !isNaN(numero2)) {

    document.write("Los divisores comunes de " + numero1 + " y " + numero2 + " son: ");

    let minNumero = Math.min(numero1, numero2);

    for (let i = 1; i <= minNumero; i++) {

        if (numero1 % i === 0 && numero2 % i === 0) {

            document.write(i + " ");
            
        }
    }
    
} else {

    document.write("Introduzca números válidos.");

}