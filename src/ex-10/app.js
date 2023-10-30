/* Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales. */

let frase = prompt("Escriba una frase");

if (frase !== null && frase !== "") {

    let fraseMinusculas = frase.toLowerCase();

    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

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

      document.write("Cantidad de 'a' en la frase: " + contadorA + ". ");
      document.write("Cantidad de 'e' en la frase: " + contadorE + ". ");
      document.write("Cantidad de 'i' en la frase: " + contadorI + ". ");
      document.write("Cantidad de 'o' en la frase: " + contadorO + ". ");
      document.write("Cantidad de 'u' en la frase: " + contadorU + ". ");

} else {

    document.write("Escriba una frase válida.");

}