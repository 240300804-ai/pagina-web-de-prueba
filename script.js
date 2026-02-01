document.getElementById("formRegistro").addEventListener("submit", function (e) {
    e.preventDefault();

    let campos = ["nombre", "correo", "password", "telefono", "edad", "fecha"];

    for (let id of campos) {
        if (document.getElementById(id).value === "") {
            alert("Llena todos los campos 😅");
            return;
        }
    }

    if (!document.getElementById("terminos").checked) {
        alert("Acepta los términos para continuar");
        return;
    }

    alert("Registro exitoso 😎");
});
