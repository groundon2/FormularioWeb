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
    const elementoAlvo = cpf
    const cpfAtual = cpf.value   

    let cpfAtualizado;

    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
    function( regex, argumento1, argumento2, argumento3, argumento4 ) {
        return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })  
    elementoAlvo.value = cpfAtualizado;
}

function Cor_Original(){
    document.getElementById('teste').style.backgroundColor = 'gray'
}

function Cadastrar(){
    inputM = document.getElementById('M').checked
    inputF = document.getElementById('F').checked
    if(inputF == false && inputM == false){
        alert("Selecione seu sexo.")
        return false
    }else{
        alert("Cadastro realizado com sucesso!!!")
        return true
    }
}