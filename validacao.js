function Validacao(){
	tecla = event.keyCode;
	if (tecla >= 48 && tecla <= 57)
        return false
    return true
}

function Maiuscula(campo){
    var x = document.getElementById(campo);
    x.value = x.value.toUpperCase();
}

function Muda_Cor(){
    document.getElementById('teste').style.backgroundColor = 'red'
}

function Validar_cpf(){
    tecla = event.keyCode;
    cpf = document.getElementById("cpf").value;
    if (tecla >= 48 && tecla <= 57){ 
        console.log(cpf);
        tamanho = cpf.length;
        if(tamanho == 3 || tamanho == 7){
            document.getElementById("cpf").value = cpf.concat('.');
        }
        else if(tamanho == 11)
            document.getElementById("cpf").value = cpf.concat('-');
        return true;
    }
    else if(tecla == 8){
        console.log("Apagou");
    }
    else
        return false;
}

function Cor_Original(){
    document.getElementById('teste').style.backgroundColor = 'gray'
}