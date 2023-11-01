/* Escribe un programa que pida una frase y escriba las vocales que aparecen. */

/* Declaro una variable para la frase con prompt (me gustaron mucho los cuadros de diálogo). */
let frase = prompt("Escriba una frase");

/* Compruebo que la frase sea válida. */
if (frase !== null && frase !== "") {

    /* Utilizando .toLowerCase conseguimos que la frase se convierta a minúsculas para que no haya distinción con las mayúsculas. */
    let fraseMinusculas = frase.toLowerCase();

    let vocales = "";

    /* El bucle for recorre la frase, carácter por carácter, detectando cuáles son las vocales que aparecen (no la cantidad de veces que aparecen). */
    for (let i = 0; i < fraseMinusculas.length; i++) {

        let caracter = fraseMinusculas[i];

        if ("aeiou".includes(caracter)) {
            vocales += caracter;
        }
    }

    /* Imprimo una frase para cada resultado. */
    if (vocales !== "") {

        document.write("Las vocales encontradas en su frase son: " + vocales);

    } else {

        document.write("En esta frase no existen vocales.");

    }

} else {

    document.write("Escriba una frase válida.");

}

/* Sé que podría hacer un console.log para que también me lo imprima en la consola pero con prompt e imprimiendo el texto en pantalla queda más chuli :) */