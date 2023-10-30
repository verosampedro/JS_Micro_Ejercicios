/* Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a. */

let frase = prompt("Escriba una frase");

if (frase !== null && frase !== "") {

    let fraseMinusculas = frase.toLowerCase();

    let contadorA = 0;

    for (let i = 0; i < fraseMinusculas.length; i++) {

        if (fraseMinusculas[i] === "a") {
            contadorA++;
        }
    }

    document.write("La letra 'a' aparece " + contadorA + " veces.");

} else {

    document.write("Escriba una frase válida.");

}

