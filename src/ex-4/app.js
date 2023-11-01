/*Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.*/


/* Declaro dos variables let, con prompt para que cree un cuadro de diálogo y parseFloat ya que en este caso, estamos tratando únicamente con números. */
let numeroUno = parseFloat(prompt("Primer número requerido"));
let numeroDos = parseFloat(prompt("Segundo número requerido"));

/* Compruebo que ambos números sean válidos. */
if (!isNaN(numeroUno) && !isNaN(numeroDos)) {


    /* Dentro de la condicional, declaro otras dos variables; una llamada resultado donde haré la suma de las variables anteriores y otra para el mensaje 
    que se imprimirá (una vez más, con document.write) en pantalla una vez realizada la suma. */
    let resultado = numeroUno + numeroDos;
    let mensaje = "La suma de " + numeroUno + " más " + numeroDos + " es " + resultado;

    document.write(mensaje);

    /* En caso de que los números no sean válidos, imprime este mensaje. */
} else {
    document.write("Por favor, ingrese números válidos.");
}
