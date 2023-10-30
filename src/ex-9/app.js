/* Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase. */

let frase = prompt("Escriba una frase");

if (frase !== null && frase !== "") {

    let fraseMinusculas = frase.toLowerCase();

    let contadorVocales = 0;

    for (let i = 0; i < fraseMinusculas.length; i++) {

        let caracter = fraseMinusculas[i];

        if ("aeiou".includes(caracter)) {

            contadorVocales++;

        }
    }

    document.write("La frase contiene " + contadorVocales + " vocales.");

} else {

    document.write("Escriba una frase válida.");

}