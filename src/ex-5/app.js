/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */

/* Declaro dos variables let, como en el anterior ejercicio, para ambos números con prompt para el cuadro de diálogo y parseFloat para trabajar solo con números. */
let numeroUno = parseFloat(prompt("Primer número requerido"));
let numeroDos = parseFloat(prompt("Segundo número requerido"));

/* Compruebo que los números sean válidos. */
if (!isNaN(numeroUno) && !isNaN(numeroDos)) {


    /* Creo varias condicionales para cada uno de los resultados. Una en caso de que el primer número sea mayor, otra por si el mayor fuera el segundo número 
    y otra más en caso de que ambos números sean iguales. */
    if (numeroUno > numeroDos) {

        document.write("El número " + numeroUno + " es mayor que " + numeroDos);

    } else if (numeroUno < numeroDos) {

        document.write("El número " + numeroDos + " es mayor que " + numeroUno);

    } else {

        document.write("Ambos números son iguales: " + numeroUno);

    }

    /* Si los números introducidos no son válidos, le pide al usuario que introduzca unos números nuevos. */
} else {

    document.write("Por favor, ingrese números válidos.");
    
}