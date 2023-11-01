/* Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales. */

/* Variable con prompt para el cuadro de diálogo. */
let frase = prompt("Escriba una frase");

/* Compruebo que la frase es válida. */
if (frase !== null && frase !== "") {


    /* Utilizando .toLowerCase conseguimos que la frase se convierta a minúsculas para que no haya distinción con las mayúsculas. */
    let fraseMinusculas = frase.toLowerCase();

    /* Creo un contador distinto para cada vocal, inializando las variables con valor 0. */
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    /* El bucle for recorre la frase, carácter por carácter, sumando el número a cada contador si aparece una de las vocales indicadas. */
    for (let i = 0; i < fraseMinusculas.length; i++) {
        let caracter = fraseMinusculas[i];
        switch (caracter) {
          case 'a':
            contadorA++;
            break;

          case 'e':
            contadorE++;
            break;

          case 'i':
            contadorI++;
            break;

          case 'o':
            contadorO++;
            break;

          case 'u':
            contadorU++;
            break;
        }
      }

      /* Imprimo en pantalla una línea de texto para cada resultado y en caso de que la frase introducida no fuera válida, se le pide al usuario una nueva. */
      document.write("Cantidad de 'a' en la frase: " + contadorA + ". ");
      document.write("Cantidad de 'e' en la frase: " + contadorE + ". ");
      document.write("Cantidad de 'i' en la frase: " + contadorI + ". ");
      document.write("Cantidad de 'o' en la frase: " + contadorO + ". ");
      document.write("Cantidad de 'u' en la frase: " + contadorU + ". ");

} else {

    document.write("Escriba una frase válida.");

}