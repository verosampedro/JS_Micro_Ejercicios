/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro). */

let numero = parseInt(prompt("Introduzca un número"));

if (!isNaN(numero)) {

    let esDivisiblePor2 = numero % 2 === 0;
    let esDivisiblePor3 = numero % 3 === 0;
    let esDivisiblePor5 = numero % 5 === 0;
    let esDivisiblePor7 = numero % 7 === 0;


    document.write("El número " + numero + " es divisible por:");

    if (esDivisiblePor2) {

        document.write(" 2");
    }

      if (esDivisiblePor3) {

        document.write(" 3");

    }

      if (esDivisiblePor5) {

        document.write(" 5");

    }

      if (esDivisiblePor7) {

        document.write(" 7");

    }

    if (!esDivisiblePor2 && !esDivisiblePor3 && !esDivisiblePor5 && !esDivisiblePor7) {

        document.write(" ninguno de los números.");

    }

} else {

    document.write("Introduzca un número válido.");

}

