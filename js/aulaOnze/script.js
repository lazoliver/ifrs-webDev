function verificaForm() {
    if(document.getElementById("nome").value == "") {
        document.getElementById("nome").style.borderColor = "red";
        document.getElementById("nome").style.backgroundColor = "#ffe5e5";
        document.getElementById("nome").focus();
        return false;
    } return true;
}