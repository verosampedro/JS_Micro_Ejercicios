/* Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario> */

let nombre = prompt("Por favor, ingresa un nombre de usuario:");

if (nombre !== null && nombre !== "") {
    let mensaje = "Hola, " + nombre + ".";
    document.write(mensaje);
    }
 else {  document.write("Nombre de usuario requerido.");
}