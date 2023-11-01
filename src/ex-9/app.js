/* Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase. */

/* Declaro una variable con prompt para pedirle al usuario que introduzca una frase cualquiera. */
let frase = prompt("Escriba una frase");

/* Compruebo que la frase sea válida. */
if (frase !== null && frase !== "") {

    /* Utilizando .toLowerCase conseguimos que la frase se convierta a minúsculas para que no haya distinción con las mayúsculas. */
    let fraseMinusculas = frase.toLowerCase();

    /* Creo un mismo contador para todas las vocales. */
    let contadorVocales = 0;

    /* El bucle for recorre la frase, carácter por carácter, añadiendo al contador el número de vocales encontradas. */
    for (let i = 0; i < fraseMinusculas.length; i++) {

        let caracter = fraseMinusculas[i];

        if ("aeiou".includes(caracter)) {

            contadorVocales++;

        }
    }

    /* Con document.write imprimo el texto con el resultado en pantalla, en caso de que la frase no fuera válida, se le pediría al usuario que introdujera otra distinta. */
    document.write("La frase contiene " + contadorVocales + " vocales.");

} else {

    document.write("Escriba una frase válida.");

}