// Função para buscar os dados do usuário logado
let userLogado = JSON.parse(localStorage.getItem('userLogado')) 
// Verifica se o usuário está logado
let logado = document.querySelector('#logado')
// Mensagem de boas-vindas
logado.innerHTML = `Olá ${userLogado.nome}`
// Verifica se o usuário tem um token de autenticação
if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = './Assets/html/signin.html'
}
// Ações do botão de sair
function sair(){
  // Remove o token e os dados do usuário logado do localStorage
  localStorage.removeItem('token')
  // Remove o usuário logado do localStorage
  localStorage.removeItem('userLogado')
  // Redireciona para a página de login
  window.location.href = './Assets/html/signin.html'
}