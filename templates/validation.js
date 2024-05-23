
//Funcion de validacion de campos

function validaForm() {
    // Obtengo los valores de los campos, todos menos los países, por que por defecto siempre esta seleccionado uno, argentina.
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let consulta = document.getElementById("consulta").value;
    let terminos = document.getElementById("terminos").checked

    // Obtengo los elementos de error
    let errorNombre = document.getElementById("error-nombre");
    let errorMail = document.getElementById("error-mail");
    let errorConsulta = document.getElementById("error-consulta");
    let errorTerminos = document.getElementById("error-terminos");

    // Se inicializan los mensajes de error, en vacío
    errorNombre.innerHTML = "";
    errorMail.innerHTML = "";
    errorConsulta.innerHTML = "";
    errorTerminos.innerHTML = "";

    // Se validan que los campos no estén vacíos y que el correo tenga formato válido
    let valido = true;
    if (nombre === "") {
        errorNombre.innerHTML = "¡El nombre es obligatorio!";
        valido = false;
    }
    if (mail === "") {
        errorMail.innerHTML = "¡El correo electrónico es obligatorio!";
        valido = false;
    } else if (!validaCorreo(mail)) {
        errorMail.innerHTML = "¡El correo electrónico no tiene un formato válido!";
        valido = false;
    }
    if (consulta === "" || consulta === " # Escribe tu consulta…") {
        errorConsulta.innerHTML = "¡Debes escribirnos alguna consulta!";
        valido = false;
    }
    if (!terminos) {
        errorTerminos.innerHTML = "¡Debes aceptar los Términos y Condiciones!!!";
        valido = false;
    }

    return valido;} // true si el formulario es válido, false de lo contrario


function validaCorreo(correo) {
    let patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo electrónico
    return patronCorreo.test(correo)}


function mostrarTerminos() {
    alert("Términos y condiciones:\n\n- El Administrador puede recoger datos específicos de su consulta para la evaluación y mejora de la página, a través de un servicio prestado por Google Analytics.\n- No nos hacemos responsables por la información recibida ni nos comprometemos a responderle.");
}