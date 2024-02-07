alert("¡Hola Mundo2!");

function solicitarNombre() {
    var nombre = prompt("Por favor, introduce tu nombre:");
    
    if (nombre === null || nombre === "") {
        console.error("No se ha introducido valor.");
        alert("No has escrito tu nombre.");
    } else {
        var confirmacion = confirm("¿Es '" + nombre + "' tu nombre?");
        
        if (confirmacion) {
            console.log("El nombre es correcto");
            alert("¡Bienvenido!");
        } else {
            console.warn("No se sabe su nombre.");
        }
    }
}