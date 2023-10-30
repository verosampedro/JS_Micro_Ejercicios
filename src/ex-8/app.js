/* Escribe un programa que pida una frase y escriba las vocales que aparecen. */

let frase = prompt("Escriba una frase");

if (frase !== null && frase !== "") {

    let fraseMinusculas = frase.toLowerCase();

    let vocales = "";

    for (let i = 0; i < fraseMinusculas.length; i++) {

        let caracter = fraseMinusculas[i];

        if ("aeiou".includes(caracter)) {
            vocales += caracter;
        }
    }

    if (vocales !== "") {

        document.write("Las vocales encontradas en su frase son: " + vocales);

    } else {

        document.write("En esta frase no existen vocales.");

    }

} else {

    document.write("Escriba una frase válida.");

}