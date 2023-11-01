/* Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario> */

/* Declaro una variable let con prompt para crear un cuadro de diálogo que obligue al usuario a introducir un nombre de usuario. */
let nombre = prompt("Por favor, ingresa un nombre de usuario:");

/* Compruebo que el nombre introducido es válido, en caso de que lo sea saldrá un mensaje de bienvenida con el nombre del usuario. 
Si no fuera válido, se imprimiría en pantalla otro texto (en este caso, "nombre de usuario requerido"). */
if (nombre !== null && nombre !== "") {
    let mensaje = "Hola, " + nombre + ".";
    document.write(mensaje);
    }
 else {  document.write("Nombre de usuario requerido.");
}