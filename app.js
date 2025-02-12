// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const inputAmigos = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const listaResultados = document.getElementById("resultado");

function agregarAmigo() {
   const nombre = inputAmigos.value.trim();
   if (nombre === "") {
    alert("Por favor ingrese un nombre");
   return;
}

if (!amigos.includes(nombre)) {
    amigos.push(nombre);
    actualizarLista();
} else {
    alert("Este nombre ya ha sido ingresado");
}
    inputAmigos.value = "";
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function verificarArrayAmigos() {
    return amigos.length > 0;
}

function sortearAmigo() {
    listaResultados.innerHTML = "";
if (!verificarArrayAmigos()) {
    alert("No hay amigos para sortear");
    return;
 }

 let indiceAmigoSorteado = Math.floor(Math.random()* amigos.length);
 let nombreSorteado = amigos[indiceAmigoSorteado];

 let li = document.createElement("li");
 li.textContent = nombreSorteado;
 listaResultados.appendChild(li);
 amigos.splice(indiceAmigoSorteado, 1);
 actualizarLista;

}