
function juntarNome(){

 
const nome = document.getElementById('nome').value
const sobrenome = document.getElementById ('sobrenome').value
const resultado = document.getElementById('resultado')

const nomeCompleto = `${nome} ${sobrenome}`;
resultado.textContent = nomeCompleto
}
document.getElementById('juntar').addEventListener ('click', juntarNome)