
function validarFormulario(forma) {
    
    var usuario = forma.usuario;
    var valueUsuario = usuario.value;
    if (valueUsuario == "") {
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    if (valueUsuario.indexOf("@")==-1) {
        alert("Campo usuario debe llevar al menos un @.");
        usuario.focus();
        usuario.select();
        return false;
    }

    var password = forma.password;
    var valuePassword = password.value;
    if (valuePassword == "") {
        alert("Este campo no puede quedar vacío.");
        password.focus();
        password.select();
        return false;
      }
    //Formulario valido
    alert("Formulario valido, enviando datos...");
    return true;
}