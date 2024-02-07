// Selecionando elementos
const form = document.querySelector("#form");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const boxModal = document.querySelector("#boxModal");
const msgModal = document.querySelector("#msgModal");
const btnFecharModal = document.querySelector("#btnFecharModal");

// Eventos
window.addEventListener("click", detectarClique);
window.addEventListener("keydown", detectarTecla);
form.addEventListener("submit", validarForm);
btnFecharModal.addEventListener("click", fecharModal);

// Funções

// Função que detecta um clique na tela
function detectarClique(event){
    // Verifica se elemento clicado é a box do modal
    if(event.target === boxModal){
        fecharModal();
    }
}

// Função que detecta se uma tecla foi pressionada
function detectarTecla(event){
    // Verifica se tecla pressionada foi "Esc"
    if(event.key === "Escape"){
        fecharModal();
    }
}

// Função que valida o formulário
function validarForm(event){
    event.preventDefault();

    // Verifica se usuário não informou um e-mail
    if(inputEmail.value === ""){
        exibirModal("Por favor, informe um e-mail");

        return;
    }

    // Verifica se usuário informou um e-mail inválido
    if(!validarEmail(inputEmail.value)){
        exibirModal("Por favor, informe um e-mail válido (Ex: email@email.br)");

        return;
    }

    // Verifica se usuário não informou uma senha
    if(inputSenha.value === ""){
        exibirModal("Por favor, informe uma senha");

        return;
    }

    // Verifica se usuário informou uma senha inválida
    if(!validarSenha(inputSenha.value)){
        exibirModal("Por favor, informe uma senha válida. Ela deve conter pelo menos 8 caracteres, compostos por letras minúsculas, maiúsculas, símbolos (!@#$%&*) e números");

        return;
    }

    form.submit();
}

// Função que fecha o modal
function fecharModal(){
    // Verifica se modal está sendo exibido
    if(boxModal.classList.contains("ativo")){
        msgModal.textContent = "";
        boxModal.classList.remove("ativo");
    }
}

// Função que exibe o modal
function exibirModal(msg){
    // Verifica se modal não está sendo exibido
    if(!boxModal.classList.contains("ativo")){
        msgModal.textContent = msg;
        boxModal.classList.add("ativo");
    }
}

// Função que valida o e-mail
function validarEmail(email){
    const emailRegExp = new RegExp("^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]\.[a-zA-Z0-9_.]{2,}$");

    return emailRegExp.test(email);
}

// Função que valida a senha
function validarSenha(senha){
    const senhaRegExp = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,}");

    return senhaRegExp.test(senha);
}