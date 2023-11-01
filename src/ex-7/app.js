/* Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a. */

/* Declaro variable con prompt para el cuadro de diálogo, esta vez sin parseFloat ya que no necesito números en este ejercicio. */
let frase = prompt("Escriba una frase");

/* Compruebo que la frase es válida. */
if (frase !== null && frase !== "") {

    /* Utilizando .toLowerCase conseguimos que la frase se convierta a minúsculas para que no haya distinción con las mayúsculas. */
    let fraseMinusculas = frase.toLowerCase();

    /* Creo un contador para la letra 'a', inializando la variable con valor 0. */
    let contadorA = 0;

    /* El bucle for recorre la frase, carácter por carácter, añadiendo al contador el número de 'a' encontradas. */
    for (let i = 0; i < fraseMinusculas.length; i++) {

        if (fraseMinusculas[i] === "a") {
            contadorA++;
        }
    }

    /* Imprimo en pantalla una frase para cada resultado. */
    document.write("La letra 'a' aparece " + contadorA + " veces.");

} else {

    document.write("Escriba una frase válida.");

}

