function calculaImc() {
    document.getElementById("peso").style.borderColor = "#ffffff";
    document.getElementById("peso").style.backgroundColor = "#ffffff";
    document.getElementById("altura").style.borderColor = "#ffffff";
    document.getElementById("altura").style.backgroundColor = "#ffffff";
    if(document.getElementById("peso").value == "") {
        document.getElementById("peso").style.borderColor = "red";
        document.getElementById("peso").style.backgroundColor = "$ffe5e5"
        document.getElementById("peso").focus();
        return false
    }
    if(document.getElementById("altura").value == "") {
        document.getElementById("altura").style.borderColor = "red";
        document.getElementById("altura").style.backgroundColor = "$ffe5e5"
        document.getElementById("altura").focus();
        return false
    }
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = (peso/(altura * altura));
    document.getElementById("log").innerHTML += `Seu IMC é ${resultado}.`
    return true
}