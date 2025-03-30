// Botão de ver senha
let botao = document.querySelector('.fa-eye')
botao.addEventListener('click', function(){
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
        } else {
            inputSenha.setAttribute('type', 'password')
        }
})
// Fazendo enter mudar de campos
let inputs = document.querySelectorAll('input'); // Seleciona todos os campos
inputs.forEach((input, index) => { // Começa a avaliar todos os campos
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {  // Detecta se enter foi apertado
            e.preventDefault(); // Impede a função original
            if (inputs[index + 1]) {  // Detecta se tem mais um campos
                inputs[index + 1].focus();  // Passa pro próximo campos
            }
        }
    });
});
// Criando entrar
function entrar(){
    let usuario = document.querySelector('#usuario')
    let labelusuario = document.querySelector('#labelusuario')

    let senha = document.querySelector('#senha')
    let labelsenha = document.querySelector('#labelsenha')

    let msgError = document.querySelector('#msgError')
    let listaUser = []
    // Lista de usuários registrados
    let uservalid = {
        nome: null,
        usuario: null,
        senha: null
    }
    // Criando o armazenamento
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    if (!listaUser) {
        listaUser = [];
    }
    // Salvando os dados do Usuário logado
    listaUser.forEach(item => {
        if(usuario.value == item.usuarioCad && senha.value == item.senhaCad){
            uservalid = {
                nome: item.nomeCad,
                usuario: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    })
    // Redirecionando o Usuário caso seja correto
    if (usuario.value == uservalid.usuario && senha.value == uservalid.senha){
    // Redirecionando para a página inicial
        window.location.href = '../../index.html'
    // Criando o token
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2) 
    // Guardando o token de login
        localStorage.setItem('token', token)
    // Colocando dado de user logado
        localStorage.setItem('userLogado', JSON.stringify(uservalid))
    // Notificando o erro
    } else {
        labelusuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelsenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou Senha incorreto'
        usuario.focus()
    }
}