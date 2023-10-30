/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */

let numeroUno = parseFloat(prompt("Primer número requerido"));
let numeroDos = parseFloat(prompt("Segundo número requerido"));

if (!isNaN(numeroUno) && !isNaN(numeroDos)) {

    if (numeroUno > numeroDos) {

        document.write("El número " + numeroUno + " es mayor que " + numeroDos);

    } else if (numeroUno < numeroDos) {

        document.write("El número " + numeroDos + " es mayor que " + numeroUno);

    } else {

        document.write("Ambos números son iguales: " + numeroUno);

    }

} else {

    document.write("Por favor, ingrese números válidos.");
    
}