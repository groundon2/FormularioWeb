function Validacao(form) {
    var nome = document.forms['formulario']['nome'].value;
    var sexo = document.forms['formulario']['sexo'].value;
    var email = document.forms['formulario']['email'].value;
    var cidade = document.forms['formulario']['cidade'].value;
    if (nome == "") {
        alert("O campo nome não está preenchido!!!");
        return false;
    } else if (sexo == "") {
        alert("O campo sexo não está marcado!!!");
        return false;
    } else if (email == "") {
        alert("O campo email não está preenchido!!!");
        return false;
    } else if (cidade == "") {
        alert("O campo cidade não está preenchido!!!");
        return false;
    }
}

function label1(formu) {
    var nome1 = document.getElementById("input1").value;
    var nome = document.forms['formulario']['nome'].value;
    console.log(nome);
    if (nome != "") {
        document.getElementById('label1').style.marginTop = "-120px";
        document.getElementById('label1').style.fontSize = "12px";
        document.getElementById('label1').style.lineHeight = "2";
        return true;
    }
}

function label2(formu) {
    var nome = document.forms['formulario']['email'].value;
    if (nome != "") {
        document.getElementById('label2').style.marginTop = "-120px";
        document.getElementById('label2').style.fontSize = "12px";
        document.getElementById('label2').style.lineHeight = "2";
        return true;
    }
}

function label3(formu) {
    var nome = document.forms['formulario']['cidade'].value;
    if (nome != "") {
        document.getElementById('label3').style.marginTop = "-120px";
        document.getElementById('label3').style.fontSize = "12px";
        document.getElementById('label3').style.lineHeight = "2";
        return true;
    }
}