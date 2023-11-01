/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7. */
/* Ejercicios 11 y 12 realizados en este mismo archivo .js. */


/* Declaro una variable para el texto con prompt y esta vez utilizo parseInt ya que quiero trabajar solo con números enteros y no decimales. */
let numero = parseInt(prompt("Introduzca un número"));

/* Compruebo que el número sea válido. */
if (!isNaN(numero)) {

    /* Con estas variables compruebo si el número introducido es divisible por 2, 3, 5 o 7. */
    let esDivisiblePor2 = numero % 2 === 0;
    let esDivisiblePor3 = numero % 3 === 0;
    let esDivisiblePor5 = numero % 5 === 0;
    let esDivisiblePor7 = numero % 7 === 0;


    /*Aquí se imprimirían los respectivos resultados. */
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

  /* Como en ejercicios anteriores, si el usuario no introduce números válidos se le pide que vuelva a introducirlos. */
} else {

    document.write("Introduzca un número válido.");

}

