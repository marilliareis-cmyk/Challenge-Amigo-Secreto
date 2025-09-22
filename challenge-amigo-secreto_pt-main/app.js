//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigoSorteado=[]

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo.trim() === "") {
    alert("Por favor, insira um nome.");
    return;

amigos.push(nomeAmigo);

atualizarListaAmigos();

document.getElementById('nome-amigo').value = "";
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('lista-amigos');

    listaAmigos.innerHTML = "";

    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione um nome antes de sortear.");
        return;

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = 'O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;

    }


    






